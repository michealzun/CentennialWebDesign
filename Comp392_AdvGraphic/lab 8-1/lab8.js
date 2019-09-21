//https://threejs.org/examples/?q=gltf#webgl_loader_gltf
//https://threejs.org/examples/?q=balls#webgl_materials_cubemap_balls_refraction
//BrightnessContrast, vignette 

//yueyang sun lab8

var renderer = new THREE.WebGLRenderer({ antialias: true });
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1.0, 1000);
var clock = new THREE.Clock();

var composer ;

var orbitControls, controls,//composer,
    speed = 0.01,
    toRotate = true,
    loadVignetteShader= false,
    loadContrastShader= false,
    VignetteMat,
    ContrastMat,
    helm;

function init() {

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    renderer.shadowMap.enabled = true;
    renderer.gammaOutput = true;
    /*
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.renderPass( scene, camera ));
    var firstEffect = new THREE.ShaderPass(THREE.VignetteShader);
    firstEffect.renderToScreen = true;
    composer.addPass(firstEffect);*/

    document.body.appendChild(renderer.domElement);
    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
}

function setupCameraAndLight() {
    camera.position.set(0, 0, 5);
    camera.lookAt(scene.position);

    var directionalLight = new THREE.DirectionalLight(0xffffff);     
    directionalLight.position.set(-10, 30, 30);     
    scene.add(directionalLight); 

    var ambientLight = new THREE.AmbientLight(0xffffff);     
    scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xaffaa);
    pointLight.position.set(5, 5, 0);
    scene.add(pointLight)

    scene.add(new THREE.AmbientLight(0x666666));
    scene.position.set(0, 0, 0);
}

function createGeometry() {
    VignetteMat = new THREE.ShaderMaterial(
    	{
    		uniforms: THREE.VignetteShader.uniforms,
    		vertexShader: THREE.VignetteShader.vertexShader,
    		fragmentShader: THREE.VignetteShader.fragmentShader
        });
    ContrastMat = new THREE.ShaderMaterial(
        {
            uniforms: THREE.BrightnessContrastShader.uniforms,
            vertexShader: THREE.BrightnessContrastShader.vertexShader,
            fragmentShader: THREE.BrightnessContrastShader.fragmentShader
        });
    scene.add(new THREE.AxesHelper(100));
    //skybox
    scene.background=new THREE.CubeTextureLoader().setPath( './assets/' ).load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
    //model
    var loader= new THREE.CubeTextureLoader().setPath( './assets/' );
    var url = [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ];
	loader.load( url, function ( texture ) {

        var pmremGenerator = new THREE.PMREMGenerator( texture );
        pmremGenerator.update( renderer );

        var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
        pmremCubeUVPacker.update( renderer );
        
        var loader = new THREE.GLTFLoader().setPath( 'assets/glTF/' );
        loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
            gltf.scene.traverse( function ( child ) {
                mater=child.material;
                if ( child.isMesh ) {child.material.envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;}
                
            });
            helm=gltf.scene;
        scene.add( helm );
        });
    pmremGenerator.dispose();
	pmremCubeUVPacker.dispose();
    });
    //test
    
    var geometry = new THREE.BoxGeometry( 2,2, 2 );
    var cube=new THREE.Mesh(geometry,ContrastMat);
    cube.position.y=5;
    scene.add(cube);

}

function refreshScene(){
    scene.remove(helm);


    if(loadVignetteShader){

        var loader= new THREE.CubeTextureLoader().setPath( './assets/' );
        var url = [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ];
        loader.load( url, function ( texture ) {

            var pmremGenerator = new THREE.PMREMGenerator( texture );
            pmremGenerator.update( renderer );

            var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
            pmremCubeUVPacker.update( renderer );
            
            var loader = new THREE.GLTFLoader().setPath( 'assets/glTF/' );
            loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
                gltf.scene.traverse( function ( child ) {
                    child.material= VignetteMat;
                    if ( child.isMesh ) {child.material.envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;}
                    
                });
                helm=gltf.scene;
                scene.add( helm );
            });
        pmremGenerator.dispose();
        pmremCubeUVPacker.dispose();
        });

    }else if(loadContrastShader){

        var loader= new THREE.CubeTextureLoader().setPath( './assets/' );
        var url = [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ];
        loader.load( url, function ( texture ) {

            var pmremGenerator = new THREE.PMREMGenerator( texture );
            pmremGenerator.update( renderer );

            var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
            pmremCubeUVPacker.update( renderer );
            
            var loader = new THREE.GLTFLoader().setPath( 'assets/glTF/' );
            loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
                gltf.scene.traverse( function ( child ) {
                    child.material= ContrastMat;
                    if ( child.isMesh ) {child.material.envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;}
                    
                });
                helm=gltf.scene;
                scene.add( helm );
            });
        pmremGenerator.dispose();
        pmremCubeUVPacker.dispose();
        });

    }else{
        var loader= new THREE.CubeTextureLoader().setPath( './assets/' );
        var url = [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ];
        loader.load( url, function ( texture ) {

            var pmremGenerator = new THREE.PMREMGenerator( texture );
            pmremGenerator.update( renderer );

            var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
            pmremCubeUVPacker.update( renderer );
            
            var loader = new THREE.GLTFLoader().setPath( 'assets/glTF/' );
            loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
                gltf.scene.traverse( function ( child ) {
                    if ( child.isMesh ) {child.material.envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;}
                    
                });
                helm=gltf.scene;
                scene.add( helm );
            });
        pmremGenerator.dispose();
        pmremCubeUVPacker.dispose();
        });
    }
}

function setupDatGui() {

    controls = new function() {
        this.rotate = toRotate;
        this.loadVignetteShader=loadVignetteShader;
        this.loadContrastShader=loadContrastShader;
    }

    let gui = new dat.GUI();
    gui.add(controls, 'rotate').onChange((e) => toRotate = e);
    gui.add(controls, 'loadVignetteShader').onChange(function (e){ loadVignetteShader = e; refreshScene();});
    gui.add(controls, 'loadContrastShader').onChange(function (e){  loadContrastShader = e;refreshScene();});
}

function render() {

    orbitControls.update();
    if (toRotate)
        scene.rotation.y += speed;
    //composer.render( clock.getDelta() );
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
