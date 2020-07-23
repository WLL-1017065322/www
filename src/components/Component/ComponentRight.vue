<template>
  <div class="component-right">{{path}}</div>
</template>

<script>
export default {
  data () {
    return {
    //   path: ''
    }
  },
  computed: {
    path: function () {
      return this.$route.path
    }
  },
  created () {
    console.log('path', this.$route)
  },
  components: {

  }
}
</script>

<style scoped lang="less">
</style>
