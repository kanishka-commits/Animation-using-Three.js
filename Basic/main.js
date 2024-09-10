import * as THREE from 'three';

//1st Create a scene
const sc=new THREE.Scene();
sc.background=new THREE.Color('#F0F0F0');

//2nd add a Camera
const cam=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,0.1,1000);
cam.position.z=5;

//3rd select an object
const geo1=new THREE.BoxGeometry();
const material1=new THREE.MeshLambertMaterial({color:'#f50284',emissive:'#000000'});

const cube1=new THREE.Mesh(geo1,material1);

const geo2=new THREE.BoxGeometry();
const material2=new THREE.MeshLambertMaterial({color:'#f50284',emissive:'#000000'});

const cube2=new THREE.Mesh(geo2,material2);
sc.add(cube1);
sc.add(cube2);

//4th Add lights
const light=new THREE.DirectionalLight(0x9CDBA6,10);
light.position.set(1,1,1);

sc.add(light);

//5th Render the objects
const renderr=new THREE.WebGLRenderer();
renderr.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderr.domElement);

// 6th Animate
function animate(){
    requestAnimationFrame(animate);
    cube1.rotation.x+=0.02;
    cube1.rotation.z+=0.006;

    cube2.rotation.x+=0.02;
    cube1.rotation.z+=0.006;
    
    renderr.render(sc,cam);
}

animate();
