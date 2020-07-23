import Vue from 'vue'
import { Button, Input, Carousel, Icon, Timeline, Menu, BackTop } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/reset.css'
Vue.prototype.$axios = axios
Vue.component(Button.name, Button)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Carousel.name, Carousel)
Vue.component(Icon.name, Icon)
// Vue.component(Timeline.name, Timeline)
Vue.use(Timeline)
Vue.use(Menu)
Vue.use(BackTop)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
