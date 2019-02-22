<template>
  <div>
    <div class="top">
      <img class="avator" src="user.avatar"/>
    </div>
    <div class="content"></div>
    <!--<text class="message">show your login user info:::</text>-->
    <!--<text> {{user}} </text>-->
    <!--<button class="buttoncls" @click="getLoginInfo"> <text>tologin</text></button>-->
    <!--<button class="buttoncls" @click="routerpush"> <text>tologin</text></button>-->
  </div>
</template>

<script>

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
      }
    }
  },
  methods: {
    getLoginInfo: function () {
      console.log('++++' + this.$userInfo)
      console.log('++++' + this.$router)
      this.user = {message: 'this is my message!!!'}
      if (loginInfo !== undefined) {
        loginInfo.getLocalUserInfo()
        const _this = this
        loginInfo.getLocalUserInfo(function (params) {
          _this.user = params
          modal.toast({ 'message': 'get geolocation' + params.name, 'duration': 2 })
        })
      }
      this.$userInfo.setLoginid('this is my id')
      console.log(this.$userInfo)
      this.user = {message: this.$userInfo.getLoginid()}
    },
    routerpush: function () {
      modal.toast({ 'message': 'get geolocation', 'duration': 2 })
      this.$router.push('/userinfo')
    }
  },
  mounted () {
    modal.toast({ 'message': 'mounted' + this.$userInfo.getLoginid(), 'duration': 2 })
    this.user = {message: this.$userInfo.getLoginid()}
  }
}
</script>

<style scoped>
  .top {
    background-color: #00B4FF;
    height: 100px;
  }
  .avator {
    left: 25px;
    top: 25px;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 25px;
  }
  .content {
    background-color: #dddddd;
    flex: 1;
  }
.buttoncls {
  width: 330px;
  height: 330px;
  background-color: red;
}
</style>
