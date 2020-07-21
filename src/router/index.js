import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
const Board = () => import(/* webpackChunkName: "about" */ '../views/Board.vue')
const Tools = () => import(/* webpackChunkName: "about" */ '../views/Tools.vue')
const Log = () => import(/* webpackChunkName: "about" */ '../views/Log.vue')
const Demo = () => import(/* webpackChunkName: "about" */ '../views/Demo.vue')
const Component = () => import(/* webpackChunkName: "Component" */ '../views/Component.vue')
const Hotevent = () => import(/* webpackChunkName: "about" */ '../views/Hotevent.vue')
const Chong = () => import(/* webpackChunkName: "about" */ '../views/Chong.vue')
const Grass = () => import(/* webpackChunkName: "about" */ '../views/Grass.vue')

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/component',
    name: 'Component',
    component: Component
  },
  {
    path: '/hotevent',
    name: 'Hotevent',
    component: Hotevent
  },
  {
    path: '/chong',
    name: 'Chong',
    component: Chong
  },
  {
    path: '/grass',
    name: 'Grass',
    component: Grass
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
