<template>
  <div class="home">
    <div class="top">
      <div class="logo">along</div>
      <div class="search">
        <a-input-search placeholder="input search text" size="default" @search="onSearch">
          <a-button slot="enterButton">Custom</a-button>
        </a-input-search>
      </div>
    </div>
    <div class="home-content">
      <div class="left">
        <div class="slideshow">
          <a-carousel arrows>
            <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1" autoplay>
              <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
              <a-icon type="right-circle" />
            </div>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </a-carousel>
        </div>
        <ul class>
          <li v-for="(item,index) in [1,2,3,4,5]" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="weather">天气</div>
        <div class="classify">
          <div class="text">分类</div>
          <div class="other"></div>
        </div>
        <div class="love">猜你喜欢</div>
        <div class="card1"></div>
        <div class="card2">友情链接</div>
        <div class="tagCloud">标签云</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onSearch (value) {
      console.log('search', value)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.home {
  width: 1200px;
  margin: 0 auto;
  background-color: #eee;
  .top {
    width: 100%;
    height: 90px;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 2rem;
    }
    .search {
      input {
        outline-style: none;
        border: 0;
      }
    }
  }
  .home-content {
    display: flex;
    .left {
      width: 80%;
      .slideshow {
        margin: 2px 2px;
        .ant-carousel {
          .slick-slider {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #364d79;
            overflow: hidden;
            .custom-slick-arrow {
              width: 25px;
              height: 25px;
              font-size: 25px;
              color: #fff;
              background-color: rgba(31, 45, 61, 0.11);
              opacity: 0.3;
              &::before {
                display: none;
              }
              &:hover {
                opacity: 0.5;
              }
            }
            h3 {
              height: 300px;
              background-color: #123;
              color: #fff;
            }
          }
        }
      }
    }
    .right {
      width: 100%;
      .weather {
        box-shadow: 1px 1px 2px #888888;
        background-color: #321;
        height: 80px;
      }
      .classify {
        box-shadow: 1px 1px 2px #888888;
        background-color: #fff;
        .text {
          margin: 0 2px;
        }
      }
      .love {
        box-shadow: 1px 1px 2px #888888;
        background-color: #fff;
      }
      .card1 {
        box-shadow: 1px 1px 2px #888888;
        background-color: #fff;
      }
      .card2 {
        box-shadow: 1px 1px 2px #888888;
        background-color: #fff;
      }
      .tagCloud {
        box-shadow: 1px 1px 2px #888888;
        background-color: #fff;
      }
    }
  }
}
</style>
