import Vue from 'vue'
import Router from 'vue-router'
import MainLayOut from '../components/MainLayOut/Main'
import Index from '../modules/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/main',
      name: 'MainLayOut',
      component: MainLayOut
    }
  ]
})
