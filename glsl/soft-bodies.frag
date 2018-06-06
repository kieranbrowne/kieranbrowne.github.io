#ifdef GL_ES
precision lowp float;
precision lowp int;
#endif

uniform vec2 uResolution;
uniform float uPixelDensity;
uniform float uTime;


/*
 * Signed distance functions return the distance from a point p to
 * the closest point on a 3d shape.
 */

float sphere(vec3 p, vec3 pos, float r) {
    // for a sphere we take the difference between p and the sphere's
    // centre  and subtract the radius of the sphere.
    return length(p - pos) - r;
}

float noise(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898,78.233,126.7378))) 
            * 43758.5453) * 2.0-1.0;
}

float smin( float a, float b, float k ) {
    float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
    return mix( b, a, h ) - k*h*(1.0-h);
}

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

float scene(vec3 p) {

    float displacement = 
        sin(1.5 * p.z + uTime/2.0)*cos(1.8 * p.x + uTime/3.0)*cos(1.4 * p.y + uTime/3.0)*cos(1. * p.x + uTime/2.3) * 0.1 +cnoise(p+uTime/4.)*0.2;

    /* return sphere(p, vec3(0.), 1.) + displacement; */
    return 
        smin(sphere(p, vec3(-.7,.3,-.2),.6),
            smin(sphere(p, vec3(-.2,-.4,0.), 0.7), 
             sphere(p, vec3(0.2,0.4,0.), 1.0), 0.09)+displacement, 0.4)
        + displacement;
}


vec3 normal(in vec3 p) {
    const vec3 STEP = vec3(0.001, 0.0, 0.0);

    float gradient_x = scene(p + STEP.xyy) - scene(p - STEP.xyy);
    float gradient_y = scene(p + STEP.yxy) - scene(p - STEP.yxy);
    float gradient_z = scene(p + STEP.yyx) - scene(p - STEP.yyx);

    return normalize(vec3(gradient_x, gradient_y, gradient_z));
}

vec3 lighting(vec3 p) {
	vec3 norm = normal(p);
	/* norm += noise(norm)/3.; */

    float light_1 = 
        dot(norm, normalize(p - vec3( 2., -5., 3.))) * .5 + .5;

    light_1 = light_1 * light_1;

    float light_2 = 
        dot(norm, normalize(p - vec3(-8., -1., -2.))) * .5 + .5;

    light_2 = light_2 * light_2;

    float light_3 = 
        dot(norm, normalize(p - vec3(3., 2., 5.))) *.5 + .5;

    light_3 = light_3 * light_3;

    return 
        vec3(1.0,0.87,0.74) * light_1 *0.4 // diffuse
        + vec3(0.92,0.75,0.54) * light_2 *0.5 // diffuse
        + vec3(0.7,0.67,0.67) * light_3*0.7 // diffuse
        /* + vec3(1.,0.87,0.74)*smoothstep(.98,1.1,light_1) // shine */
        /* + vec3(1.,0.4,1.6)*smoothstep(.90,1.0,light_2) // shine */
        /* + vec3(0.3,0.8,1.6)*smoothstep(.99,1.1,light_3) // shine */
        + vec3(.4,.36,.33)*0.7 // ambient
        + cnoise(normalize(p+vec3(0.3,.5,.2))*200.)*0.05 // ambient
        // imperfections
        // freckles
        - vec3(.2,.5,.5)*smoothstep(.6,.9,cnoise(normalize(p +vec3(0., 0.2,0.))*40.))*0.4 // ambient
        /* + vec3(1.,0.2,0.4)*abs(cnoise(normalize(p +vec3(0., 0.2,0.))*20.)*0.05) // ambient */
        + vec3(1.,0.2,0.4)*smoothstep(.3,.8,cnoise(normalize(p+vec3(0., 0.06,0.))*8.)*0.1) // ambient
        ;
    
}

vec3 raymarch(vec3 ray_origin, vec3 ray_direction) {

    float dist_travelled = 0.0;
    const int NUM_STEPS = 170;
    const float MIN_HIT_DIST = 0.01;
    const float MAX_TRACE_DIST = 1000.0;

    for (int i = 1; i < NUM_STEPS; i++) {
        vec3 current_pos = ray_origin + dist_travelled * ray_direction;

        float closest_dist = scene(current_pos);

        if(closest_dist < MIN_HIT_DIST) // hit
            /* return vec3(1.,0.,0.); */
            /* return normal(current_pos) * 0.5 + 0.5; */
            return lighting(current_pos);

        if(dist_travelled > MAX_TRACE_DIST)
            break;

        dist_travelled += closest_dist;
    }

    return vec3(0.90,0.84,0.8);
    
}

vec2 res = uResolution * uPixelDensity;

void main () {

    vec2 uv = gl_FragCoord.xy / res.xy; // 0 <> 1
    uv -= 0.5;
    uv.x *= res.x/res.y;

    vec3 ro = vec3(0.,0.,-4.);
    /* if(uv.x > 0.) { */
    /*     ro = vec3(.9, 0., -5.); */
    /*     uv.x -= .5; */
    /* } else { */
    /*     ro = vec3(-.9, 0., -5.); */
    /*     uv.x += .5; */
    /* } */
    vec3 rd = vec3(uv, 1.);

    vec3 colour = raymarch(ro,rd);

    gl_FragColor = vec4(colour, 1.);
}
