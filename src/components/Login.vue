<template>
  <!-- 作为一个弹出层 -->
  <div class="login" v-show="show">
    <div class="content">
      <a-button @click="clg">login</a-button>
      <a-button @click="close">关闭</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['show'],
  methods: {
    clg () {
      console.log('show', this.show)
    },
    close () {
      this.$emit('update:show', false)
    }

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.login {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: aquamarine;
  transform: translate(-50%, -50%);
  z-index: 999;
  .content {
  }
}
</style>
