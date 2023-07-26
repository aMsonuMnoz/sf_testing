import $ from 'jquery';

import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import * as THREE from '/node_modules/three';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';


//scene
const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xcccccc);
const directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
light.position.set(0,5,5);
scene.add(light);

//camera
const canvas = document.querySelector(".webgl")
var container = document.getElementById("overlay3");
var w = container.offsetWidth;
var h = container.offsetHeight;
let aspect = w/h;


const camera = new THREE.OrthographicCamera(-0.3654, 0.3654, 0.27615, -0.27615, 0.01, 20000);
camera.zoom = 1;
scene.add( camera );
camera.position.set(1,1,1);


//camera helper
// const helper = new THREE.CameraHelper(camera);
// scene.add(helper);




//renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setClearColor(0x0000ff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(w, h);
container.appendChild(renderer.domElement);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enablePan = false;


//Array of models
var modelPaths = ['models/organelle4.glb','models/globe2.glb'];
var currentPathIndex = 0;
var currentModel;

// const hlp = new THREE.AxesHelper(1);
// scene.add(hlp);

//plane geometry
// const geometry = new THREE.PlaneGeometry( 5, 5 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// const plane = new THREE.Mesh( geometry, material );
// plane.rotation.x=(Math.PI/180*90);
// plane.position.y=-.1;
// scene.add( plane );

//GLTF Loader
let clock = new THREE.Clock();
let mixer;
const loader = new GLTFLoader();

function loadModel(index){

    if (currentModel){
        scene.remove(currentModel); //remove current
    }
    loader.load(
        // resource URL
        modelPaths[index],
        // called when the resource is loaded
        function ( gltf ) {
            mixer = new THREE.AnimationMixer( gltf.scene );
            const object = gltf.scene;
            gltf.scene.scale.set(1,1,1);
            gltf.scene.position.x = 0;
            gltf.scene.position.y = 0;
            gltf.scene.position.z = 0;
            
            //UNCOMMENT THIS FOR ANIMATIONS
            // console.log(gltf.animations[0]);
            // let action = mixer.clipAction( gltf.animations[ 0 ] );
            // action.play();
            currentModel = object;
            scene.add(gltf.scene);
            $('#modelTitle').empty();
            $('#modelTitle').append(modelPaths[index]);
        },
        // called while loading is progressing
        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );
    }

loadModel(currentPathIndex);


//Changes model on click
function next(){
    currentPathIndex ++;
    loadModel(currentPathIndex);
}

function previous(){
    currentPathIndex --;
    loadModel(currentPathIndex);
}

$("#nextmodel").on("click", function() {
    next();
});
$("#prevmodel").on("click", function() {
    previous();
});


// update
function update() {
    // mixer.update(clock.getDelta());
    controls.update();
}

// update function to the render loop
function renderLoop() {
    requestAnimationFrame(renderLoop);
    update();
    renderer.render(scene, camera);
}

// fire-up the render loop
renderLoop();




//responsiveness
window.addEventListener('resize', () => {
    //update sizes
    w = container.offsetWidth;
    h = container.offsetHeight;
    //Update Camera
    camera.updateProjectionMatrix();
    //Update Renderer
    renderer.setSize(w,h);
})
