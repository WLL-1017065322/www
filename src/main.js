import Vue from 'vue'
import { Button, Input, Carousel, Icon } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
Vue.component(Button.name, Button)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Carousel.name, Carousel)
Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
