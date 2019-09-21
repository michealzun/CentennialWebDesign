


// name: Yueyang Sun
// Date Feb 1th 2019
// File: lab4.js

var scene, renderer, control;
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
var clock = new THREE.Clock();
var TrackballControls;
var plane;
var cone;

var planeGeo;
var coneGeo;
var planeMat;
var coneMat;


function init() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xaaccff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    control = new function () { 
        this.emissive=0xffffff;  
        this.emissiveIntensity=1;  
        this.clearCoat = 0;
        this.clearCoatRoughness = 0;
        this.reflectivity = 0.5;
        this.metalness=0.5;
        this.roughness=0.5;
        this.wireframe=false;
        this.transparent=true;
        this.opacity=0;
    }

    var gui = new dat.GUI();
    gui.addColor(control, 'emissive')
    .onChange((c) => {coneMat.emissive = new THREE.Color(c)});
    gui.add(control, 'emissiveIntensity',0.01,10)
    .onChange((c) => {coneMat.emissiveIntensity = c;});
    gui.add(control, 'clearCoat',0.01,1)
    .onChange((c) => {coneMat.clearCoat = c;});
    gui.add(control, 'clearCoatRoughness',0.01,1)
    .onChange((c) => {coneMat.clearCoatRoughness = c;});
    gui.add(control, 'reflectivity',0.01,1)
    .onChange((c) => {coneMat.reflectivity = c;});
    gui.add(control, 'metalness',0.01,1)
    .onChange((c) => {coneMat.metalness = c;});
    gui.add(control, 'roughness',0.01,1)
    .onChange((c) => {coneMat.roughness = c;});
    gui.add(control, 'wireframe')
    .onChange((c) => {coneMat.wireframe = c;});
    gui.add(control, 'transparent')
    .onChange((c) => {coneMat.transparent = c;});
    gui.add(control, 'opacity',0.01,1)
    .onChange((c) => {coneMat.opacity = c;});

    
    TrackballControls = new THREE.TrackballControls(camera, renderer.domElement);

}

function setUpCameraAndLight() {
    var directionalLight = new THREE.DirectionalLight(0xffffff);     
    directionalLight.position.set(-20, 40, 60);     
    scene.add(directionalLight); 

    var ambientLight = new THREE.AmbientLight(0xffffff);     
    scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xaffaa);
    pointLight.position.set(15, 5, 0);
    scene.add(pointLight)

    camera.position.set(-10, 5, 10);
    
}

function createGeometry() {    
    planeGeo=new THREE.PlaneGeometry(30, 30);
    coneGeo=new THREE.ConeGeometry(2,3,50);
    planeMat=new THREE.MeshPhysicalMaterial({ color: 0xccffcc });
    coneMat=new THREE.MeshPhysicalMaterial({ color: 0xccffff });
    
    plane = new THREE.Mesh(planeGeo,planeMat); 
    plane.rotation.x = -0.5 * Math.PI;     
    plane.position.set(15, 0, 0);
    scene.add(plane);

    cone = new THREE.Mesh(coneGeo,coneMat)
    cone.position.set(15, 3, 0); 
    scene.add(cone);

}

function animate() {
    TrackballControls.update(clock.getDelta());
    cone.rotation.y+=0.01;
    cone.rotation.x+=0.003;
    plane.rotation.z+=0.005;
    camera.lookAt(plane.position);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

window.onload = () => {
    init();
    setUpCameraAndLight();
    createGeometry();
    animate();
}