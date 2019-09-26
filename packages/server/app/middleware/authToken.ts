/*
 * @Description: token验证中间件
 * @Author: leo
 * @Date: 2019-09-19 15:20:06
 * @LastEditors: leo
 * @LastEditTime: 2019-09-19 16:15:56
 */
import { Context } from 'egg'
export default () => {
  return async function (ctx: Context, next) {
    try {
      const { authorization } = ctx.request.headers
      if (!authorization) {
        return ctx.body = {
          code: 401,
          message: '用户未登录,请重新登录',
          data: ''
        }
      }
      const userToken:any = await ctx.service.user.decodeToken(authorization)
      if (userToken._id) {
        const result = await ctx.model.User.findById(userToken._id)
        if (result) {
          ctx.user = userToken._id
          return next()
        }
      }
      return ctx.body = {
        code: 403,
        message: '用户登录权限失效, 请重新登录',
        data: ''
      }
    } catch (error) {
      return ctx.body = {
        code: 403,
        message: '用户登录权限失效, 请重新登录',
        data: ''
      }
    }
  }
}
