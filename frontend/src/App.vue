<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <div class="back-top">
      <a-back-top />
      <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  data () {
    return {

    }
  },
  components: { Header, Footer }
}
</script>

<style scoped lang="less">
#app {
  background-color: #eee;
}
</style>
