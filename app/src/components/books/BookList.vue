<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>

<script>
// require('vue-swipe/dist/vue-swipe.css');
import vueswipe from "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  mounted: function() {
    this.$store.commit("change", {
      bgColor: "rgb(121, 85, 72)",
      title: "Movie"
    });
  },
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style scoped>
.my-swipe {
  height: 200px;
}

.slide1 {
  background-color: #0089dc;
}

.slide2 {
  background-color: #ffd705;
}

.slide3 {
  background-color: #ff2d4b;
}
</style>