import { ShaderMaterial, Vector2 } from "three";

import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./fragment.glsl?raw";

class CustomShaderMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    this.uniforms = {
      bg: { value: options.background },
      spherePos: { value: new Vector2(0.5, 0.5) },
    };
  }

  update() {
    //
  }
}

export default CustomShaderMaterial;
