<template>
  <div class="hero bK_color">
    <div>
      <div class="hero-body">
        <h1 class="title is-size-1">法人・企業の皆様へ</h1>
        <h2 class="subtitle is-size-2">法人・企業の皆様の寄付はこちらから</h2>
      </div>
      <Button/>
    </div>
  </div>
</template>

<script>
import Button from "~/components/button/Button.vue";

export default {
  components: {
    Button
  }
};
</script>

<style scoped>
.bK_color {
  background-color: #828282;
}

.hero-body > h1,
.hero-body > h2 {
  /* text-align: center; */
  color: White !important;
}
</style>
