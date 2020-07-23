<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <router-link to="/" tag="a" class="header-home" exact>主页</router-link>
        <router-link to="/tools" tag="a" class="header-tools">在线工具</router-link>
        <!-- <router-link to="/log" tag="a" class="header-log">日志系统</router-link> -->
        <router-link to="/demo" tag="a" class="header-demo">个人作品</router-link>
        <router-link to="/component" tag="a" class="header-demo">封装组件</router-link>
        <router-link to="/hotevent" tag="a" class="header-demo">热门事件随记</router-link>
        <router-link to="/chong" tag="a" class="header-about">百虫集</router-link>
        <router-link to="/grass" tag="a" class="header-about">百草集</router-link>
        <router-link to="/about" tag="a" class="header-about">关于我</router-link>
        <!-- <router-link to="/board" tag="a" class="header-board">留言板</router-link> -->
      </div>
      <div class="right">
        <div class="login" @click="showLogin">登录/注册</div>
        <Login :show.sync="isShow"></Login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login'
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showLogin () {
      this.isShow = true
    }
  },
  components: {
    Login
  }
}
</script>

<style scoped lang="less">
.header {
  width: 100%;
  background-color: #555;
  .container {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    .left {
      flex: 1;
      a {
        margin: 1rem;
      }
      a:hover {
        color: #fff;
      }
    }
    .right {
      .login {
        cursor: pointer;
        color: #fff;
      }
      .login:hover {
        color: #1890ff;
      }
    }
  }
}
.router-link-active {
  color: #1890ff;
}
a {
  color: #fff;
}
</style>
