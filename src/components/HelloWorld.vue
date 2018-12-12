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
      group: {}
    }
  },
  methods:{
    init(){
      // /static/image/materail4.jpg
      var container = document.getElementById( 'hello' );

      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
      
      var group = new THREE.Group();
      var geometry = new THREE.SphereGeometry(3, 32, 32);
      var texture = new THREE.TextureLoader().load( '/static/image/material4.jpg' );
      var material = new THREE.MeshBasicMaterial( {map: texture});
      var cube = new THREE.Mesh( geometry, material );


      var hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x333333, 2);
      hemisphereLight.position.x = 0;
      hemisphereLight.position.y = 0;
      hemisphereLight.position.z = 100;
      group.add(hemisphereLight);
      group.add(cube)

      this.group = group
      scene.add( group );
      camera.position.z = 20;

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth-20, window.innerHeight-20);
      this.scene = scene;
      this.camera = camera;
      this.renderer = renderer;
      container.appendChild( renderer.domElement );
      this.animate();
    },
    animate() {
      requestAnimationFrame( this.animate );
      this.group.rotation.y += 0.005;
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
