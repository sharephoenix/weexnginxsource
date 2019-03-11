<template>
  <div id="container" class="container">
  <div style="position: relative; height: 100px; color: red; background-color: yellow;"><text> css style</text></div>
    <div class="top">
      <div class="avator"><img src=""/></div>
      <div class="register" @click="routerpush"><text class="registertext">授权登录</text></div>
      <div><text>{{ user }}</text></div>
    </div>
    <div class="content">
      <scroller class="scroller">
        <div v-for="item in list" v-bind:key="item.id">
          <div class="row"> <text> {{item}} </text> </div>
        </div>
        <text> {{ user }} </text>
      </scroller>
    </div>
    <LoginApply ref="test" class="registerPanel"></LoginApply>
    <LoginApply ref="loginApplyEl" class="registerPanel" :hiddenself="hiddenself" :loginstate="loginstate"></LoginApply>
  </div>
</template>

<script>
// import Vue from 'vue'
import LoginApply from '@/components/LoginApply'

const modal = weex.requireModule('modal')
const loginInfo = weex.requireModule('XHBLoginInfo')
const globalEvent = weex.requireModule('globalEvent')
const XHBScan = weex.requireModule('XHBScan')

export default {
  name: 'WXLogin',
  data () {
    return {
      user: {
        message: 'aaaa'
      },
      list: [
        {id: 0, title: 'title0', detail: 'this is detail'},
        {id: 1, title: 'title1', detail: 'this is detail'},
        {id: 2, title: 'title2', detail: 'this is detail'}]
    }
  },
  methods: {
    loginstate: function (islogin) {
      if (islogin) {
        console.log('更新用户信息')
        this.user = this.$userInfo.getLoginInfo()
      } else {
        console.log('退出登录')
      }
    },
    getLoginInfo: function () {
      this.user = {message: 'this is my message!!!'}
      if (loginInfo !== undefined) {
        loginInfo.getLocalUserInfo(function (params) {
          this.user = this.$userInfo.userModelTransform(params)
          modal.toast({ 'message': 'get geolocation' + params.name, 'duration': 2 })
        })
      }
      this.user = {message: this.$userInfo.getLoginid()}
    },
    routerpush: function () {
      modal.toast({ 'message': 'get geolocation', 'duration': 2 })
      this.$router.push('/userinfo')
    },
    toregister: function () {
      modal.toast({ 'message': 'to register', 'duration': 2 })
    },
    aaction: function () {
      console.log('aactionaaction')
    },
    showLoginApply: function () {
      const panel = this.$refs.loginApplyEl
      panel.vivible = true
      XHBScan.scanCodeInfo()
    },
    hiddenLoginApply: function () {
      const panel = this.$refs.loginApplyEl
      panel.vivible = false
    },
    hiddenself: function (params) {
      this.hiddenLoginApply()
      console.log(params + '@@@@@')
    },
    log: function () {
      console.log('aaaaaaaaaaaaajjjjjjj')
    }
  },
  components: {
    LoginApply
  },
  mounted () {
    // this.getLoginInfo()
    this.loginApplyWidth = this.$getConfig().env.deviceWidth
    this.loginApplyHeight = this.$getConfig().env.deviceHeight
    globalEvent.addEventListener('wxCallBack', (e) => {
      this.user = e
    })
  },
  unmounted () {
    const globalEvent = weex.requireModule('globalEvent')
    globalEvent.removeEventListener()
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    background-color: blue;
    flex: 1;
    color: red;
  }
  .top {
    background-color: #00B4FF;
    height: 200px;
  }
  .avator {
    margin-left: 25px;
    margin-top: 25px;
    width: 150px;
    height: 150px;
    background-color: red;
    border-radius: 75px;
  }
  .register {
    position: absolute;
    background-color: yellow;
    line-height: 150px;
    margin-left: 200px;
    margin-top: 75px;
    height: 40px;
    width: 420px;
    border-radius: 3px;
    /* transform: translate(250px, 1000px) scale(1.5); */
  }
  .registertext {
    lines: 1;
    color: #bb1515;
    font-size: 32px;
  }
  .content {
    background-color: #dddddd;
    width: 750px;
    flex: 1;
  }
  .scroller {
    position: absolute;
    margin: 0 0 0 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  .row {
    height: auto;
    margin-top: 5px;
    background-color: yellow;
  }
  .registerPanel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,0,0,0.5);;
  }
</style>
