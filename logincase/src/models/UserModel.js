
const users = {}
let loginid

const userModelTransform = function (params) {
  const {userId, token, avatar, school, realname, mobile, role, ujyToken, isTester} = params
  const user = {userId, token, avatar, school, realname, mobile, role, ujyToken, isTester}
  resetCache(user)
  return user
}

const getLoginUserInfo = function () {
  let loginuser
  let islogin
  if (loginid !== undefined) {
    loginuser = users[loginid]
    islogin = true
  } else {
    islogin = false
  }
  return {islogin: islogin, model: loginuser}
}

const resetCache = function (params) {
  const userId = params.userId
  if (userId !== undefined) {
    users[params.userId] = params
  }
}

const setLoginid = function (loginId) {
  loginid = loginId
}

const getLoginid = function () {
  return loginid
}

export default {userModelTransform, setLoginid, getLoginid, getLoginUserInfo, loginid}
