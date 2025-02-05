﻿

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1.0, 1000);
const clock = new THREE.Clock();

const __shader = Shaders.BasicShader3;

var orbitControls, controls,
    speed = 0.01,
    toRotate = true;

function init() {

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x004400);
    renderer.shadowMap.enabled = true;

    document.body.appendChild(renderer.domElement);
    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

}

function setupCameraAndLight() {
    camera.position.set(-30, 10, 30);
    camera.lookAt(scene.position);

    scene.add(new THREE.AmbientLight(0x666666));
    scene.position.set(0, -10, 0);

    let directionalLight = new THREE.DirectionalLight(0xeeeeee);
    directionalLight.position.set(20, 60, 10);
    directionalLight.castShadow = true;
    directionalLight.target = scene;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 200;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    let hemiSphereLight = new THREE.HemisphereLight(0x7777cc, 0x00ff00, 0.6);//skycolor, groundcolor, intensity  
    hemiSphereLight.position.set(0, 100, 0);
    scene.add(hemiSphereLight);
}

function createGeometry() {

    scene.add(new THREE.AxesHelper(100));

    let material = new THREE.ShaderMaterial(
    	{
    		uniforms: __shader.uniforms,
    		vertexShader: __shader.vertexShader,
    		fragmentShader: __shader.fragmentShader
    	});

    let mesh = new THREE.Mesh(
        new THREE.BoxGeometry(10, 10, 10,10,10),
        material
    );

    mesh.position.set(0, 10, -10);
    mesh.rotation.set(Math.PI * 0.6, 0, Math.PI * 0.3);
    mesh.castShadow = true;
    scene.add(mesh);

    let mesh2 = new THREE.Mesh(
        new THREE.SphereGeometry( 5, 32, 32 ),
        material
    );

    mesh2.position.set(0, 10, 10);
    mesh2.castShadow = true;
    scene.add(mesh2);


    
    let plane2 = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 60,100,100),
        material
    );
    plane2.receiveShadow = true;
    plane2.rotation.x = -Math.PI * 0.5;
    scene.add(plane2);


}

function setupDatGui() {

    controls = new function() {

        this.rotate = toRotate;

    }

    let gui = new dat.GUI();
    gui.add(controls, 'rotate').onChange((e) => toRotate = e);


}

function render() {

    orbitControls.update();
    //if (toRotate)
    //    scene.rotation.y += speed;//rotates the scene  
    __shader.uniforms.time.value = clock.getElapsedTime();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

window.onload = () => {

    init();
    setupCameraAndLight();
    createGeometry();
    setupDatGui();
    render();

}
