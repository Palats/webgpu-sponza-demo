import RenderPass, { RenderPassType } from "../../../renderer/core/RenderPass";
import Renderer from "../../Renderer";
import PointLight from "../../../renderer/lighting/PointLight";
import TextureLoader from "../../../renderer/texture/TextureLoader";
import Skybox from "../../meshes/Skybox";
import { BIND_GROUP_LOCATIONS } from "../../../renderer/core/RendererBindings";
import DirectionalLightSubPass from "./DirectionalLightSubPass";
import PointLightsRenderSubPass from "./PointLightsRenderSubPass";
import PointLightsMaskSubPass from "./PointLightsMaskSubPass";
import Scene from "../../../renderer/scene/Scene";

export default class GBufferIntegratePass extends RenderPass {
	public outTexture: GPUTexture;
	public outTextureView: GPUTextureView;

	public skybox?: Skybox;

	private gbufferTexturesBindGroup: GPUBindGroup;
	private gbufferCommonBindGroupLayout: GPUBindGroupLayout;
	private lightsMaskBindGroupLayout: GPUBindGroupLayout;

	private dirLightPass?: DirectionalLightSubPass;
	private pointsLightRenderPass?: PointLightsRenderSubPass;
	private pointsLightMasPass?: PointLightsMaskSubPass;

	private pointLights: PointLight[] = [];

	private debugLightsBuffer: GPUBuffer;

	private _debugPointLights = false;
	public get debugPointLights(): boolean {
		return this._debugPointLights;
	}
	public set debugPointLights(v: boolean) {
		if (v !== this._debugPointLights) {
			Renderer.device.queue.writeBuffer(
				this.debugLightsBuffer,
				0,
				new Float32Array([v ? 1 : 0]),
			);
		}
		this._debugPointLights = v;
	}

	private _debugShadowCascadeIndex = false;
	public get debugShadowCascadeIndex(): boolean {
		return this._debugShadowCascadeIndex;
	}
	public set debugShadowCascadeIndex(v: boolean) {
		if (v !== this.debugShadowCascadeIndex) {
			Renderer.device.queue.writeBuffer(
				this.debugLightsBuffer,
				Float32Array.BYTES_PER_ELEMENT,
				new Float32Array([v ? 1 : 0]),
			);
		}
		this._debugShadowCascadeIndex = v;
	}

	public setDiffuseIBLTexture(texture: GPUTexture): this {
		this.dirLightPass?.setDiffuseIBLTexture(texture);
		return this;
	}

	public setSpecularIBLTexture(texture: GPUTexture): this {
		this.dirLightPass?.setSpecularIBLTexture(texture);
		return this;
	}

	public setBDRFLutTexture(texture: GPUTexture): this {
		this.dirLightPass?.setBDRFLutTexture(texture);
		return this;
	}

	constructor(
		scene: Scene,
		private normalMetallicRoughnessTextureView: GPUTextureView,
		private colorReflectanceTextureView: GPUTextureView,
		private depthTextureView: GPUTextureView,
		private depthStencilTextureView: GPUTextureView,
		private shadowDepthTextureView: GPUTextureView,
		private shadowCascadesBuffer: GPUBuffer,
	) {
		super(RenderPassType.DeferredLighting, scene);

		this.pointLights = scene.getPointLights();

		const gbufferCommonBindGroupLayoutEntries: GPUBindGroupLayoutEntry[] = [
			{
				binding: 0,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {},
			},
			{
				binding: 1,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {},
			},
			{
				binding: 2,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {
					sampleType: "depth",
				},
			},
			{
				binding: 3,
				visibility: GPUShaderStage.FRAGMENT,
				texture: {},
			},
			{
				binding: 4,
				visibility: GPUShaderStage.FRAGMENT,
				sampler: {},
			},
			{
				binding: 5,
				visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
				buffer: {
					type: "uniform",
				},
			},
			{
				binding: 6,
				visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
				buffer: {
					type: "read-only-storage",
				},
			},
			{
				binding: 7,
				visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
				buffer: {
					type: "uniform",
				},
			},
		];

		this.gbufferCommonBindGroupLayout = Renderer.device.createBindGroupLayout({
			label: "GBuffer Textures Bind Group",
			entries: gbufferCommonBindGroupLayoutEntries,
		});

		const lightsMaskBindGroupLayoutEntries: GPUBindGroupLayoutEntry[] = [
			{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: {
					type: "uniform",
				},
			},
			{
				binding: 1,
				visibility: GPUShaderStage.VERTEX,
				buffer: {
					type: "read-only-storage",
				},
			},
		];

		this.lightsMaskBindGroupLayout = Renderer.device.createBindGroupLayout({
			label: "Light Masking Bind Group",
			entries: lightsMaskBindGroupLayoutEntries,
		});

		// const lightMaskStencilState: GPUStencilFaceState = {
		// 	compare: "always",
		// 	depthFailOp: "increment-clamp",
		// 	failOp: "keep",
		// 	passOp: "keep",
		// };

		this.debugLightsBuffer = Renderer.device.createBuffer({
			label: "Debug Lights GPUBuffer",
			size: 4 * Float32Array.BYTES_PER_ELEMENT,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
			mappedAtCreation: true,
		});

		new Float32Array(this.debugLightsBuffer.getMappedRange()).set(
			new Float32Array([0, 0]),
		);
		this.debugLightsBuffer.unmap();
	}

