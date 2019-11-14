/*
 * @Description: 用户表
 * @Author: leo
 * @Date: 2019-09-16 14:27:38
 * @LastEditors: leo
 * @LastEditTime: 2019-11-12 13:59:30
 */
import { Application } from 'egg'
export default (app: Application) => {
  const { Schema } = app.mongoose

  const CategorySchema:any = new Schema({
    name: { type: String },
    sortNum: { type: Number, unique: true }
  }, {
    timestamps: true
  })

  return app.mongoose.model('Category', CategorySchema)
}
