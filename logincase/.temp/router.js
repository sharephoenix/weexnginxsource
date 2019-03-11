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
      redirect: '/login'
    },
    {
      path: '/login',
      component: WXLogin
    },
    {
      path: '/userinfo',
      component: UserInfo
    }
  ]
})
