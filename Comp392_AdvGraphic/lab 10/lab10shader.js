var Shaders = {};

Shaders.Shade = {

    name: 'Shade',

    uniforms: {
        'time':{type:'f',value:0},
        'texture':{value: null}
    },

    vertexShader:

    `
    uniform float time;
    varying vec2 vUv;
    uniform sampler2D texture;
    void main(){
        vUv= vec2( fract(uv.x + time * 0.1), fract(uv.y + time * 0.05));
        vec3 pos=position+normal*texture2D(texture, vUv).r*sin(time);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }`,

    fragmentShader:

    `
    varying vec2 vUv;
    uniform sampler2D texture;
    vec4 color = vec4(1.0,0.2,0.2,1.0);
    void main(){
        gl_FragColor = texture2D(texture, vUv)/color;
    }`
};

