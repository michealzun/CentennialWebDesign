// name: Yueyang Sun
// Date Feb 15th 2019
// File: lab5.js

const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1.0, 1000);
var wheel,bars=[];
let orbitControls;

var outerRadius=11;
var innerRadius=10;
var rimWidth=10;
var axleRadius=3;
var spokeLength=30;
var numberOfSpokes =10;
var rotationDir = true;
var rotationScene = true;
var rotateSpeed=0.01;
    
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
    createWheel();
}

function createWheel() {

    return new function(){
        this.extrudeSettings = {
            steps: 1,
            depth: 1.5,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
        };

        this.core = new THREE.Mesh(new THREE.CylinderGeometry(axleRadius, axleRadius, rimWidth, 30),new THREE.MeshLambertMaterial({ color: 0x500050 }));
        this.core.position.set(0, 20, 0);
        this.core.rotation.z =Math.PI * 0.5;
        this.core.castShadow = true;
        scene.add(this.core);
        
    
        this.angel=0;
        for(let i = 0; i<numberOfSpokes; i++){
            //wheels
            this.support = new THREE.Mesh(new THREE.CubeGeometry(spokeLength, 1, 0.5, 10),new THREE.MeshLambertMaterial({ color: 0xE0E000 }));
            this.support.position.set(0, rimWidth*3/8-1, 0);
            this.support.rotation.x =Math.PI * 0.5;
            this.support.rotation.z =Math.PI * this.angel;
            this.support.geometry.translate(0, 0, 0);
            this.support.castShadow = true;
            this.core.add(this.support);

            this.support2 = new THREE.Mesh(new THREE.CubeGeometry(spokeLength, 1, 0.5, 10),new THREE.MeshLambertMaterial({ color: 0xE0E000 }));
            this.support2.position.set(0, -rimWidth*3/8+1, 0);
            this.support2.rotation.x =Math.PI * 0.5;
            this.support2.rotation.z =Math.PI * this.angel;
            this.support2.geometry.translate(0, 0, 0);
            this.support2.castShadow = true;
            this.core.add(this.support2);

            //overhang
            this.support3 = new THREE.Mesh(new THREE.CubeGeometry(0.25, 0.25, rimWidth*3/4-2, 10),new THREE.MeshLambertMaterial({ color: 0xE0E0E0 }));
            this.support3.position.set((spokeLength/2-0.5)*Math.cos(Math.PI * this.angel), 0, (spokeLength/2-0.5)*Math.sin(Math.PI * this.angel));
            this.support3.rotation.x =Math.PI * 0.5;
            this.support3.geometry.translate(0, 0, 0);
            this.support3.castShadow = true;
            this.core.add(this.support3);
            bars.push(this.support3);       
            
            this.support4 = new THREE.Mesh(new THREE.CubeGeometry(0.25, 0.25, 2, 10),new THREE.MeshLambertMaterial({ color: 0xE0E0E0 }));
            this.support4.position.set(0, 0,0 );
            this.support4.rotation.y =Math.PI * 0.5;
            this.support4.geometry.translate(0,0 , -1);
            this.support4.castShadow = true;
            this.support3.add(this.support4);

            //basket
            this.sphere = new THREE.Mesh( new THREE.SphereGeometry( 1.5, 32, 32,0,Math.PI*2,0, Math.PI*0.7), new THREE.MeshLambertMaterial( {color: 0xffff00,side: THREE.DoubleSide} ) );
            this.sphere.geometry.translate(0,3 , 0);
            this.sphere.rotation.z=Math.PI*0.5;
            this.support3.add(this.sphere);

            this.angel+=2/numberOfSpokes;

        }
        
        //ring
        this.ring = new THREE.Shape();
        this.ring.absarc( 0, 0, outerRadius, 0, Math.PI * 2, false );
        this.hole = new THREE.Path();
		this.hole.absarc( 0, 0, innerRadius, 0, Math.PI * 2, true );
		this.ring.holes.push(this.hole);
        this.ring = new THREE.Mesh( new THREE.ExtrudeGeometry( this.ring,this.extrudeSettings ),new THREE.MeshLambertMaterial({ color: 0x500050 }) );
        this.ring.rotation.x=Math.PI*0.5;
        this.ring.position.set(0, rimWidth/2-1.5, 0);
        this.ring.castShadow = true;
        this.core.add(this.ring);

        this.ring2 = new THREE.Shape();
        this.ring2.absarc( 0, 0, outerRadius, 0, Math.PI * 2, false );
        this.hole2 = new THREE.Path();
		this.hole2.absarc( 0, 0, innerRadius, 0, Math.PI * 2, true );
		this.ring2.holes.push(this.hole2);
        this.ring2 = new THREE.Mesh( new THREE.ExtrudeGeometry( this.ring2,this.extrudeSettings ),new THREE.MeshLambertMaterial({ color: 0x500050 }) );
        this.ring2.rotation.x=Math.PI*0.5;
        this.ring2.position.set(0, -rimWidth/2+2.5, 0);
        this.ring2.castShadow = true;
        this.core.add(this.ring2);

        wheel=this;
        this.updateWheel = function(speed){
            this.core.rotation.x+=speed*Math.PI;
            bars.forEach((bar) => bar.rotation.z-=speed*Math.PI);
        }
    }
}   

function setupDatGui() {
    control =  new function() {
        this.outerRadius = outerRadius;
        this.innerRadius = innerRadius;
        this.rimWidth = rimWidth;
        this.axleRadius = axleRadius;
        this.spokeLength = spokeLength;
        this.numberOfSpokes = numberOfSpokes;
        this.rotationDir = rotationDir;
        this.rotationScene = rotationScene;
        this.updateWheel = function(){        
            scene.remove(wheel.core);
            bars=[];
            createWheel();
        };
    }
    var gui = new dat.GUI();
    gui.add(control, 'outerRadius', 0, 25).onChange((x) => outerRadius = x);
    gui.add(control, 'innerRadius', 0, 20).onChange((x) => innerRadius = x);
    gui.add(control, 'rimWidth', 0, 20).onChange((x) => rimWidth = x);
    gui.add(control, 'axleRadius', 0, 5).onChange((x) => axleRadius = x);
    gui.add(control, 'spokeLength', 0, 45).onChange((x) => spokeLength = x);
    gui.add(control, 'numberOfSpokes', 5, 20).step(2).onChange((x) => numberOfSpokes = x );
    gui.add(control, 'rotationDir').onChange((x) => rotateSpeed*=-1);
    gui.add(control, 'rotationScene').onChange((x) => rotationScene = x);
    gui.add(control, 'updateWheel');
}

function render() {

    orbitControls.update();
    if (rotationScene)scene.rotation.y += 0.002;
    wheel.updateWheel(rotateSpeed);

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
