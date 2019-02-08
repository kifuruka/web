<template>
  <div>
    <home-visual/>
    <el-container>
      <el-main v-loading.fullscreen.lock="isLoading">
        <search-form/>
        <search-result/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="babel">
import {mapState} from 'vuex'
import SearchResult from '~/components/SearchResult.vue'
import SearchForm from '~/components/SearchForm.vue'
import HomeVisual from '~/components/HomeVisual.vue'

export default {
  layout: 'navbar',
  components: {
    SearchForm,
    SearchResult,
    HomeVisual
  },
  // store の state からデータを取得
  computed: mapState(['isLoading']),
  // store の action に用意した 'getItems' を呼ぶ
  fetch ({ store }) {
    store.dispatch('getItems', {
      keyword: 'nuxt.js'
    })
  }
}
</script>

<style>
.el-main {
  background-color: #fff;
}
</style>