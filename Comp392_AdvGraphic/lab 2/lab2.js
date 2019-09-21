


// name: Yueyang Sun
// Date Jan 18th 2019
// File: lab2.js

var scene, renderer, control;
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
var clock = new THREE.Clock();
var TrackballControls;
var plane;


function init() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xaaffaa);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    // set up dat-gui
    control = new function () {
        this.size = 5;
        this.shape = 'Cube';
        this.color = 0xff00ff;
        this.addGeometry = function () {
            var geo;
            if(this.shape=='Cube'){
                geo= new THREE.CubeGeometry(this.size,this.size,this.size);
            }else{
                geo= new THREE.SphereGeometry(this.size/2, 32, 32);
            }
             var mat = new THREE.MeshBasicMaterial({ color: this.color });
             var mesh = new THREE.Mesh(geo, mat);
            
             mesh.rotateX = -0.25 * Math.PI;
             mesh.rotateY = 0.25 * Math.PI;
             mesh.position.set(15, 0, 0);
             scene.add(mesh);

            plane.position.set(15, -this.size/2, 0); 
        }
    }
    var gui = new dat.GUI();
    gui.add(control, 'size', 2, 6).step(1);
    gui.add(control, 'shape',['Cube','Sphere']);
    gui.addColor(control, 'color');
    gui.add(control, 'addGeometry');
    TrackballControls = new THREE.TrackballControls(camera, renderer.domElement);

}

function setUpCameraAndLight() {
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);     
    directionalLight.position.set(-20, 40, 60);     
    scene.add(directionalLight); 

    var ambientLight = new THREE.AmbientLight(0x292929);     
    scene.add(ambientLight);

    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);
}

function createGeometry() {
    var planeGeometry = new THREE.PlaneBufferGeometry(60, 20);     
    var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });     
    plane = new THREE.Mesh(planeGeometry, planeMaterial); 
    plane.rotation.x = -0.5 * Math.PI;     
    plane.position.set(15, 0, 0); 
    scene.add(plane); 
}

function animate() {
    TrackballControls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

window.onload = () => {
    init();
    setUpCameraAndLight();
    createGeometry();
    animate();
}