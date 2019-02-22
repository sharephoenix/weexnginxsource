<template>
  <div>
    <div class="top">
      <div class="avator"><img src="user.avatar"/></div>
      <div class="register" @click="toregister"><text class="registertext">授权登录</text></div>
    </div>
    <div class="content">
    <div v-for="item in list" v-bind:key="item.title">
      <div class="row"> <text> {{item}} </text> </div>
    </div>
    </div>
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
      },
      list: [
        {title: 'title', detail: 'this is detail'},
        {title: 'title', detail: 'this is detail'},
        {title: 'title', detail: 'this is detail'},
        {title: 'title', detail: 'this is detail'}
      ]
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
    },
    toregister: function () {
      modal.toast({ 'message': 'to register', 'duration': 2 })
    },
    aaction: function () {
      console.log('aactionaaction')
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
    height: 50px;
    width: 200px;
    border-radius: 3px;
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
</style>
