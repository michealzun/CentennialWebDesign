// name: Yueyang Sun
// Date March 8th 2019
// File: lab7.js

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.2, 2000);
let orbitControls;
var mouse, raycaster, isShiftDown = false,objs=[];
    
function init() {

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x444488);
    renderer.shadowMap.enabled = true;

    document.body.appendChild(renderer.domElement);
    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    
}

function setupCameraAndLight() {
    camera.position.set(-100, 100, 50);
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
}

function createGeometry() {

    var gridHelper = new THREE.GridHelper( 100,10 );
    scene.add( gridHelper );
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
    geometry.rotateX( - Math.PI / 2 );

    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            let plane = new THREE.Mesh( new THREE.PlaneGeometry(10, 10),new THREE.MeshLambertMaterial({ color: 0x000000,alphaTest: 0, visible: false }));
            plane.receiveShadow = true;
            plane.rotation.x = -Math.PI * 0.5;
            plane.position.x=i*10-45;
            plane.position.z=j*10-45;
            scene.add(plane);
            objs.push(plane);
        }
    }
}

function onDocumentMouseDown( event ) {
    event.preventDefault();
    mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects(objs);

    if ( intersects.length > 0 ) {
        var intersect = intersects[0];
        var voxel = new THREE.Mesh( new THREE.CubeGeometry( 10, 10, 10 ), new THREE.MeshBasicMaterial({color: 0xa0a0a0,map: new THREE.TextureLoader().load( 'assets/texture/cube.png' ) }));
        voxel.position.set(intersect.object.position.x,intersect.object.position.y+5,intersect.object.position.z);
        scene.add( voxel );
        intersect.object.position.y+=10;
        render();
    }
}


function render() {

    orbitControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

window.onload = () => {

    init();
    setupCameraAndLight();
    createGeometry();
    render();
}
