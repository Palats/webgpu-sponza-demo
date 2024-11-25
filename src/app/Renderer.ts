import CameraController from "../renderer/camera/CameraController";
import PerspectiveCamera from "../renderer/camera/PerspectiveCamera";
import {
	BIND_GROUP_LOCATIONS,
	MAIN_CAMERA_FAR,
	MAIN_CAMERA_NEAR,
	ORTHO_CAMERA_FAR,
	ORTHO_CAMERA_NEAR,
} from "./constants";
import Drawable from "../renderer/scene/Drawable";
import PipelineStates from "../renderer/core/PipelineStates";
import OrthographicCamera from "../renderer/camera/OrthographicCamera";
import TextureDebugMesh, {
	TextureDebugMeshType,
} from "./meshes/debug/TextureDebugMesh";
import GBufferRenderPass from "./render-passes/GBufferRenderPass";
import GBufferIntegratePass from "./render-passes/GBufferIntegratePass";
import GroundContainer from "./meshes/ground/GroundContainer";
import CubeGeometry from "../renderer/geometry/CubeGeometry";
import MaterialCache from "./utils/MaterialCache";
import Transform from "../renderer/scene/Transform";
import ReflectionComputePass from "./render-passes/ReflectionComputePass";
import SphereGeometry from "../renderer/geometry/SphereGeometry";
import TAAResolvePass from "./render-passes/TAAResolvePass";
import PointLight from "../renderer/lighting/PointLight";
import Light from "../renderer/lighting/Light";
import DirectionalLight from "../renderer/lighting/DirectionalLight";

export default class Renderer {
	public static $canvas: HTMLCanvasElement;
	public static canvasContext: GPUCanvasContext;
	public static device: GPUDevice;
	public static elapsedTimeMs = 0;
	private static prevTimeMs = 0;

	public static pixelFormat: GPUTextureFormat;
	public static readonly depthStencilFormat: GPUTextureFormat =
		"depth32float-stencil8";

	public orthoCamera: OrthographicCamera;
	public mainCamera: PerspectiveCamera;
	public mainCameraCtrl: CameraController;

	private rootTransform = new Transform();
	private ground: GroundContainer;
	private cube: Drawable;
	private sphere: Drawable;

	private debugNormalTextureMesh?: TextureDebugMesh;
	private debugReflectanceTextureMesh?: TextureDebugMesh;
	private debugColorTextureMesh?: TextureDebugMesh;
	private debugDepthTextureMesh?: TextureDebugMesh;
	private debugVelocityTextureMesh?: TextureDebugMesh;

	private gbufferRenderPass: GBufferRenderPass;
	private gbufferIntegratePass: GBufferIntegratePass;
	private reflectionComputePass: ReflectionComputePass;
	private taaResolvePass: TAAResolvePass;

	private lights: Light[];

	private orthoCameraBindGroup: GPUBindGroup;

	private _enableTAA = true;
	public get enableTAA(): boolean {
		return this._enableTAA;
	}
	public set enableTAA(v: boolean) {
		this._enableTAA = v;
		this.mainCamera.shouldJitter = v;
	}

	public debugGBuffer = false;

	public debugPointLights = false;

	private _enableAnimation = true;
	public get enableAnimation(): boolean {
		return this._enableAnimation;
	}
	public set enableAnimation(v: boolean) {
		this._enableAnimation = v;
	}

	public static initialize = async (
		canvas: HTMLCanvasElement,
	): Promise<Renderer> => {
		const adapter = await navigator.gpu.requestAdapter();

		Renderer.$canvas = canvas;
		Renderer.canvasContext = canvas.getContext("webgpu") as GPUCanvasContext;

		Renderer.pixelFormat = adapter.features.has("bgra8unorm-storage")
			? navigator.gpu.getPreferredCanvasFormat()
			: "rgba8unorm";

		const depth32Stencil8RenderFeature: GPUFeatureName =
			"depth32float-stencil8";
		const bgra8UnormStorageFeature: GPUFeatureName = "bgra8unorm-storage";
		Renderer.device = await adapter.requestDevice({
			requiredFeatures:
				Renderer.pixelFormat === "bgra8unorm"
					? [bgra8UnormStorageFeature, depth32Stencil8RenderFeature]
					: [depth32Stencil8RenderFeature],
		});

		Renderer.canvasContext.configure({
			device: Renderer.device,
			format: Renderer.pixelFormat,
			usage:
				GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.STORAGE_BINDING,
		});

		return new Renderer();
	};

