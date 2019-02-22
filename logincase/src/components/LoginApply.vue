<template>
<div refs="test">
  <div >
    <div><text>{{icon}}</text></div>
    <div><text>{{weexname}}</text></div>
    <div class="myinfo" @click="hiddenselfbb"><text>{{getinfo}}</text></div>
    <div><text>{{nickname}}</text></div>
    <div><text>{{avator}}</text>
    <image style="width:99px;height:99px;" src="avator"/></div>
    <div><text>{{userinfo}}</text></div>
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
      // this.hiddenself('bbbbbbb')
      
      // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('hiddenLoginApply', 'aaaaaa')
    }
  },
  mounted () {
    const userinfo = this.$userinfo
    this.avator = userinfo.avator
    this.nickname = userinfo.realname
  }
}
</script>

<style scoped>
  .body {
    position: absolute;
    flex: 1;
    width: 750px;
    background-color: red;
    z-index: 1999;
    overflow: hidden;
  }
  .myinfo {
    width: 300px;
    height: 300px;
    background-color: green;
  }
</style>
