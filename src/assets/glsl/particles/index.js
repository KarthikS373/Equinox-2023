import { ShaderMaterial } from "three";

import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./fragment.glsl?raw";

class CustomShaderMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });

    this.extensions.derivatives =
      "#extension GL_OES_standard_derivatives : enable";
      
    this.uniforms = {
      time: { value: 0 },
      color: { value: options.color },
    };
  }

  update() {
    this.uniforms.time.value += 0.1;
  }
}

export default CustomShaderMaterial;
