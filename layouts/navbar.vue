<template>
  <div>
    <Header/>
    <!-- <GlobalNav/> -->
    <HomeVisual/>
    <HomeMessage/>
    <MySchool/>
    <CorporateInfo/>
    <!-- <Header01/>
    <Header02/>-->
    <!-- <nuxt/> -->
    <my-footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import GlobalNav from "~/components/GlobalNav.vue";
import HomeVisual from "~/components/HomeVisual.vue";
import HomeMessage from "~/components/HomeMessage.vue";
import CorporateInfo from "~/components/CorporateInfo.vue";
import MySchool from "~/components/MySchool.vue";
import MyFooter from "~/components/Footer.vue";

// import Header01 from "~/components/Header.vue";
// import Header02 from "~/components/Header02.vue";
export default {
  name: "navbar",

  components: {
    Header,
    // GlobalNav,
    HomeVisual,
    HomeMessage,
    CorporateInfo,
    MySchool
    // Header01,
    // Header02,
    // Header
    // MyFooter
    // TopVisual
  }
};
</script>