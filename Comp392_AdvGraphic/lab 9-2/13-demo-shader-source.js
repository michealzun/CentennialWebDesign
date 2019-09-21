var Shaders = {};

Shaders.BasicShader1 = {

    name: 'BasicShader1',

    uniforms: {},

    vertexShader:

    `void main(){

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }`,

    fragmentShader:

    `void main(){

        gl_FragColor = vec4(1.0, 0, 0, 0.5);

    }`
};


Shaders.BasicShader2 = {

    name: 'BasicShader2',

    uniforms: {
        'time':{type:'f',value:0}
    },

    vertexShader:

    `uniform float time;
    
    void main(){
        vec3 pos=position;
        pos.z+=sin(pos.x/5.0+pos.y/5.0 + time);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    }`,

    fragmentShader:

    `void main(){

        gl_FragColor = vec4(1.0, 0, 0, 0.5);

    }`
};


Shaders.BasicShader3 = {

    name: 'BasicShader3',

    uniforms: {
        'time':{type:'f',value:0}
    },

    vertexShader:

    `uniform float time;
        varying vec2 vUv;
    void main(){
        vUv=uv;
        vec3 pos=position;
        pos.z+=sin(pos.x/5.0+pos.y/5.0 + time);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    }`,

    fragmentShader:

    `uniform float time;
    varying vec2 vUv;
    void main(){

        gl_FragColor = vec4(vUv*(cos(time)/2.0+0.5), vUv.x*(sin(time)/2.0+0.5), 1.0);

    }`
};

