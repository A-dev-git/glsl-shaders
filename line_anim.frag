#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; //resolution of canvas
uniform float u_time;

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution.xy; // normalise fragment coord using resolution 0 - 1    
    vec4 colorGradient = vec4(position,0.5+0.5*sin(u_time),1.0);

    gl_FragColor = colorGradient;
}