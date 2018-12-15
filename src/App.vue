<template>
  <div id="app">
    <el-container>
      <el-aside class="sider-bar">
        <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <sidermenu :navdatas="navbars"></sidermenu>
          </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { navs } from './assets/JavaScript/siderbar'
export default {
  name: 'App',
   data () {
    return {

    }
  },
  computed:{
    navbars () {
      return navs
    }
  },
  methods:{

  },
  mounted () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sider-bar{
  width: 16%;
  height: 100%;
}
</style>
