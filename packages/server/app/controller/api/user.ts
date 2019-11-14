/*
 * @Description: 用户api
 * @Author: leo
 * @Date: 2019-09-16 14:43:45
 * @LastEditors: leo
 * @LastEditTime: 2019-11-11 16:08:21
 */
import { Controller } from 'egg'

export default class User extends Controller {
  public async signin () {
    try {
      const { ctx } = this
      // await ctx.model.User.create({
      //   username: 'admin',
      //   password: '123456',
      //   ip: ctx.ip
      // })
      const { username, password } = ctx.request.body
      if (!username || !password) {
        throw new Error('用户名或密码不能为空!')
      }
      const result = await ctx.model.User.findOne({ username })
      if (!result) {
        throw new Error('用户名或密码错误')
      } else {
        if (!result.authUser(password)) {
          throw new Error('用户名或密码错误')
        }
      }
      return ctx.body = this.app.success(result.createToken(), '登录成功')
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  public async list () {
    try {
      const { ctx } = this
      const result = await ctx.model.User.find({}, 'username')
      return ctx.body = this.app.success(result, '')
    } catch (error) {
      throw new Error(error.toString())
    }
  }
}