	constructor() {
		this.mainCamera = new PerspectiveCamera(
			45,
			1,
			MAIN_CAMERA_NEAR,
			MAIN_CAMERA_FAR,
		);
		this.mainCamera.shouldJitter = true;
		this.mainCamera.setPosition(0, 2, 4);
		this.mainCamera.setLookAt(0, 0, 0);
		this.mainCamera.updateViewMatrix();
		this.mainCameraCtrl = new CameraController(
			this.mainCamera,
			Renderer.$canvas,
			false,
		);
		this.mainCameraCtrl.startTick();

		this.orthoCamera = new OrthographicCamera(
			0,
			1,
			1,
			0,
			ORTHO_CAMERA_NEAR,
			ORTHO_CAMERA_FAR,
		);
		this.orthoCamera.setPosition(0, 0, 1);
		this.orthoCamera.setLookAt(0, 0, 0);
		this.orthoCamera.updateViewMatrix();

		this.orthoCameraBindGroup = Renderer.device.createBindGroup({
			label: "Ortho Camera Bind Group",
			layout: PipelineStates.defaultCameraBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: {
						buffer: this.orthoCamera.gpuBuffer,
					},
				},
			],
		});

		this.rootTransform.updateWorldMatrix();

		this.ground = new GroundContainer();
		this.rootTransform.addChild(this.ground);

		this.cube = new Drawable(new CubeGeometry(1, 1, 1));
		this.cube.material = MaterialCache.defaultDeferredMaterial;
		this.cube.materialProps.isReflective = false;
		this.cube.materialProps.setColor(0.2, 0.2, 0.2);

		this.sphere = new Drawable(new SphereGeometry());
		this.sphere.material = MaterialCache.defaultDeferredMaterial;
		this.sphere.materialProps.setColor(0.3, 0.3, 0.3);
		// this.sphere.materialProps.isReflective = false;
		this.sphere
			.setScale(0.5, 0.5, 0.5)
			.setPositionX(2)
			.setPositionZ(1.2)
			.updateWorldMatrix();

		this.rootTransform.addChild(this.cube);
		this.rootTransform.addChild(this.sphere);

		// const pa = new PointLight();
		// pa.setPosition(3, 0.1, 0);
		// const pb = new PointLight();
		// pb.setPosition(-3, 0.1, 0);
		// const pc = new PointLight();
		// pc.setPosition(0, 0.1, 3);
		// const pd = new PointLight();
		// pd.setPosition(0, 0.1, -3);
		// const pe = new PointLight();
		// pe.setPosition(3, 0.1, -3);
		// const pf = new PointLight();
		// pf.setPosition(-3, 0.1, -3);

		const pointLights: PointLight[] = [];
		const pointLightsCount = 20;
		const pointLightsCircleStep = (Math.PI * 2) / pointLightsCount;
		const radiusStep = pointLightsCount / 4;
		for (let i = 0; i < pointLightsCount; i++) {
			const p = new PointLight();
			const r = i * radiusStep;
			p.setPosition(
				Math.cos(i * pointLightsCircleStep) * 4,
				0.2,
				Math.sin(i * pointLightsCircleStep) * 4,
			);
			p.intensity = 3;
			p.radius = 1;
			p.setColor(10, 10, 10);
			pointLights.push(p);
		}

		// this.pointLights = [pa, pb, pc, pd];
		const dirLight = new DirectionalLight();
		// dirLight.intensity = ;
		dirLight.setPosition(2, 2, 2);
		dirLight.setColor(4, 4, 4);
		this.lights = [...pointLights, dirLight];
	}

	public resize(w: number, h: number) {
		this.mainCamera.onResize(w, h);
		this.orthoCamera.onResize(w, h);

		if (!this.gbufferRenderPass) {
			this.gbufferRenderPass = new GBufferRenderPass();
			this.gbufferRenderPass.setCamera(this.mainCamera);
		}
		this.gbufferRenderPass.onResize(w, h);
		if (!this.gbufferIntegratePass) {
			this.gbufferIntegratePass = new GBufferIntegratePass(
				this.gbufferRenderPass.normalReflectanceTextureView,
				this.gbufferRenderPass.colorTextureView,
				this.gbufferRenderPass.depthTextureView,
				this.gbufferRenderPass.depthStencilTextureView,
				this.gbufferRenderPass.stencilTextureView,
			);
		}
		this.gbufferIntegratePass.setLights(this.lights);
		this.gbufferIntegratePass.setCamera(this.mainCamera);
		this.gbufferIntegratePass.onResize(w, h);

		if (!this.taaResolvePass) {
			this.taaResolvePass = new TAAResolvePass(
				this.gbufferIntegratePass.outTextureView,
				this.gbufferRenderPass.velocityTextureView,
			);
		}
		this.taaResolvePass.onResize(w, h);

		if (!this.reflectionComputePass) {
			this.reflectionComputePass = new ReflectionComputePass();
		}
		this.reflectionComputePass.onResize(w, h);

		this.debugReflectanceTextureMesh = new TextureDebugMesh(
			TextureDebugMeshType.Reflectance,
			this.gbufferRenderPass.normalReflectanceTextureView,
		);

		this.debugNormalTextureMesh = new TextureDebugMesh(
			TextureDebugMeshType.Normal,
			this.gbufferRenderPass.normalReflectanceTextureView,
		);

		this.debugColorTextureMesh = new TextureDebugMesh(
			TextureDebugMeshType.Albedo,
			this.gbufferRenderPass.colorTextureView,
		);

		this.debugDepthTextureMesh = new TextureDebugMesh(
			TextureDebugMeshType.Depth,
			this.gbufferRenderPass.depthTextureView,
		);

		this.debugVelocityTextureMesh = new TextureDebugMesh(
			TextureDebugMeshType.Velocity,
			this.gbufferRenderPass.velocityTextureView,
		);

		const debugMeshWidth = w * 0.175;
		const debugMeshHeight = h * 0.175;

		var offsetX = debugMeshWidth * 0.5 + 10;

		const debugMeshes: TextureDebugMesh[] = [
			this.debugNormalTextureMesh,
			this.debugReflectanceTextureMesh,
			this.debugColorTextureMesh,
			this.debugDepthTextureMesh,
			this.debugVelocityTextureMesh,
		];

		for (const debugMesh of debugMeshes) {
			debugMesh
				.setPosition(offsetX, debugMeshHeight * 0.5 + 10, 0)
				.setScale(debugMeshWidth, debugMeshHeight, 1)
				.updateWorldMatrix();
			offsetX += debugMeshWidth;
		}
	}

	public renderFrame(elapsedTime: number) {
		const now = (elapsedTime - Renderer.elapsedTimeMs) * 0.001;
		const deltaDiff = now - Renderer.prevTimeMs;
		Renderer.prevTimeMs = now;
		Renderer.elapsedTimeMs += this.enableAnimation ? deltaDiff : 0;

		const device = Renderer.device;

		// console.log({ x, y });

		this.gbufferIntegratePass.debugPointLights = this.debugPointLights;
		this.gbufferIntegratePass.setLights(this.lights);

		this.mainCamera.onFrameStart();
		this.orthoCamera.onFrameStart();

		if (this.enableAnimation) {
			this.cube
				.setPositionY(1)
				.setScale(2, 2, 2)
				.setRotationY(Renderer.elapsedTimeMs)
				.updateWorldMatrix();

			this.sphere
				.setScale(1, 1, 1)
				.setPositionX(Math.cos(Renderer.elapsedTimeMs) * 3)
				.setPositionZ(Math.sin(Renderer.elapsedTimeMs) * 3)
				.updateWorldMatrix();
		}

		const commandEncoder = device.createCommandEncoder({
			label: "Render Loop Command Encoder",
		});

		this.gbufferRenderPass.render(commandEncoder, this.rootTransform);
		this.gbufferIntegratePass.render(commandEncoder);
		if (this.enableTAA) {
			this.taaResolvePass.render(commandEncoder);
		}
		this.reflectionComputePass.computeReflections(
			commandEncoder,
			Renderer.canvasContext.getCurrentTexture(),
			this.enableTAA
				? this.taaResolvePass.outTextureView
				: this.gbufferIntegratePass.outTextureView,
		);

		if (this.debugGBuffer) {
			const hudRenderPassColorAttachments: GPURenderPassColorAttachment[] = [
				{
					view: Renderer.canvasContext.getCurrentTexture().createView(),
					loadOp: "load",
					storeOp: "store",
				},
			];

			const hudRenderPassDescriptor: GPURenderPassDescriptor = {
				colorAttachments: hudRenderPassColorAttachments,
				depthStencilAttachment: undefined,
				label: "HUD Render Pass",
			};
			const hudRenderEncoder = commandEncoder.beginRenderPass(
				hudRenderPassDescriptor,
			);

			hudRenderEncoder.setBindGroup(
				BIND_GROUP_LOCATIONS.Camera,
				this.orthoCameraBindGroup,
			);

			this.debugNormalTextureMesh?.render(hudRenderEncoder);
			this.debugColorTextureMesh?.render(hudRenderEncoder);
			this.debugReflectanceTextureMesh?.render(hudRenderEncoder);
			this.debugDepthTextureMesh?.render(hudRenderEncoder);
			this.debugVelocityTextureMesh?.render(hudRenderEncoder);

			hudRenderEncoder.end();
		}
		device.queue.submit([commandEncoder.finish()]);

		this.mainCamera.onFrameEnd();
		this.orthoCamera.onFrameEnd();
	}
}