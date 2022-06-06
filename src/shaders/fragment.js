export const fragmentShader = `
uniform float uTime;

varying vec2 vUv;

void main()
{
    vec2 uv = vUv;

    gl_FragColor = vec4(uv, 0.5, 1.0);
}
`;
