import { wgsl } from "wgsl-preprocessor/wgsl-preprocessor.js";
import { BIND_GROUP_LOCATIONS } from "../constants";
import { SHADER_CHUNKS } from "../../renderer/shader/chunks";

export const VERTEX_SHADER_DEFAULT_ENTRY_FN = "vertexMain";

export const FULLSCREEN_TRIANGLE_VERTEX_SHADER_ENTRY_NAME =
	"fullScreeenTriVertex";

export const FULLSCREEN_TRIANGLE_VERTEX_SHADER_SRC = /* wgsl */ `
  ${SHADER_CHUNKS.VertexOutput}

  @vertex
  fn ${FULLSCREEN_TRIANGLE_VERTEX_SHADER_ENTRY_NAME}(
    @builtin(vertex_index) vertexId: u32,
    @builtin(instance_index) instanceId: u32,
  ) -> VertexOutput {
    const pos = array(
      vec2(-1.0, -1.0), vec2(3, -1.0), vec2(-1.0, 3),
    );
  
    var out: VertexOutput;
    out.position = vec4f(pos[vertexId], 0.0, 1.0);
    out.instanceId = instanceId;
    return out;
  }
`;

export interface IVertexShader {
	isInstanced: boolean;
}

export const getVertexShader = (
	{ isInstanced }: IVertexShader = {
		isInstanced: false,
	},
): string => wgsl/* wgsl */ `
  ${SHADER_CHUNKS.VertexInput}
  ${SHADER_CHUNKS.VertexOutput}
  ${SHADER_CHUNKS.ModelUniform}
  ${SHADER_CHUNKS.CameraUniform}

  @group(${BIND_GROUP_LOCATIONS.Camera}) @binding(0) var<uniform> camera: CameraUniform;
  @group(${BIND_GROUP_LOCATIONS.Model}) @binding(0) var<uniform> model: ModelUniform;

  #if ${isInstanced}
  @group(${BIND_GROUP_LOCATIONS.InstanceMatrices}) @binding(0) var<storage> instanceMatrices: array<mat4x4f>;
  #endif

  @vertex
  fn ${VERTEX_SHADER_DEFAULT_ENTRY_FN}(
    @builtin(instance_index) instanceId: u32,
    in: VertexInput
  ) -> VertexOutput {
    var position = in.position;

    var worldMatrix: mat4x4f;
    var prevWorldMatrix: mat4x4f;

    #if ${isInstanced}
      worldMatrix = instanceMatrices[instanceId] * model.worldMatrix;
      prevWorldMatrix = instanceMatrices[instanceId] * model.prevFrameWorldMatrix;
    #else
      worldMatrix = model.worldMatrix;
      prevWorldMatrix = model.prevFrameWorldMatrix;
    #endif

    var out: VertexOutput;
    out.position = camera.projectionViewMatrix * worldMatrix * in.position;

    // var jitterOffset = camera.jitterOffset;
    // jitterOffset.x = ((jitterOffset.x - 0.5) / f32(camera.viewportWidth)) * 2;
    // jitterOffset.y = ((jitterOffset.y - 0.5) / f32(camera.viewportHeight)) * 2;

    out.position += vec4f(camera.jitterOffset * out.position.w, 0, 0);

    out.currFrameClipPos = out.position;
    out.prevFrameClipPos = camera.prevFrameProjectionViewMatrix * prevWorldMatrix * in.position;
    out.uv = in.uv;
    out.normal = model.normalMatrix * in.normal;
    return out;
  }
`;