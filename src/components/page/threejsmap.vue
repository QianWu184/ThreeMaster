<template>
  <div class="hello" id="hello">
  </div>
</template>

<script>
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols'
export default {
  name: 'HelloWorld',
  data () {
    return {
      renderer: {},
      scene:{},
      camera: {},
      cube: {},
    }
  },
  methods:{
    init(){
      var container = document.getElementById( 'hello' );
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, container.offsetWidth / container.offsetHeight, 0.1, 1000 );
      camera.position.z = 20;
      var group = new THREE.Group();
      var geometry = new THREE.SphereGeometry(3, 32, 32);
      var texture = new THREE.TextureLoader().load( '/static/image/material4.jpg' );
      scene.background=new THREE.TextureLoader().load( '/static/image/bgstars.png' );
      var material = new THREE.MeshLambertMaterial( {
        map: texture,
      });
      var cube = new THREE.Mesh( geometry, material );
      this.cube = cube
      // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
      var light = new THREE.DirectionalLight(0xFFFFFF,4);
      light.position.set(100,100,-6);
      var Amlight = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
      group.add( Amlight );
      group.add(light);
      group.add(cube)
      scene.add( group );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( container.offsetWidth, container.offsetHeight);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;


      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.25
      controls.enableZoom = false
      
      container.appendChild( renderer.domElement );
      this.animate();
    },
    animate() {
      requestAnimationFrame( this.animate );
      this.cube.rotation.y += 0.005;
      this.renderer.render( this.scene, this.camera );
    }
  },
  mounted () {
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body { margin: 0; }
/* canvas { width: 100%; height: 100% } */
#bglight{
  position: absolute;
  z-index: 10;
  top: 20%;
  left: 50%;
  width: 345px;
}
#hello{
    width: 600px;
    height: 600px;
}
</style>
