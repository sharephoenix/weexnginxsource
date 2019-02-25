<template>
<div class="body" @click="hiddenselfbb">
  <!-- <div style="flex: 1; width: 750px;"></div> -->
  <div class="panel">
    <div><text>{{icon}}</text></div>
    <div><text>{{weexname}}</text></div>
    <div @click="testaction" class="myinfo"><text>{{getinfo}}</text></div>
    <div><text>{{nickname}}</text></div>
    <div><text>{{avator}}</text>
    <image style="width:99px;height:99px;margin-bottom: 40px;" src="avator"/></div>
    <div class="myinfo"><text>{{userinfo}}</text></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LoginApply',
  props: ['hiddenself'],
  data () {
    return {
      icon: '',
      weexname: '',
      getinfo: '获取你的昵称，头像，地区',
      nickname: 'nickname',
      avator: '头像',
      userinfo: '晓黑板个人信息'
    }
  },
  methods: {
    hiddenselfbb: function () {
      console.log('+++' + this.hiddenself + '------')
      this.hiddenself('bbbbbbb')
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      // this.$emit('hiddenLoginApply', 'aaaaaa')
    },
    testaction: function () {
      console.log('testactiontestactiontestaction')
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
    width: 750px;
    /* background: rgba(255,0,0,0.5); */
    background-color: rgba(255,0,0,0.5);
    z-index: 1999;
    overflow: hidden;
  }
  .panel {
    position: absolute;
    margin-bottom: 0px;
    bottom: 0px;
    widows: 750px;
  }
  .myinfo {
    width: 750px;
    background-color: green;
  }
</style>
