<template>
  <div class="navMenu">
    <label v-for="(item, index) in navdatas" :key="index">
        <el-submenu v-if="item.childs" :index="item.path">
           <sidermenu :navdatas="item.childs"></sidermenu>
           <span slot="title">{{item.name}}</span>
        </el-submenu>
        <router-link v-else  :to="item.path">
            <el-menuitem :index="item.path">{{item.name}}</el-menuitem>
        </router-link>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'sidermenu',
    props: {
        navdatas:Array
    },
    data() {
      return {}
    },
    methods: {

    },
    mounted (){
    }
  }
</script>
 
<style scoped>
 
</style>
