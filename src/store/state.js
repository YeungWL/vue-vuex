/*
  存放公共的变量 -- 全局使用
*/
import * as cookie from 'utils/cookie'

const state = {
  token: cookie.get('TOKEN')
}

export default state
