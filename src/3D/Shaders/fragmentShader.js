const fragmentShader = 
// `
// varying float vDistance;

// void main() {
//   vec3 color = vec3(0.34, 0.53, 0.96);
//   float strength = distance(gl_PointCoord, vec2(0.5));
//   strength = 1.0 - strength;
//   strength = pow(strength, 3.0);

//   color = mix(color, vec3(0.97, 0.70, 0.45), vDistance * 0.5);
//   color = mix(vec3(0.0), color, strength);
//   gl_FragColor = vec4(color, strength);
// }
// `
`
varying vec3 vColor;

void main()
{
    // // Disc
    // float strength = distance(gl_PointCoord, vec2(0.5));
    // strength = step(0.5, strength);
    // strength = 1.0 - strength;

    // // Diffuse point
    // float strength = distance(gl_PointCoord, vec2(0.5));
    // strength *= 2.0;
    // strength = 1.0 - strength;

    // Light point
    float strength = distance(gl_PointCoord, vec2(0.25));
    strength = 1.0 - strength;
    strength = pow(strength, 4.0);

    // Final color
    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, 2.0);
}
`

export default fragmentShader