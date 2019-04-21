<template>
    <div id="olmap">
        
    </div>
</template>
<script>
import Map from 'ol/Map';
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

export default {
  data() {
    return {};
  },
  methods: {
    initMap() {
      var layers = [
        new TileLayer({
          source: new OSM()
        }),
      ];
      var map = new Map({
        layers: layers,
        target: "olmap",
        view: new View({
          center: [-10997148, 4569099],
          zoom: 4
        })
      });
    }
  },
  mounted() {
      this.initMap();
  }
};
</script>
<style>
#olmap {
  width: 100%;
  height: 100%;
}
.el-main{
    padding: 0px;
}
</style>

