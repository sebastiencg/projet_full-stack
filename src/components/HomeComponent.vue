<template>
  <div style="height:90vh;">
    <l-map ref="map" v-model:zoom="zoom" :center="[45.75, 5.15]">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
  <div class="eventList">

  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 10.3,
    };
  },
};
</script>

<style scoped>
.eventList{
  height: 30vh;
  width: 100%;
  background-color: black;
}

</style>