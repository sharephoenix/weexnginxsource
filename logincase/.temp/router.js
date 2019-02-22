import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import WXLogin from '@/components/WXLogin'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'WXLogin',
      component: WXLogin
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
