/// <reference path="libs/three.min.js" />
/// <reference path="libs/trackballcontrols.js" />
//name: yueyang sun
//date:Jan 11 2019
//lab01.js

//recurrent const
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const clock = new THREE.Clock();
//variables
var trackballControls;

//functions
function init() {
    renderer.setClearColor(new THREE.Color(0X5070A0));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    trackballControls = new THREE.TrackballControls(camera, renderer.domElement);
}

function setupCameraAndLight() {
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    let ambient = new THREE.AmbientLight(0X404040,2);
    scene.add(ambient);
    let direction = new THREE.DirectionalLight(0X404000, 2);
    scene.add(direction);
    //axes
    var axes = new THREE.AxisHelper(3);
    scene.add(axes);
}

function createGeometry() {
    /*
    let planeGeometry = new THREE.PlaneGeometry(6, 2, 1, 1);
    let planeMaterial = new THREE.MeshLambertMaterial({ color: 0X4aad78 });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);
    */

    //sphere
    let sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 4, 4), new THREE.MeshLambertMaterial({ color: 0X4aad78 }));
    sphere.position.x = 0;
    sphere.position.y = 5;
    sphere.position.z = 0;
    scene.add(sphere);

    //box
    let box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ color: 0X5090a0 }));
    sphere.position.x = 0;
    sphere.position.y = 10;
    sphere.position.z = 0;
    scene.add(box);

    //ring
    let ring = new THREE.Mesh(new THREE.RingGeometry(1, 5, 20), new THREE.MeshLambertMaterial({ color: 0Xff40ff }));
    ring.position.x = 10;
    ring.position.y = 5;
    ring.position.z = 0;
    scene.add(ring);
}

function render() {
    trackballControls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
//launch
window.onload = () => {
    init();
    setupCameraAndLight();
    createGeometry();
    render();
}