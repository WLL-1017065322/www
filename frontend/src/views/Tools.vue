<template>
  <div class="tools">
    <a-menu
      mode="inline"
      :open-keys="openKeys"
      style="width: 256px"
      @openChange="onOpenChange"
      @click="handleClick"
    >
      <a-sub-menu key="sub1">
        <span slot="title">
          <!-- <a-icon type="mail" /> -->
          <span>Navigation One</span>
        </span>
        <a-menu-item key="1">Option 1</a-menu-item>
        <a-menu-item key="2">Option 2</a-menu-item>
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="open">
        <span slot="title">
          <!-- <a-icon type="appstore" /> -->
          <span>Navigation Two</span>
        </span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title">
          <!-- <a-icon type="setting" /> -->
          <span>Navigation Three</span>
        </span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      // 当前展开的菜单项
      openKeys: ['']
    }
  },
  methods: {
    onOpenChange (openKeys) {
      console.log('openKeys', openKeys)
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    open (item) {
      // console.log('item', item)
    },
    handleClick (e) {
      console.log('item', e)
      console.log('this.$route', this.$route)
      if (this.$route.params.id !== e.key) {
        console.log(1)
        this.$router.push({ path: `/tools/${e.key}` })
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.tools {
  width: 1200px;
  margin: 30px auto;
  background-color: #fff;
  display: flex;
}
</style>
