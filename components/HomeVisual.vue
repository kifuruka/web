<template>
  <div class="tile is-ancestor" style="max-width: 1560px; margin:0 auto;">
    <div class="tile is-parent is-6">
      <div class="tile is-child pd08">
        <img :src="Homeimg1" class="u-img" alt="#">
      </div>
    </div>
    <div class="tile is-parent is-6">
      <div class="tile is-child is-vertical pd06">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child is-6 pd06" style="margin-bottom:0;">
              <img :src="Homeimg2" class="u-img" alt="#">
            </div>
            <div class="tileis-child is-6 pd06">
              <img :src="Homeimg3" class="u-img" alt="#">
            </div>
          </div>
        </div>
        <div class="tile pd6">
          <img :src="Homeimg4" class="u-img" alt="#">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Homeimg1 from "~/assets/img/topimg/top001.jpg";
import Homeimg2 from "~/assets/img/topimg/top002.jpg";
import Homeimg3 from "~/assets/img/topimg/top003.jpg";
import Homeimg4 from "~/assets/img/topimg/top04.jpg";

export default {
  data() {
    return {
      Homeimg1,
      Homeimg2,
      Homeimg3,
      Homeimg4
    };
  }
};
</script>

<style scoped>
.flex3 {
  display: flex;
  flex-direction: row-reverse;
}

.pd06 {
  padding: 0.6rem !important;
}

.pd08 {
  padding: 1.2rem !important;
}

.u-img {
  width: 100%;
  height: 100% !important;
}
</style>
