#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;
uniform vec2 u_resolution;

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    gl_FragColor = vec4(color,1.0);
}