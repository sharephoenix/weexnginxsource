<template>
  <div id="container">
    <div class="top">
      <div class="avator"><img src=""/></div>
      <div class="register" @click="showLoginApply"><text class="registertext">授权登录</text></div>
    </div>
    <div class="content">
      <scroller class="scroller">
        <div v-for="item in list" v-bind:key="item.title">
          <div class="row"> <text> {{item}} </text> </div>
        </div>
      </scroller>
    </div>
    <!-- <LoginApply ref="test" class="registerPanel"></LoginApply> -->
    <LoginApply ref="loginApplyEl" class="registerPanel" :hiddenself="hiddenself" v-if="visibleapply"></LoginApply>
  </div>
</template>

<script>
// import Vue from 'vue'
import LoginApply from '@/components/LoginApply'
// const animation = weex.requireModule('animation')

const modal = weex.requireModule('modal')
const loginInfo = weex.requireModule('XHBLoginInfo')
const globalEvent = weex.requireModule('globalEvent')

globalEvent.addEventListener('viewappear', function (e) {
  modal.toast({ 'message': 'viewappear' + e, 'duration': 2 })
})

globalEvent.addEventListener('viewdisappear', function (e) {
  modal.toast({ 'message': 'viewdisappear' + e, 'duration': 2 })
})

export default {
  name: 'WXLogin',
  data () {
    return {
      user: {
        message: ''
      },
      visibleapply: true,
      list: [
        {title: 'title0', detail: 'this is detail'},
        {title: 'title1', detail: 'this is detail'},
        {title: 'title2', detail: 'this is detail'},
        {title: 'title1', detail: 'this is detail'},
        {title: 'title2', detail: 'this is detail'},
        {title: 'title1', detail: 'this is detail'},
        {title: 'title2', detail: 'this is detail'},
        {title: 'title3', detail: 'this is detail'}
      ]
    }
  },
  methods: {
    getLoginInfo: function () {
      this.user = {message: 'this is my message!!!'}
      if (loginInfo !== undefined) {
        const _this = this
        loginInfo.getLocalUserInfo(function (params) {
          _this.user = this.$userInfo.userModelTransform(params)
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
      this.visibleapply = true
    },
    hiddenLoginApply: function () {
      this.visibleapply = false
    },
    hiddenself: function (params) {
      this.hiddenLoginApply()
      console.log(params + '@@@@@')
    }
  },
  components: {
    LoginApply
  },
  mounted () {
    this.getLoginInfo()
    this.loginApplyWidth = this.$getConfig().env.deviceWidth
    this.loginApplyHeight = this.$getConfig().env.deviceHeight
  }
}
</script>

<style scoped>
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
    display: inline-block;
    position: absolute;
    background-color: yellow;
    line-height: 150px;
    margin-left: 200px;
    margin-top: 75px;
    height: 50px;
    width: 200px;
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
    flex: 1;
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
