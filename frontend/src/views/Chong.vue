<template>
  <div class="chong">
    <ul class="chong-content">
      <li v-for="(item,index) in demos" :key="index">
        <div class="imgbox">
          <img :src="item.src" alt />
        </div>
        <div class="introduction">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demos: [
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' },
        { src: '/xxyl.jpg', title: 'vue', content: '购物车结算jq，订单的选择或删除、金额的计算。' }
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.chong {
  .chong-content {
    width: 1200px;
    // min-height: 900px;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0px;
    background-color: #fff;
    li {
      width: 25%;
      padding: 10px;
      position: relative;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        transition: 0.5s;
        color: #fff;
        .imgbox {
          filter: brightness(0.3);
          transform: scale(1.1);
        }
        .introduction {
          display: block;
        }
      }
      .imgbox {
        width: 100%;
        transition: 0.5s;
        position: relative;
        img {
          width: 100%;
        }
      }
      .introduction {
        display: none;
        color: #fff;
        font-size: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .title {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        .content {
          font-size: 0.8rem;
        }
      }
    }
  }
}

a {
  color: #000;
  text-decoration: none;
}
</style>
