import $ from 'jquery';

import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import * as THREE from '/node_modules/three';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { hideAll } from './jq';


//scene
const scene = new THREE.Scene();
const light = new THREE.AmbientLight(0xcccccc);
light.position.set(0,5,5);
scene.add(light);

//camera

const canvas = document.querySelector(".webgl")
var container = document.getElementById("overlay-models");
var w = container.offsetWidth;
var h = container.offsetHeight;
let aspect = w/h;


const camera = new THREE.OrthographicCamera(-0.3654, 0.3654, 0.27615, -0.27615, 0.01, 20000);
camera.zoom = 1;
scene.add( camera );
camera.position.set(1,1,1);


//renderer
const renderer = new THREE.WebGLRenderer({canvas}); //delete alpha: true if not transparent
renderer.setClearColor(0x0000ff); // set transparent color if not transparent 
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(w, h);
// container.appendChild(renderer.domElement);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enablePan = false;
controls.enableDamping = true;


//Array of models
var modelPaths = ['models/organelle.glb','models/globe2.glb'];
var modelScales = [1,0.23];
var currentPathIndex = 0;
var currentModel;


//GLTF Loader
let clock = new THREE.Clock();
let mixer;
const loader = new GLTFLoader();

function loadModel(index, scale){

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
            gltf.scene.scale.set(scale,scale,scale);
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
            $("#model-loading").hide();
        },
        // called while loading is progressing
        function ( xhr ) {
            $("#model-loading").show();
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        // called when loading has errors
        function ( error ) {

            console.log( 'An error happened' );

        }
    );
    

    }

$("#ThreeDimInterface").on("click", function() {
    hideAll();
    loadModel(0,1);
    $("#overlay-loading").show();
    $("#overlay-models").css("visibility","visible");
    setTimeout(() => {
        $("#overlay-loading").hide();
        }, "200")
});



//Changes model on click
function next(){
    currentPathIndex = (currentPathIndex + 1) % modelPaths.length;
    loadModel(currentPathIndex, modelScales[currentPathIndex]);
}

function previous(){
    currentPathIndex = (currentPathIndex - 1 + modelPaths.length) % modelPaths.length;
    loadModel(currentPathIndex, modelScales[currentPathIndex]);
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




// //responsiveness
// window.addEventListener('resize', () => {
//     //update sizes
//     w = container.offsetWidth;
//     h = container.offsetHeight;
//     //Update Camera
//     camera.updateProjectionMatrix();
//     //Update Renderer
//     renderer.setSize(w,h);
// });