	public override onResize(width: number, height: number): void {
		if (this.outTexture) {
			this.outTexture.destroy();
		}
		this.outTexture = Renderer.device.createTexture({
			dimension: "2d",
			format: "rgba16float",
			mipLevelCount: 1,
			sampleCount: 1,
			size: { width, height, depthOrArrayLayers: 1 },
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.RENDER_ATTACHMENT |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "GBuffer Result Texture",
		});
		this.outTextureView = this.outTexture.createView();

		const bayerDitherSampler = Renderer.device.createSampler({
			addressModeU: "repeat",
			addressModeV: "repeat",
			minFilter: "nearest",
			magFilter: "nearest",
		});

		const gbufferTexturesBindGroupEntries: GPUBindGroupEntry[] = [
			{
				binding: 0,
				resource: this.normalMetallicRoughnessTextureView,
			},
			{
				binding: 1,
				resource: this.colorReflectanceTextureView,
			},
			{
				binding: 2,
				resource: this.depthTextureView,
			},
			{
				binding: 3,
				resource: TextureLoader.bayerDitherPatternTexture.createView(),
			},
			{
				binding: 4,
				resource: bayerDitherSampler,
			},
			{
				binding: 5,
				resource: {
					buffer: this.camera.gpuBuffer,
				},
			},
			{
				binding: 6,
				resource: {
					buffer: this.scene.lightsBuffer,
				},
			},
			{
				binding: 7,
				resource: {
					buffer: this.debugLightsBuffer,
				},
			},
		];

		this.gbufferTexturesBindGroup = Renderer.device.createBindGroup({
			layout: this.gbufferCommonBindGroupLayout,
			entries: gbufferTexturesBindGroupEntries,
		});

		this.dirLightPass = new DirectionalLightSubPass(
			this.gbufferCommonBindGroupLayout,
			this.gbufferTexturesBindGroup,
			this.shadowCascadesBuffer,
			this.shadowDepthTextureView,
		);

		this.pointsLightRenderPass = new PointLightsRenderSubPass(
			this.gbufferCommonBindGroupLayout,
			this.gbufferTexturesBindGroup,
		);
		this.pointsLightRenderPass?.setPointLights(this.pointLights);

		const lightsMaskBindGroupEntries: GPUBindGroupEntry[] = [
			{
				binding: 0,
				resource: {
					buffer: this.camera.gpuBuffer,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: this.scene.lightsBuffer,
				},
			},
		];

		const lightMaskBindGroup = Renderer.device.createBindGroup({
			layout: this.lightsMaskBindGroupLayout,
			entries: lightsMaskBindGroupEntries,
		});

		this.pointsLightMasPass = new PointLightsMaskSubPass(
			this.lightsMaskBindGroupLayout,
			lightMaskBindGroup,
		);
		this.pointsLightMasPass.setPointLights(this.pointLights);
	}

	protected override createRenderPassDescriptor(): GPURenderPassDescriptor {
		const renderPassColorAttachments: GPURenderPassColorAttachment[] = [
			{
				view: this.outTextureView,
				loadOp: "clear",
				clearValue: [0, 0, 0, 1],
				storeOp: "store",
			},
		];
		return {
			label: "GBuffer Integrate Render Pass",
			colorAttachments: renderPassColorAttachments,
			depthStencilAttachment: {
				depthReadOnly: true,
				stencilReadOnly: false,
				view: this.depthStencilTextureView,
				// depthLoadOp: "load",
				// depthStoreOp: "store",
				stencilLoadOp: "load",
				stencilStoreOp: "store",
			},
		};
	}

	protected createSkyboxRenderPassDescriptor(): GPURenderPassDescriptor {
		const renderPassColorAttachments: GPURenderPassColorAttachment[] = [
			{
				view: this.outTextureView,
				loadOp: "load",
				storeOp: "store",
			},
		];
		return {
			label: "Skybox render Pass",
			colorAttachments: renderPassColorAttachments,
			depthStencilAttachment: {
				depthReadOnly: true,
				view: this.depthStencilTextureView,
				stencilLoadOp: "load",
				stencilStoreOp: "store",
			},
		};
	}

	private createLightMaskPassDescriptor(): GPURenderPassDescriptor {
		return {
			label: "Mask Lights Render Pass",
			colorAttachments: [],
			depthStencilAttachment: {
				view: this.depthStencilTextureView,
				// depthReadOnly: true,
				// stencilReadOnly: false,
				depthLoadOp: "load",
				depthStoreOp: "store",
				stencilLoadOp: "clear",
				stencilStoreOp: "store",
				stencilClearValue: 0,
			},
		};
	}

	public override render(commandEncoder: GPUCommandEncoder): void {
		// Mask Point Lights
		const lightMaskPassDescriptor = this.createLightMaskPassDescriptor();
		const lightMaskEncoder = commandEncoder.beginRenderPass(
			lightMaskPassDescriptor,
		);

		this.pointsLightMasPass?.render(lightMaskEncoder);

		lightMaskEncoder.end();

		const renderPassDescriptor = this.createRenderPassDescriptor();
		const renderPassEncoder =
			commandEncoder.beginRenderPass(renderPassDescriptor);

		this.pointsLightRenderPass?.render(renderPassEncoder);
		this.dirLightPass?.render(renderPassEncoder);

		renderPassEncoder.end();

		// Skybox
		if (this.skybox) {
			const skyboxRenderPassEncoder = commandEncoder.beginRenderPass(
				this.createSkyboxRenderPassDescriptor(),
			);

			skyboxRenderPassEncoder.setBindGroup(
				BIND_GROUP_LOCATIONS.CameraPlusOptionalLights,
				this.cameraBindGroup,
			);

			this.skybox.render(skyboxRenderPassEncoder);

			skyboxRenderPassEncoder.end();
		}
	}
}