<template>
  <div>
    <Header01/>
    <Header02/>
    <GlobalNav/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import Header01 from "~/components/Header.vue";
import Header02 from "~/components/Header02.vue";
import GlobalNav from "~/components/GlobalNav.vue";
import MyFooter from "~/components/Footer.vue";
export default {
  name: "navbar",

  components: {
    Header01,
    Header02,
    GlobalNav,
    MyFooter
  }
};
</script>