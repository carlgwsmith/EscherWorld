const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
varying vec2 vUv;

// I have tried to recreate the effect of M.C. Eschers 'Rippled Surface'
// and animate the scene. The rays are reflected off a displaced
// plane  into the trees.

// polynomial smooth min (k = 0.1);
// https://iquilezles.org/articles/smin
float sminCubic( float a, float b, float k )
{
    float h = max( k-abs(a-b), 0.0 )/k;
    return min( a, b ) - h*h*h*k*(1.0/6.0);
}

// the wave for each droplet is based on a simple cosine wave
// the wave in attenuated by the sqared distace to the center
// for the ring the wave is multiplied by e^(-x^2) to get the rings
// both the cosine wave and the rings are animated by offsets
// time is looped in 25 second intervals
// about the time for the rings to leave the field of view
float waveDisplacement( vec3 p )
{
    // drop one
    float dist = length(p.xz - vec2(-0.5, 6.0));
    float ring = 10.0*dist - mod(iTime - 8.0, 25.0) + 4.0;
    float waves = cos(60.0*dist - 10.0*mod(iTime + 2.0, 25.0))*exp(-0.2*ring*ring)/(1.0 + 15.0*dist*dist);
    
    // drop two
    dist = length(p.xz - vec2(0.5, 5.5));
    ring = 10.0*dist - mod(iTime, 25.0) + 4.0;
    waves += cos(60.0*dist - 10.0*mod(iTime, 25.0))*exp(-0.2*ring*ring)/(1.0 + 15.0*dist*dist);
    
    // drop three
    dist = length(p.xz - vec2(-0.0, 5.0));
    ring = 10.0*dist - mod(iTime - 16.0, 25.0) + 4.0;
    waves += cos(60.0*dist - 10.0*mod(iTime, 25.0))*exp(-0.2*ring*ring)/(1.0 + 15.0*dist*dist);
    
    return waves;
}

// plane with waves
float sdPlane( vec3 p )
{
    float dist = p.y;
    
    // apply costly displacement only when close
    if (p.y < 0.1) dist -= 0.0008*waveDisplacement(p);
    
    return dist;
}

// https://iquilezles.org/articles/distfunctions
float sdCapsule( vec3 p, vec3 a, vec3 b, float r )
{
	vec3 pa = p-a, ba = b-a;
	float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
	return length( pa - ba*h ) - r;
}

// like capsule, but with different radii at each end
// https://www.shadertoy.com/view/3lsSzf
float sdStick(vec3 p, vec3 a, vec3 b, float r1, float r2) // approximated
{
    vec3 pa = p-a, ba = b-a;
	float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
	return length( pa - ba*h ) - mix(r1,r2,h*h*(3.0-2.0*h));
}

float sdTree( vec3 p )
{
    // trunk
    float dist = sdCapsule( p, vec3(0), vec3(0.0, 2.5, 0.0), 0.3 );
    dist = sminCubic( dist, sdCapsule( p , vec3(0.0, 2.5, 0.0), vec3(0.0, 6.5, 0.0), 0.2), 0.1);
    
    // mirror x-axis
    p.x = abs( p.x );
    
    // big branches
    dist = sminCubic( dist, sdCapsule( p , vec3(0.15, 1.5, 0.0), vec3(1.4, 3.0, 0.0), 0.11), 0.1);
    dist = sminCubic( dist, sdCapsule( p , vec3(0.15, 2.5, 0.0), vec3(0.7, 3.5, 0.0), 0.10), 0.1);
    
    // mirror z-axis
    p.z = abs( p.z );
    
    // small branches
    dist = sminCubic( dist, sdStick( p , vec3(1.4, 3.0, 0.1), vec3(3.2, 6.5, 3.0), 0.07, 0.02), 0.1);
    dist = sminCubic( dist, sdStick( p , vec3(0.7, 3.5, 0.08), vec3(2.8, 7.5, 1.0), 0.05, 0.02), 0.1);
    
    // lang thin branches
    dist = min( dist, sdStick( p , vec3(0.7, 0.0, 0.1), vec3(5.8, 10.5, 2.0), 0.05, 0.01));
    dist = min( dist, sdStick( p , vec3(1.3, 0.0, 2.5), vec3(.3, 3.5, 2.0), 0.02, 0.01));
    
    return dist;
}

