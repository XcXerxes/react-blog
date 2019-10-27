/*
 * @Description: 用户表
 * @Author: leo
 * @Date: 2019-09-16 14:27:38
 * @LastEditors: leo
 * @LastEditTime: 2019-10-27 16:20:33
 */
import { Application } from 'egg'
export default (app: Application) => {
  const { Schema } = app.mongoose

  const ArticleSchema:any = new Schema({
    name: { type: String, unique: true },
    author: { type: String },
    caption: { type: String },
    thumbnail: { type: String },
    cateId: { type: Number },
    content: { type: String },
    visit: { type: Number, default: 0 },
    like: { type: Number, default: 0 }
  }, {
    timestamps: true
  })
  ArticleSchema.index({ name: -1 })
  return app.mongoose.model('Article', ArticleSchema)
}
