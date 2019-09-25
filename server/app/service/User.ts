/*
 * @Description: 用户服务
 * @Author: leo
 * @Date: 2019-09-16 16:26:42
 * @LastEditors: leo
 * @LastEditTime: 2019-09-19 16:15:46
 */
import { Service } from 'egg'
import * as jwt from 'jsonwebtoken'

/**
 * Test Service
 */
export default class User extends Service {
  // 验证是否存在token
  public async requireAuth () {
    // const { ctx } = this
    // const user = ctx.request.user
    // if (!user || !user._id) {
    //   return ctx.body = {
    //     code: 403,
    //     message: 'token不能为空'
    //   }
    // }
    // const me = await ctx.model.User.findById(user._id)
    // if (!me) {
    //   return ctx.body = {
    //     code: 403,
    //     message: 'token验证失败'
    //   }
    // }
    // return ctx.next
  }
  // 解析token
  public async decodeToken (token: string) {
    const { app } = this
    const arr = token.split(' ')
    if (arr[0] === 'Bearer') {
      return jwt.verify(arr[1], app.config.JWT_SECRET)
    }
    return null
  }
}
