<template>
  <div>
    <text> {{detail}} </text>
    <div class="buttoncls" @click="toRouterPop"> <text> to pop view </text></div>
  </div>
</template>

<script>
import UserModel from '@/models/UserModel'
const modal = weex.requireModule('modal')

export default {
  // name: 'UserInfo',
  data () {
    return {
      detail: 'this is my first detail'
    }
  },
  methods: {
    toRouterPop: function () {
      modal.toast({ 'message': this, 'duration': 2 })
      this.$router.go(-1)
    }
  },
  mounted () {
    this.detail = UserModel.getLoginid()
  }
}
</script>

<style scoped>
.buttoncls {
  width: 330px;
  height: 44px;
  background-color: red;
}
.body {
  background-color: yellow;
}
</style>
