<template>
<div class="body" @click="hideself" v-if="vivible">
  <!-- <div style="flex: 1; width: 750px;"></div> -->
  <transition @after-enter="enter">
    <div ref="panel" class="panel" v-if="vivible" @click="nothingaciton">
    <div><text>{{icon}}</text></div>
    <div><text>{{weexname}}</text></div>
    <div class="myinfo"><text>{{getinfo}}</text></div>
    <div><text>{{nickname}}</text></div>
    <div><text>{{avator}}</text>
    <image style="width:99px;height:99px;margin-bottom: 40px;" src="avator"/></div>
    <wxc-button text="确认登录"
              @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    <div class="myinfo"><text>{{userinfo}}</text></div>
  </div>
  </transition>
</div>
</template>

<script>
import { WxcButton } from 'weex-ui'
const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal')
const loginInfo = weex.requireModule('XHBLoginInfo')
var storage = weex.requireModule('storage')

export default {
  name: 'LoginApply',
  props: ['hiddenself', 'loginstate'],
  components: { WxcButton },
  data () {
    return {
      icon: '',
      weexname: '',
      getinfo: '获取你的昵称，头像，地区',
      nickname: 'nickname',
      avator: '头像',
      userinfo: '晓黑板个人信息',
      vivible: false
    }
  },
  methods: {
    wxcButtonClicked (e) {
      modal.toast({message: '获取用户信息 click'})
      loginInfo.getLocalUserInfo((params) => {
        // 获取登录信息，并修改标记
        modal.toast({message: '获取用户信息 call back' + this.$userinfo})
        const userinfo = this.$userinfo.userModelTransform(params)
        if (userinfo.userId !== undefined) {
          userinfo.setLoginid(userinfo.userId)
          storage.setItem('islogin', true, event => {
            console.log('login success!!!s')
            this.loginstate(true)
            this.hiddenself()
            modal.toast({ message: '获取用户信息 success' })
          })
        } else {
          modal.toast({ message: '获取用户信息 fail' })
        }
      })
    },
    showself: function () {
      const _visible = !this.vivible
      if (_visible === false) {
        this.hiddenself()
      } else {
        this.vivible = _visible
      }
    },
    hideself: function () {
      const ref1 = this.$refs.panel
      animation.transition(ref1, {
        styles: {
          transform: 'translate(0px, 300px)'
        },
        duration: 800,
        timingFunction: 'ease',
        needLayout: false,
        delay: 3
      }, () => {
        this.vivible = false
        modal.toast({ message: 'animation finished.' })
      })
    },
    enter: function (el, done) {
      console.log('aaaaa')
      const ref1 = this.$refs.panel
      animation.transition(ref1, {
        styles: {
          transform: 'translate(0px, 0px)'
        },
        duration: 800,
        timingFunction: 'ease',
        needLayout: false,
        delay: 3
      }, function () {
        modal.toast({ message: 'animation finished.' })
      })
    },
    nothingaciton: function () {
      console.log('nothing')
    },
    hiddenselfbb: function () {
      console.log('+++' + this.hiddenself + '------')
      this.hiddenself('bbbbbbb')
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      // this.$emit('hiddenLoginApply', 'aaaaaa')
    }
  },
  mounted () {
    const userinfo = this.$userinfo
    if (userinfo !== undefined) {
      console.log(userinfo)
      this.avator = userinfo.avator
      this.nickname = userinfo.realname
    }
  }
}
</script>

<style scoped>
  .body {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,0,0,0.5);;
  }
  .panel {
    position: absolute;
    margin-bottom: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: blue;
    /* transform: translate(0px, 300px) scale(1); */
  }
  .myinfo {
    width: 750px;
    flex: 1;
    background-color: green;
  }
</style>
