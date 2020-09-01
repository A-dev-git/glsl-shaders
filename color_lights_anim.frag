#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;    
    vec3 color = vec3(0.0);    
    vec2 translate = vec2(-0.5,-0.5);
    coord += translate;

    for(int i = 0; i < 20; i++){
        float radius = 0.4;
        float rad = radians(360.0 / 20.0) * float(i);             

        //crossing lights
        //color += 0.004 / length(coord + vec2(radius * cos((rad * u_time) / 2.0), radius * sin(rad * u_time)));
                
        color += 0.03 / length(coord + vec2(radius * sin(rad * u_time), radius * cos(rad * u_time)));

        //split color black and white
        color += -coord.y * cos(u_time * 2.0);
        color += -coord.x * sin(u_time);

        //rotating lights
        //color += 0.004 / length(coord + vec2(radius * cos(rad - u_time), radius * sin(rad - u_time)));

        //cycling lights
        //color += 0.005 / length(coord + vec2(radius * cos(rad * u_time), radius * sin(rad * u_time)));
    }

    gl_FragColor = vec4(vec3(color), 1.0);
}