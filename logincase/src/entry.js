/* global Vue */
import UserModel from '@/models/UserModel'
// const meta = weex.requireModule('meta')
// meta.setViewport({
//   width: 640,
//   height: 1251
// })

Vue.userModel = Vue.prototype.$userInfo = UserModel

/* weex initialized here, please do not move this line */
const { router } = require('./router')
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
