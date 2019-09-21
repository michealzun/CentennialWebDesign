var Shaders = {};

Shaders.BasicBlend = {

    name: 'BasicBlend',

    uniforms: {
    },

    vertexShader:

    `varying vec2 vUv;
    
    void main(){

        vUv=uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }`,

    fragmentShader:

    `vec3 color1 = vec3(0,0,1.0);
    vec3 color2 = vec3(1.0,1.0,1.0);
    varying vec2 vUv;
    
    void main(){

        gl_FragColor = vec4(mix(color1,color2,sin(vUv.y*3.0)*0.5+0.5), 1.0);

    }`
};
Shaders.EightBlend = {

    name: 'EightBlend',

    uniforms: {
    },

    vertexShader:

    `varying vec2 vUv;
    
    void main(){

        vUv=uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }`,

    fragmentShader:

    `vec3 color1 = vec3(0,0,1.0);
    vec3 color2 = vec3(1.0,1.0,1.0);
    varying vec2 vUv;
    
    void main(){

        gl_FragColor = vec4(mix(color1,color2,sin(vUv.y*60.0)), 1.0);

    }`
};

Shaders.AnimatedBlend = {

    name: 'AnimatedBlend',

    uniforms: {
        'time' : {type: 'f', value: 0}
    },

    vertexShader:

    `varying vec2 vUv;
    
    void main(){

        vUv=uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }`,

    fragmentShader:

    `vec3 colorA = vec3(1.0, 1.0, 1.0);
    vec3 colorB = vec3(0, 0, 1.0);
    uniform float time;
    varying vec2 vUv;
    
    void main(){

        gl_FragColor = vec4(mix(colorA, colorB, abs(sin(vUv.y*50.0)) +cos(time +20.0)), 1.0);

    }`
};

Shaders.ShakeItShakeItBlend = {

    name: 'ShakeItShakeItBlend',

   uniforms: {
        'time' : {type: 'f', value: 0}
    },

    vertexShader:

    `varying vec2 vUv;
    
    void main(){

        vUv=uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    }`,

    fragmentShader:

    `vec3 color1 = vec3(0,0,1.0);
    vec3 color2 = vec3(1.0,1.0,1.0);
    uniform float time;
    varying vec2 vUv;
    
    void main(){

        gl_FragColor = vec4(mix(color1,color2,sin(vUv.y*60.0+sin(time*2.0)*10.0)), 1.0);

    }`
};