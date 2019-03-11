import * as types from './mutation-types'
import * as cookie from 'utils/cookie'

// 登录
export const Login = ({ commit }, userInfo) => {
  return new Promise((resolve, reject) => {
    if (userInfo.username === '123' && userInfo.password === '123') {
      commit(types.SET_TOKEN, cookie.encrypt('11122233322211QQWWEE'))
      cookie.set('TOKEN', cookie.encrypt('11122233322211QQWWEE'))
      // this.$router.push({path: '/'})
      resolve(1)
    } else {
      resolve(0)
    }
  })
}

// 登出
export const loginOut = ({ commit }) => {
  return new Promise(resolve => {
    commit(types.SET_TOKEN, '')
    cookie.remove('TOKEN')
    resolve()
  })
}
