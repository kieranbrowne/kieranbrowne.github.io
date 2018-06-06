precision lowp float; 

attribute vec3 aPosition;
uniform vec2 uResolution;
uniform float uPixelDensity;

void main() {
    gl_Position = vec4(aPosition*uPixelDensity,1.0); 
}
