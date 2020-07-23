<template>
  <div class="home">
    <div class="top">
      <div class="logo">along</div>
      <div class="search">
        <a-input-search placeholder="输入关键词" size="default" @search="onSearch">
          <a-button slot="enterButton">搜索</a-button>
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
          <!-- <div class="notice">
            <div class="title">公告</div>
            <div class="content"></div>
          </div>-->
        </div>
        <!-- 内容导向+热门导向 -->
        <!-- 个人作品 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">个人作品</div>
            <div class="more">更多</div>
          </div>
          <ul class="picture-content">
            <li v-for="(item,index) in demos" :key="index">
              <div class="img">
                <img :src="item.src" />
              </div>
              <div class="text">{{item.text}}</div>
            </li>
          </ul>
        </div>
        <!-- 封装组件 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">封装组件</div>
            <div class="more">更多</div>
          </div>
          <div class="title-content">
            <li v-for="(item,index) in demo3" :key="index">
              <div class="content-title">{{item.title}}</div>
              <div class="time">{{item.time}}</div>
            </li>
          </div>
        </div>
        <!-- 在线工具 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">在线工具</div>
            <div class="more">更多</div>
          </div>
          <div class="title-content">
            <li v-for="(item,index) in demo3" :key="index">
              <div class="content-title">{{item.title}}</div>
              <div class="time">{{item.time}}</div>
            </li>
          </div>
        </div>
        <!-- 热门事件随记 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">热门事件随记</div>
            <div class="more">更多</div>
          </div>
          <ul class="title-content">
            <li v-for="(item,index) in demo3" :key="index">
              <div class="content-title">{{item.title}}</div>
              <div class="time">{{item.time}}</div>
            </li>
          </ul>
        </div>
        <!-- 百鸟集 -->
        <div class="hot-content">
          <div class="title">
            <div class="text">百草集</div>
            <div class="more">更多</div>
          </div>
          <ul class="picture-content">
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
          <ul class="picture-content">
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
        <div class="weather">
          <!-- 和风天气插件 -->
          <div id="he-plugin-simple"></div>
        </div>
        <div class="notice home-card">
          <div class="text">公告</div>
          <div class="card-content">
            <p>
              ( ＾∀＾）／欢迎＼( ＾∀＾）
            </p>
          </div>
        </div>
        <div class="classify home-card">
          <div class="text">分类</div>
          <div class="card-content"></div>
        </div>
        <div class="love home-card">
          <div class="text">猜你喜欢</div>
          <div class="card-content"></div>
        </div>
        <!-- <div class="card1 home-card">
          <div class="text">新浪微博</div>
          <div class="card-content"></div>
        </div>-->
        <div class="blogrolls home-card">
          <div class="text">友情链接</div>
          <ul class="card-content">
            <li v-for="(item,index) in blogrolls" :key="index">
              <a :href="item.src">{{item.text}}</a>
            </li>
          </ul>
        </div>
        <div class="tagCloud home-card">
          <div class="text">标签云</div>
          <div class="card-content"></div>
        </div>
        <div class="website-message home-card">
          <div class="text">网站信息</div>
          <ul class="card-content">
            <li v-for="(item,index) in websiteMessages" :key="index">
              <p :href="item.src">{{item.title}} : {{item.content}}</p>
            </li>
          </ul>
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
      ],
      demo3: [
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        },
        {
          title: 'Chrome 80正式发布下载：强化HTTPS 禁用FTP 通知消息更静默',
          time: '12/04'
        }
      ],
      blogrolls: [
        { src: 'https://www.baidu.com', text: '百度' },
        { src: 'https://www.baidu.com', text: '网络营销推广' },
        { src: 'https://www.baidu.com', text: '百度' },
        { src: 'https://www.baidu.com', text: '网络营销推广' },
        { src: 'https://www.baidu.com', text: '网络营销推广' },
        { src: 'https://www.baidu.com', text: '百度' }
      ],
      websiteMessages: [
        { title: '建站时间', content: '2011年01月12日', src: 'https://www.baidu.com' },
        { title: '统计数据', content: '百度统计' },
        { title: '网站程序', content: 'vue+node', src: 'https://www.baidu.com' },
        { title: '博客模板', content: 'xxxx', src: 'https://www.baidu.com' },
        { title: '文章统计', content: 'cxxxx' },
        { title: '服务器', content: 'xxxx', src: 'https://www.baidu.com' },
        { title: 'ip地址', content: 'xxxx' },
        { title: '最后更新', content: '2020年07月22日' }

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
  padding-bottom: 15px;
  .top {
    width: 100%;
    height: 90px;
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
    width: 100%;
    display: flex;
    .left {
      width: 70%;
      // 轮播图
      .slide-show {
        margin: 2px 2px;
        .ant-carousel {
          // width:70%;
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
        padding-bottom: 5px;
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
        .picture-content {
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
              background-color: #3498db;
            }
            .img {
              img {
                width: 100%;
              }
            }
          }
        }
        .title-content {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 20px;
            font-size: 14px;

            .content-title:hover {
              cursor: pointer;
              text-decoration: underline;
              color: #3498db;
            }
          }
        }
      }
    }
    .right {
      width: 30%;
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
          position: relative;
          &::after {
            content: ' ';
            width: 50px;
            height: 2px;
            background-color: #7f8c8d;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: 1s;
          }
          &:hover::after {
            width: 100px;
          }
        }
        .card-content {
          min-height: 100px;
        }
      }
      // 右侧卡片单独
      // 天气
      .weather {
        box-shadow: 1px 1px 2px #888888;
        // height: 80px;
        margin-bottom: 5px;
        border-radius: 5px;
        #he-plugin-simple {
          width: 100%;
          // height: 80px;
        }
      }
      .notice {
        .card-content {
          p {
            padding: 20px;
            font-size: .9rem;
          }
        }
      }
      .classify {
      }
      .love {
      }
      .card1 {
      }
      .blogrolls {
        ul {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          color: #000;
          font-size: 0.9rem;
          padding: 10px 0;
          li {
            width: 100%;
            padding: 5px 0;
            &:hover {
              background-color: #eee;
            }
            a {
              text-decoration: none;
              color: #666;
            }
          }
        }
      }
      .tagCloud {
      }
      // 网站信息
      .website-message {
        ul {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          color: #000;
          font-size: 0.9rem;
          padding: 10px 0;
          li {
            width: 100%;
            padding: 5px 0;
            p {
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>
