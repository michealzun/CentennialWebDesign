
const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1.0, 1000);
const clock = new THREE.Clock();
var mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,material,material1,material2,material3,material4;

var orbitControls, controls, speed = 0.01,toRotate = true;

function init() {

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x004400);
    renderer.shadowMap.enabled = true;

    document.body.appendChild(renderer.domElement);
    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

}

function setupCameraAndLight() {
    camera.position.set(0, 0, 25);
    camera.lookAt(scene.position);

    scene.add(new THREE.AmbientLight(0x666666));

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
    material1 = new THREE.ShaderMaterial(
    	{
    		uniforms: Shaders.BasicBlend.uniforms,
    		vertexShader: Shaders.BasicBlend.vertexShader,
    		fragmentShader: Shaders.BasicBlend.fragmentShader
    	});
    material2 = new THREE.ShaderMaterial(
    	{
    		uniforms: Shaders.EightBlend.uniforms,
    		vertexShader: Shaders.EightBlend.vertexShader,
    		fragmentShader: Shaders.EightBlend.fragmentShader
        });
    material3 = new THREE.ShaderMaterial(
            {
                uniforms: Shaders.AnimatedBlend.uniforms,
                vertexShader: Shaders.AnimatedBlend.vertexShader,
                fragmentShader: Shaders.AnimatedBlend.fragmentShader
            });
    material4 = new THREE.ShaderMaterial(
            {
                uniforms: Shaders.ShakeItShakeItBlend.uniforms,
                vertexShader: Shaders.ShakeItShakeItBlend.vertexShader,
                fragmentShader: Shaders.ShakeItShakeItBlend.fragmentShader
            });
    let mesh1 = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 1, 0.3, 64, 8 ),
        material1
    );
    let mesh2 = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 1, 0.3, 64, 8 ),
        material2
    );
    let mesh3 = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 1, 0.3, 64, 8 ),
        material3
    );
    let mesh4 = new THREE.Mesh(
        new THREE.TorusKnotGeometry( 1, 0.3, 64, 8 ),
        material4
    );
    let mesh5 = new THREE.Mesh(
        new THREE.BoxGeometry( 2, 2, 2 ),
        material1
    );
    let mesh6 = new THREE.Mesh(
        new THREE.BoxGeometry( 2, 2, 2 ),
        material2
    );
    let mesh7 = new THREE.Mesh(
        new THREE.BoxGeometry( 2, 2, 2 ),
        material3
    );
    let mesh8 = new THREE.Mesh(
        new THREE.BoxGeometry( 2, 2, 2 ),
        material4
    );
    mesh1.position.set(-15,-2.5,0);
    mesh2.position.set(-5,-2.5,0);
    mesh3.position.set(5,-2.5,0);
    mesh4.position.set(15,-2.5,0);
    mesh5.position.set(-15,2.5,0);
    mesh6.position.set(-5,2.5,0);
    mesh7.position.set(5,2.5,0);
    mesh8.position.set(15,2.5,0);
    scene.add(mesh1);
    scene.add(mesh2);
    scene.add(mesh3);
    scene.add(mesh4);
    scene.add(mesh5);
    scene.add(mesh6);
    scene.add(mesh7);
    scene.add(mesh8);
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
    Shaders.AnimatedBlend.uniforms.time.value = clock.getElapsedTime();
    Shaders.ShakeItShakeItBlend.uniforms.time.value = clock.getElapsedTime();
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
