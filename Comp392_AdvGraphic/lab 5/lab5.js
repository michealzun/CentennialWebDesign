// name: Yueyang Sun
// Date Feb 15th 2019
// File: lab5.js

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1.0, 1000);
var wheels=[];
let orbitControls,
    speed = 0.002,
    toRotate = true;

function init() {

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x444488);
    renderer.shadowMap.enabled = true;

    document.body.appendChild(renderer.domElement);
    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

}

function setupCameraAndLight() {
    camera.position.set(-100, 50, 50);
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

    scene.add(new THREE.GridHelper(40, 8));
    scene.add(new THREE.AxesHelper(50));
    let plane = new THREE.Mesh( new THREE.PlaneGeometry(40, 40),new THREE.MeshLambertMaterial({ color: 0xeeeeee }));
    plane.receiveShadow = true;
    plane.rotation.x = -Math.PI * 0.5;
    scene.add(plane);
    createWheel(-10);
    createWheel(-5);
    createWheel(5);
    createWheel(10);

}

function createWheel(displacement) {

    return new function(){
        this.core = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 1, 30),new THREE.MeshLambertMaterial({ color: 0x808080 }));
        this.core.position.set(displacement, 20, 0);
        this.core.rotation.z =Math.PI * 0.5;
        this.core.castShadow = true;
        scene.add(this.core);
    
        this.angel=0;
        for(let i = 0; i<12; i++){
            this.support = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 20, 10),new THREE.MeshLambertMaterial({ color: 0x909090 }));
            this.support.position.set(0, 0, 0);
            this.support.geometry.scale(1, 1, 2); 
            this.support.rotation.x =Math.PI * 0.5;
            this.support.rotation.z =Math.PI * this.angel;
            this.angel+=1/6;
            this.support.geometry.translate(0, 5, 0)
            this.support.castShadow = true;
            this.core.add(this.support);
        }

        this.extrudeSettings = {
	    steps: 1,
	    depth: 2,
	    bevelEnabled: true,
	    bevelThickness: 1,
	    bevelSize: 1,
	    bevelSegments: 1
        };
        this.ring = new THREE.Shape();
        this.ring.moveTo( 50, 10 );
        this.ring.absarc( 0, 0, 15, 0, Math.PI * 2, false );
        this.hole = new THREE.Path();
		this.hole.moveTo( 20, 10 );
		this.hole.absarc( 0, 0, 14, 0, Math.PI * 2, true );
		this.ring.holes.push(this.hole);
        this.ring = new THREE.Mesh( new THREE.ExtrudeGeometry( this.ring,this.extrudeSettings ),new THREE.MeshLambertMaterial({ color: 0x202020 }) );
        this.ring.rotation.x=Math.PI*0.5;
        this.core.add(this.ring);
        wheels.push(this);

        this.updateWheel = function(speed){
            this.core.rotation.x+=speed*Math.PI;
        }
    }
}   

function setupDatGui() {

    let controls = new function () {

        this.rotateScene = toRotate;
    }

    let gui = new dat.GUI();
    gui.add(controls, 'rotateScene').name('Scene revolution').onChange((e) => toRotate = e);
    
}

function render() {

    orbitControls.update();
    if (toRotate)scene.rotation.y += speed;

    wheels.forEach((obj) => obj.updateWheel(0.01));

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
