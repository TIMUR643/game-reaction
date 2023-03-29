import Vue from 'vue'
import VueRouter from 'vue-router'
import PlayView from '../views/PlayView.vue'
import CheckView from '../views/CheckView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/play',
    name: 'play',
    component: PlayView
  },
  {
    path: '/check',
    name: 'check',
    component: CheckView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '*',
    redirect: '/play'
  }
]

const router = new VueRouter({
  routes
})

export default router