// combined SDF for scene
// water is handled seperately for optimization
float map( vec3 p ) {
   	
    // slight distortion of the space
    // makes the trees look more organic
    // this makes a big difference
    p += vec3(0.3*cos(1.2*p.x), 0.2*sin(1.2*p.y), 0.1*sin(p.z));
    
    vec3 p1 = p;
    
	// rotation matrix based on pythagorean tripel
    p1 *= mat3( 4.0, 0.0, 3.0,
                0.0, 5.0, 0.0,
               -3.0, 0.0, 4.0) / 5.0;
    
    float tree1 = sdTree(p1);
    
    vec3 p2 = p + vec3(3.0, 0.0, 0.0);
   	
    // rotation matrix based on pythagorean tripel
    p2 *= mat3(-4.0, 0.0, 3.0,
                0.0, 5.0, 0.0,
               -3.0, 0.0, -4.0) / 5.0;
    
    float tree2 = sdTree(p2);
    
    return min(tree1, tree2);
}

// optimized normal for water
// https://iquilezles.org/articles/normalsSDF
vec3 calcWaterNormal( in vec3 pos)
{
    
#if 0
    vec2 e = vec2(1.0,-1.0)*0.5773*0.001;
    return normalize( e.xyy*sdPlane( pos + e.xyy) + 
					  e.yyx*sdPlane( pos + e.yyx) + 
					  e.yxy*sdPlane( pos + e.yxy) + 
					  e.xxx*sdPlane( pos + e.xxx) );
#else
    // inspired by tdhooper and klems - a way to prevent the compiler from inlining map() 4 times
    vec3 n = vec3(0.0);
    for( int i=0; i<4; i++ )
    {
        vec3 e = 0.5773*(2.0*vec3((((i+3)>>1)&1),((i>>1)&1),(i&1))-1.0);
        n += e*sdPlane(pos+0.001*e);
    }
    return normalize(n);
#endif    
}

// get distance to the water surface
// the water is close, only a few iterations are needed
// this helps because the displacement is costly
float ray_march_water( vec3 eye, vec3 ray_dir ) {
    float dist = 0.0;
    for (int i = 0; i < 7; i++) {
        float d = sdPlane( eye + dist * ray_dir );
        if ( d < 0.001) {
      		break;
        }
        dist += d;
        if ( dist > 10.0 ) {
            break;
        }    
    }
    return dist;
}

// get distance to the trees
// farplane is close to speed things up
float ray_march( vec3 eye, vec3 ray_dir ) {
    float dist = 0.0;
    for (int i = 0; i < 70; i++) {
        float d = map( eye + dist * ray_dir );
        if ( d < 0.001 * dist) {
      		break;
        }
        dist += d;
        if ( dist > 18.0 ) {
            break;
        }
        
    }
    return dist;
}

void main()
{
    vec2 fragCoord = vUv * iResolution;
    // get uv between -1 and 1 and fix aspect ratio
    vec2 uv = 2.0*fragCoord/iResolution.xy - 1.0;
    uv.x *= iResolution.x/iResolution.y;
    
    // camera setup
    float angle = 0.05*(cos(iTime*0.2)) + 0.25;
    
    vec3 eye = vec3(3.0*sin(angle),
                    1.6 + 0.2*(sin(iTime*0.23)),
                    3.0*cos(angle));
    
    eye += vec3(0.3*sin(iTime*0.32), 0.0, 6.0);
    
    vec3 look_at = vec3( 0.0, 0.0, 6.0 );
    vec3 view_dir = normalize( look_at - eye );
    vec3 right = cross( vec3( 0.0, 1.0, 0.0 ), view_dir );
    vec3 up = cross( view_dir, right );
    float focal_dist = 3.8;
    vec3 ray_dir = normalize( focal_dist*view_dir + uv.x*right + uv.y*up );
    
    // background color
    vec3 col = vec3(0.15);
    
    // reflect ray at water surface
    float dist = ray_march_water( eye, ray_dir );
    vec3 p = eye + dist*ray_dir;
    vec3 normal = calcWaterNormal( p );
    ray_dir = reflect( ray_dir, normal );
    
    // raymarch the trees
	dist = ray_march( p + normal * 0.01, ray_dir );
 
    // color trees black
    if (dist < 18.0) col = vec3(0);
    
    // color moon white
    // moon is at infinity
    // render based on angle of the reflected ray
	else if ( dot( ray_dir, normalize(vec3(-0.35, 0.6, -1.0))) > 0.997) col = vec3(1);

	gl_FragColor = vec4(col, 1.0);
}
`
export default fragmentShader