// name: Yueyang Sun
// Date Feb 1th 2019
// File: assign1.js

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);
const scene = new THREE.Scene();
const clock = new THREE.Clock();

var control,
    trackballControl,
    pSpeed = 1,
    mSpeed = 1,
    planets = [],
    moons = []

function init(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111111);
    document.body.appendChild(renderer.domElement);
   
    control =  new function() {
        this.pSpeed = pSpeed;
        this.mSpeed = mSpeed;
    }
    var gui = new dat.GUI();
    gui.add(control, 'pSpeed', 0, 2).onChange((x) => pSpeed = x);
    gui.add(control, 'mSpeed', 0, 2).onChange((x) => mSpeed = x);
}

function setupCameraAndLight(){

    camera.position.set(-300, 50, 0);
    camera.lookAt(scene.position);
    trackballControl = new THREE.TrackballControls(camera, renderer.domElement);

    let ambient = new THREE.AmbientLight(0x707090);
    scene.add(ambient);

    let point = new THREE.PointLight(0x707030,10,10000);
    point.position.set(0, 0, 0);
    scene.add(point);
}

function createGeometry(){
    //sun
    var sun = new THREE.Mesh(
        new THREE.SphereGeometry(10, 50, 50),
        new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    sun.position.set(0, 0, 0);
    scene.add(sun)

    //merc
    planets.push(spawn(20,1,0x808080));
    scene.add(planets[0].mesh);
    //venus
    planets.push(spawn(40,2,0x609060));
    scene.add(planets[1].mesh);
    //earth
    planets.push(spawn(60,2,0x8080e0));
    scene.add(planets[2].mesh);
    //mars
    planets.push(spawn(80,1,0xc08080));
    scene.add(planets[3].mesh);
    //jup
    planets.push(spawn(100,5,0xa09070));
    scene.add(planets[4].mesh);
    //saturn
    planets.push(spawn(120,5,0xdd5050));
    scene.add(planets[5].mesh);
    //uranus
    planets.push(spawn(140,3,0x9090e0));
    scene.add(planets[6].mesh);
    //nepnepnepu~
    planets.push(spawn(160,3,0x3030e0));
    scene.add(planets[7].mesh);
    //not a real planet
    planets.push(spawn(180,1,0xa0a040));
    scene.add(planets[8].mesh);

    //moon
    moons.push(spawn(5,0.4,0x606060,planets[2].mesh));
    scene.add(moons[0].mesh);
    //jup1
    moons.push(spawn(6,0.2,0xc0c060,planets[4].mesh));
    scene.add(moons[1].mesh);
    //jup2
    moons.push(spawn(7,0.3,0xb0b0b0,planets[4].mesh));
    scene.add(moons[2].mesh);
    //jup3
    moons.push(spawn(8,0.5,0x303030,planets[4].mesh));
    scene.add(moons[3].mesh);
    //jup4
    moons.push(spawn(9,0.7,0x703090,planets[4].mesh));
    scene.add(moons[4].mesh);
    //jup5
    moons.push(spawn(10,1,0x307020,planets[4].mesh));
    scene.add(moons[5].mesh);
    //sat1
    moons.push(spawn(5,0.3,0x50f070,planets[5].mesh));
    scene.add(moons[6].mesh);
    //sat2
    moons.push(spawn(6,0.4,0xf0c0f0,planets[5].mesh));
    scene.add(moons[7].mesh);
    //sat3
    moons.push(spawn(8,0.7,0x60c040,planets[5].mesh));
    scene.add(moons[8].mesh);
}

function spawn(radius,size, myColor,parent){
    return new function(){
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(size, 50, 50),
            new THREE.MeshStandardMaterial({color: myColor})
        );

        this.mesh.position.set(radius, 0, 0);
        this.angle = Math.random() * Math.PI;
        this.randomSpeed = Math.random()+0.5;
        this.randomHeight = Math.random()*2-1;
        this.updatePlanet = function(delta){
            this.angle += delta;
            this.mesh.position.x = radius * Math.sin(this.angle*pSpeed/300*this.randomSpeed);
            this.mesh.position.z = radius * Math.cos(this.angle*pSpeed/300*this.randomSpeed);
            this.mesh.position.y = radius * Math.sin(this.angle*pSpeed/300*this.randomSpeed) * this.randomHeight;
        }

        this.updateMoon = function(delta){
            this.angle += delta;
            this.mesh.position.x = -radius * Math.sin(this.angle*mSpeed/40*this.randomSpeed) + parent.position.x;
            this.mesh.position.z = radius * Math.cos(this.angle*mSpeed/40*this.randomSpeed)+ parent.position.z;
            this.mesh.position.y = radius * Math.sin(this.angle*mSpeed/40*this.randomSpeed) * this.randomHeight+ parent.position.y;
        }
    };
}
function render(){
    trackballControl.update(clock.getDelta());
    renderer.render(scene, camera);
    planets.forEach((obj) => obj.updatePlanet(pSpeed));
    moons.forEach((obj) => obj.updateMoon(mSpeed));
    requestAnimationFrame(render);
}

window.onload = () =>{
    init();
    setupCameraAndLight();
    createGeometry();
    render();
}