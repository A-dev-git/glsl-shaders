#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    
    position -= .5;
    float d = length(position);
    
    float radius = 0.3;
    
    //Smooth step, takes a threshold of 2 floats and returns a value between the threshold
    float c = smoothstep(radius,radius - 0.002,d); 

    /*
    if(d < 0.3) {
        c = 1.0;
    }else{
        c = 0.0;
    }
    */

    gl_FragColor = vec4(vec3(c), 1.0);
}