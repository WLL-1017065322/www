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
        <!-- 轮播图 -->
        <div class="slide-show">
          <a-carousel arrows>
            <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1" autoplay>
              <a-icon type="left-circle" />
            </div>
            <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
              <a-icon type="right-circle" />
            </div>
            <div v-for="(item,index) in demos2" :key="index">
              <img :src="item.src" alt />
            </div>
          </a-carousel>
        </div>
        <!-- 内容导向+热门导向 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">个人作品</div>
            <div class="more">更多</div>
          </div>
          <ul class="content">
            <li v-for="(item,index) in demos" :key="index">
              <div class="img">
                <img :src="item.src" />
              </div>
              <div class="text">{{item.text}}</div>
            </li>
          </ul>
        </div>
        <div class="hot-content">
          <div class="title">
            <div class="text">封装组件</div>
            <div class="more">更多</div>
          </div>
          <div class="content"></div>
        </div>
        <div class="hot-content">
          <div class="title">
            <div class="text">在线工具</div>
            <div class="more">更多</div>
          </div>
          <div class="content"></div>
        </div>
        <div class="hot-content">
          <div class="title">
            <div class="text">热门事件随记</div>
            <div class="more">更多</div>
          </div>
          <ul class="content">
            <li v-for="(item,index) in demos" :key="index">
              <div class="img">
                <img :src="item.src" />
              </div>
              <div class="text">{{item.text}}</div>
            </li>
          </ul>
        </div>
        <!-- 百鸟集 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">百草集</div>
            <div class="more">更多</div>
          </div>
          <ul class="content">
            <li v-for="(item,index) in demos" :key="index">
              <div class="img">
                <img :src="item.src" />
              </div>
              <div class="text">{{item.text}}</div>
            </li>
          </ul>
        </div>
        <!-- 百虫集 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">百虫集</div>
            <div class="more">更多</div>
          </div>
          <ul class="content">
            <li v-for="(item,index) in demos" :key="index">
              <div class="img">
                <img :src="item.src" />
              </div>
              <div class="text">{{item.text}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="weather">天气</div>
        <div class="classify home-card">
          <div class="text">分类</div>
          <div class="card-content"></div>
        </div>
        <div class="love home-card">
          <div class="text">猜你喜欢</div>
          <div class="card-content"></div>
        </div>
        <div class="card1 home-card">
          <div class="text">新浪微博</div>
          <div class="card-content"></div>
        </div>
        <div class="card2 home-card">
          <div class="text">友情链接</div>
          <div class="card-content"></div>
        </div>
        <div class="tagCloud home-card">
          <div class="text">标签云</div>
          <div class="card-content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demos: [
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' },
        { src: '/xxyl.jpg', text: 'vue' }
      ],
      demos2: [
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' },
        { src: '/001.jpg', text: 'vue' }
      ]
    }
  },
  methods: {
    onSearch (value) {
      console.log('search', value)
    },
    ceshi () {
      console.log(this.demos)
    }
  },
  components: {
  },
  mounted () {
    this.ceshi()
  }
}
</script>

<style scoped lang="less">
.home {
  width: 1200px;
  margin: 0 auto;

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
      width: 75%;
      // 轮播图
      .slide-show {
        margin: 2px 50px;
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
      .hot-content {
        width: 100%;
        background-color: #fff;
        .title {
          color: #fff;
          background-color: #c0392b;
          border-top-right-radius: 6px;
          border-top-left-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.3rem 1.5rem;
          font-size: 1.1rem;
          margin-bottom: 10px;
          .text {
            cursor: pointer;
          }
          .more {
            cursor: pointer;
          }
        }
        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-flow: wrap;
          margin: 10px 5px 0 5px;
          padding-bottom: 10px;
          li {
            padding: 5px 8px;
            width: 25%;
            cursor: pointer;
            &:hover {
              background-color: #eee;
            }
            .img {
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
    .right {
      width: 100%;
      margin-left: 10px;
      // 右侧卡片通用
      .home-card {
        margin-bottom: 5px;
        padding: 5px 18px;
        // box-shadow: 1px 1px 2px #888888;
        background-color: #fff;
        .text {
          font-size: 1.1rem;
          border-bottom: 1px solid #90bba8;
          padding: 10px 0;
        }
        .card-content {
          height: 200px;
        }
      }
      // 右侧卡片单独
      .weather {
        box-shadow: 1px 1px 2px #888888;
        background-color: #321;
        height: 80px;
        margin-bottom: 5px;
      }
      .classify {
      }
      .love {
      }
      .card1 {
      }
      .card2 {
      }
      .tagCloud {
      }
    }
  }
}
</style>
