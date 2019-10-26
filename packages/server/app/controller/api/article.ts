/*
 * @Description: 文章控制器
 * @Author: leo
 * @Date: 2019-09-25 23:04:00
 * @LastEditors: leo
 * @LastEditTime: 2019-09-25 23:09:17
 */
import { Controller } from 'egg'

export default class Article extends Controller {
  /**
   * 发布文章
   */
  async create () {
    try {
      const { ctx } = this
      const { name, author, caption, thumbnail, content } = ctx.request.body
      if (!name || !author || !caption || !thumbnail || !content) {
        throw new Error('name and author and caption and thumbnail and content requied!')
      }
      const result = await ctx.model.Article.create({ name, author, caption, thumbnail, content })
      if (result) {
        return ctx.body = this.app.success('', '创建成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  /**
   * 列表
   */
  async list () {
    try {
      const { ctx } = this
      const { page, rows } = ctx.request.query
      const count = await ctx.model.Article.find({}).count()
      const result = await ctx.model.Article.find({}, null, this.app.parseLimit({page, rows}))
      return ctx.body = this.app.success({count, list: result}, '获取成功')
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  async one () {
    try {
      const { ctx } = this
      const { id } = ctx.params
      if (!id) {
        throw new Error('id is required!')
      }
      const result = await ctx.model.Article.findById(id)
      if (result) {
        return ctx.body = this.app.success(result, '获取成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  async deleteOne () {
    try {
      const { ctx } = this
      const { id } = ctx.params
      if (!id) {
        throw new Error('id is required!')
      }
      const result = await ctx.model.Article.remove({ _id: id })
      if (result) {
        return ctx.body = this.app.success('', '删除成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
}
