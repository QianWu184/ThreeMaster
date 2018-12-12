<template>
  <div class="hello" id="hello">
    
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'HelloWorld',
  data () {
    return {
      renderer: {},
      scene:{},
      camera: {},
      cube: {}
    }
  },
  methods:{
    init(){
      // /static/image/materail4.jpg
      var container = document.getElementById( 'hello' );

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( { color: 0x2194ce, emissive:0x0, wireframe: true} );
      var cube = new THREE.Mesh( geometry, material );
      this.cube = cube
      scene.add( cube );

      camera.position.z = 5;

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      this.scene = scene;
      this.cube = cube;
      this.camera = camera;
      this.renderer = renderer;
      container.appendChild( renderer.domElement );
      this.animate();
    },
    animate() {
      requestAnimationFrame( this.animate );
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
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
canvas { width: 100%; height: 100% }
</style>
