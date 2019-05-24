import * as types from './mutation-types'
import * as cookie from 'utils/cookie'

// 登录
export const Login = ({ commit, state }, userInfo) => {
  return new Promise((resolve, reject) => {
    if (userInfo.username === '123' && userInfo.password === '123') {
      console.log(commit, state)
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
export const loginOut = ({commit, state}) => {
  return new Promise(resolve => {
    console.log(state)
    commit(types.SET_TOKEN, '')
    cookie.remove('TOKEN')
    resolve()
  })
}
