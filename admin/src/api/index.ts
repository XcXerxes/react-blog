/*
 * @Description: api目录结构
 * @Author: leo
 * @Date: 2019-09-18 20:33:50
 * @LastEditors: leo
 * @LastEditTime: 2019-09-18 21:03:51
 */
import Request from './Request'

export default {
  // 登录接口
  signin (params: any) {
    return Request.post(params, '/auth/signin')
  }
}
