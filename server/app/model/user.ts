/*
 * @Description: 用户表
 * @Author: leo
 * @Date: 2019-09-16 14:27:38
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 19:08:43
 */
import { hashSync, compareSync } from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { Application } from 'egg'
export default (app: Application) => {
  const { Schema } = app.mongoose

  const UserSchema:any = new Schema({
    username: { type: String },
    password: { type: String },
    is_use: { type: Number, default: 0 },
    role: { type: String, default: 'admin' },
    ip: { type: String }
  }, {
    timestamps: true
  })

  UserSchema.index({ username: -1 })
  UserSchema.pre('save', function (this: any, next: any) {
    if (this.isModified('password')) {
      this.password = this._hashPassword(this.password)
      return next()
    }
    return next()
  })
  UserSchema.methods = {
    // 密码加密
    _hashPassword (password: string) {
      return hashSync(password, 10)
    },
    // 验证密码
    authUser (password: string) {
      return compareSync(password, this.password)
    },
    // 创建token
    createToken () {
      return jwt.sign({
        _id: this._id
      }, app.config.JWT_SECRET)
    }
  }
  return app.mongoose.model('User', UserSchema)
}
