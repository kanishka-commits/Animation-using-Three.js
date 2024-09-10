import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas=document.getElementById('canvas');
 
//1st Create a scene
const sc=new THREE.Scene(); //Scene is a constructor
sc.background=new THREE.Color('#F0F0F0');

//2nd add a Camera
const cam= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
cam.position.z=5;
 
//3rd select an object
const geo1=new THREE.BoxGeometry(2,2,3);
const material1=new THREE.MeshLambertMaterial({color:'#f50284',emissive:'#000000'});

const cube1=new THREE.Mesh(geo1,material1);

sc.add(cube1);


//4th Add lights
const light=new THREE.DirectionalLight(0x9CDBA6,10);
light.position.set(1,1,1);

sc.add(light);

//5th Render the objects
const renderr=new THREE.WebGLRenderer({canvas}); //by adding'canvas' the object will be visible on whole screen
renderr.setSize(window.innerWidth,window.innerHeight);
renderr.setPixelRatio(devicePixelRatio); //to make it smooth for all type of devices
//document.body.appendChild(renderr.domElement);



//7th Orbital controls
//Helpful when we want to rotate object according to our need
const Ocontrol=new OrbitControls(cam,renderr.domElement);
Ocontrol.enableDamping=true;
Ocontrol.dampingFactor=0.05;
Ocontrol.enableZoom=true;
Ocontrol.enablePen=true;

// 6th Animate
function animate(){
    requestAnimationFrame(animate);
    // cube1.rotation.x+=0.02;
    // cube1.rotation.z+=0.006;

    Ocontrol.update();
    renderr.render(sc,cam);
}

//8th Handle window resizing
//whenever browser window is resized, we'll need not to refresh the page, the size of object will automatically be adjusted
window.addEventListener('resize',()=>{
  cam.aspect=window.innerWidth/window.innerHeight;
  cam.updateProjectionMatrix();
  renderr.setSize(window.innerWidth,window.innerHeight);

})

animate();


