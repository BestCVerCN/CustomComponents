import * as THREE from 'three';
import Hammer from 'hammerjs';

var InteractManager = function(camera, domId) {

  this.meshesWithOnClick = [];

  this.addMeshWithOnClick = function(mesh, onClick) {
    this.meshesWithOnClick.push({
      mesh: mesh,
      onClick: onClick
    });
  }

  var element = document.getElementById(domId);
  var mc = new Hammer(element);
  mc.get('pinch').set({ enable: true });
  mc.get('rotate').set({ enable: true });

  mc.on('tap', (ev) => {
    console.log('tab');
    checkIntersectByRaycaster(ev.center.x, ev.center.y, this.meshesWithOnClick, camera);
  });
  mc.on('pinch', (ev) => {
    console.log('pinch!!');
  });
  mc.on('rotate', (ev) => {
    console.log('rotate!!');
  });

  function checkIntersectByRaycaster(x, y, meshesWithOnClick, camera) {
    var vector = new THREE.Vector3((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1, 0.5);
    vector = vector.unproject(camera);
  
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    for (var i = 0; i < meshesWithOnClick.length; i++) {
      var mesh = meshesWithOnClick[i].mesh;
      var onClick = meshesWithOnClick[i].onClick;

      var intersects = raycaster.intersectObject(mesh);
    
      if (intersects.length > 0) {
        onClick(intersects[0].object);
        break;
      }
    } 
  }
}

export default InteractManager;
