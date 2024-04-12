import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// initial cofiguration
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 15);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// object
//// cube
const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
//// line
//create a blue LineBasicMaterial
const line = new THREE.Line(new THREE.BufferGeometry()
  .setFromPoints([new THREE.Vector3(- 10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x0000ff }));

// functions
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}


// rendering
if (WebGL.isWebGLAvailable()) {

  // Initiate function or other initializations here
  scene.add(cube);
  scene.add(line);
  renderer.render(scene, camera);
  // animate();

} else {

  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);

}