var Shaders = {};

Shaders.BasicShader = {
    name: 'BasicShader',

    uniforms: {},

    vertexShader: [

        'void main(){',

        'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',

        '}'

        ].join( '\n' ),

    fragmentShader: [

        'void main(){',

        'gl_FragColor = vec4(1.0, 0, 0, 0.5);',

        '}'

    ].join( '\n' )


};
Shaders.BasicShader1 = {
    name: 'BasicShader1',


    uniforms: {
        'time':{type: 'f', value: 0}
    },

    vertexShader: [


        'void main(){',

        'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',

        '}'

        ].join( '\n' ),

    fragmentShader: [
        'uniform float time;',

        'void main(){',

        'gl_FragColor = vec4(abs(sin(time)), abs(sin(time*2.0)), abs(sin(time*3.0)), 0.5);',

        '}'

    ].join( '\n' )


};
Shaders.BasicShader2 = {
    name: 'BasicShader2',


    uniforms: {
        'time':{type: 'f', value: 0}
    },

    vertexShader: [


        'void main(){',

        'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',

        '}'

        ].join( '\n' ),

    fragmentShader: [
        'uniform float time;',
        'vec3 colora=vec3(1,0.7,0.7);',
        'vec3 colorb=vec3(0.7,0.3,0.5);',

        'void main(){',
        'vec3 color=mix(colora,colorb,abs(sin(time)));',
        'gl_FragColor = vec4(color, 1.5);',
        '}'

    ].join( '\n' )


};

Shaders.BasicShader3 = {
    name: 'BasicShader3',


    uniforms: {
        'time':{type: 'f', value: 0},
        'texture':{value: null}
    },

    vertexShader: [
        'varying vec2 vUv;',

        'void main(){',

        'vUv=uv;',

        'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',

        '}'

        ].join( '\n' ),

    fragmentShader: [
        'varying vec2 vUv;',
        'uniform float time;',
        'uniform sampler2D texture;',

        'void main(){',
        'gl_FragColor = texture2D(texture, vUv);',
        '}'

    ].join( '\n' )


};