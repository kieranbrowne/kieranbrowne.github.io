const fs = `
precision highp float;

uniform vec2 uRes;
uniform float uPDense;
uniform float uTime;
void main() {
  float gutterW = 20.0 * uPDense;

  // 9 gutters 20px each;
  float gutters = 8.0;
  if((uRes.x/uPDense) <= 640.0) {
     gutters = 1.0;
  }

  float hspace = uRes.x - (gutters + 1.0) * gutterW;
  float colw = hspace / gutters;
  float gutterI = floor(gl_FragCoord.x/ (gutterW + colw));

  gl_FragColor = vec4(1.0); // full white

  // draw gutters
  if(mod(gl_FragCoord.x, gutterW + colw) < 1.0 ||
    mod(gl_FragCoord.x - gutterW, gutterW + colw) < 1.0)
    gl_FragColor = mix(gl_FragColor,vec4(vec3(0.82),1.0),.5); 
}`;

const vs = `attribute vec2 points;

void main(void) {
    gl_Position = vec4(points, 0.0, 1.0);
}
`

let canvas = document.getElementById('bg');
let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

const program = gl.createProgram();

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vertexShader, vs);
gl.shaderSource(fragmentShader, fs);

gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);
gl.useProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
}

const points = [ -1, -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, ].map(x=>x*2);

const pointsBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, pointsBuffer);

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);

const pointsLocation = gl.getAttribLocation(program, 'points');

const startTime = new Date().getTime();

function render() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);

    let uTime = gl.getUniformLocation(program, "uTime");
    let uRes = gl.getUniformLocation(program, "uRes");
    let uPDense = gl.getUniformLocation(program, "uPDense");
    gl.uniform1f(uTime, (new Date().getTime() - startTime)/1000);
    gl.uniform2f(uRes, window.innerWidth, window.innerHeight);
    gl.uniform1f(uPDense, 1);

    gl.vertexAttribPointer(pointsLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pointsLocation);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
}
render();

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
}
window.addEventListener("resize", resize);
resize();
