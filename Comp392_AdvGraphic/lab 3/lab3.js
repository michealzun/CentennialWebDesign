// name: Yueyang Sun
// Date Jan 25th 2019
// File: lab3.js

var scene, renderer, control;
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
var clock = new THREE.Clock();
var TrackballControls;
var ambient,spot,point,directional,rect,hemi,help;
var plane,cube,sphere;


function init() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xaaffaa);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; 
    document.body.appendChild(renderer.domElement);


    // set up dat-gui
    control = new function () {
        this.ambient = true;
        this.ambientColor = 0x000000;
        this.spot = true;
        this.spotColor = 0x000000;
        this.point = true;
        this.pointColor = 0x000000;
        this.directional = true;
        this.directionalColor = 0x000000;
        this.rect = true;
        this.rectColor = 0x000000;
        this.hemi = true;
        this.hemiColor1 = 0x000000;
        this.hemiColor2 = 0x000000;
    }
    var gui = new dat.GUI();
    gui.add(control, 'ambient')
        .onChange((c) => {ambient.visible = c;});
    gui.addColor(control, 'ambientColor')  
        .onChange((c) => {ambient.color = new THREE.Color(c); });

    gui.add(control, 'spot')
        .onChange((c) => {spot.visible = c;});
    gui.addColor(control, 'spotColor')  
        .onChange((c) => {spot.color = new THREE.Color(c); });

    gui.add(control, 'point')
        .onChange((c) => {point.visible = c;});
    gui.addColor(control, 'pointColor')  
        .onChange((c) => {point.color = new THREE.Color(c); });

    
    gui.add(control, 'directional')
        .onChange((c) => {directional.visible = c;});
    gui.addColor(control, 'directionalColor')  
        .onChange((c) => {directional.color = new THREE.Color(c); });

    gui.add(control, 'rect')
        .onChange((c) => {rect.visible = c;});
    gui.addColor(control, 'rectColor')  
        .onChange((c) => {rect.color = new THREE.Color(c); });

    gui.add(control, 'hemi')
        .onChange((c) => {hemi.visible = c;});
    gui.addColor(control, 'hemiColor1')  
        .onChange((c) => {hemi.color = new THREE.Color(c); });
    gui.addColor(control, 'hemiColor2')  
        .onChange((c) => {hemi.groundColor = new THREE.Color(c); });


    TrackballControls = new THREE.TrackballControls(camera, renderer.domElement);

}

function setUpCameraAndLight() {
    ambient = new THREE.AmbientLight(0x505050);    
    scene.add(ambient);

    spot = new THREE.SpotLight(0x505050)
    spot.castShadow = true; 
    spot.position.set(15, 30, 0);
    spot.angle=Math.PI/6;
    scene.add(spot);

    point = new THREE.PointLight(0x505050)
    point.castShadow = true; 
    point.position.set(10, 25, 0);
    scene.add(point);

    directional = new THREE.DirectionalLight(0x505050, 0.7);     
    directional.position.set(50, 20, -10);   
    directional.castShadow = true;
    scene.add(directional); 

    rect = new THREE.RectAreaLight(0xffffff, 1000,  10, 10 );
    rect.position.set(17,5,10);
    rect.lookAt( 0, 0, 0 );
    help =new THREE.RectAreaLightHelper( rect );
    scene.add( rect );
    rect.add( help);
    

    hemi = new THREE.HemisphereLight( 0x505050, 0x505050 ,1); 
    scene.add( hemi );

    camera.position.set(-30, 40, 3);
    camera.lookAt(scene.position);
}

function createGeometry() {   
    plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(60, 40), new THREE.MeshLambertMaterial({ color: 0xeeeeee })); 
    plane.rotation.x = -0.5 * Math.PI;     
    plane.position.set(15, -5, 0); 
    plane.castShadow = true; 
    plane.receiveShadow = true; 
    scene.add(plane); 

    cube = new THREE.Mesh(new THREE.CubeGeometry(15,5,10),new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
    cube.rotateY = 0.25 * Math.PI;
    cube.position.set(15, 10, 0);
    cube.castShadow = true; 
    cube.receiveShadow = true; 
    scene.add(cube);

    sphere = new THREE.Mesh(new THREE.SphereGeometry(5,30,30),new THREE.MeshPhongMaterial({color: 0x66aa66, specular: 0x0000ff}));
    sphere.rotateY = 0.25 * Math.PI;
    sphere.position.set(15, 0, -10);
    sphere.castShadow = true; 
    sphere.receiveShadow = true; 
    scene.add(sphere);
}

function animate() {
    spot.lookAt(plane);

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