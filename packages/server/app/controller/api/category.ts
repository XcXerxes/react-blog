/*
 * @Description: 分类的api
 * @Author: leo
 * @Date: 2019-09-19 16:16:54
 * @LastEditors: leo
 * @LastEditTime: 2019-09-25 21:54:41
 */
import { Controller } from 'egg'

export default class Category extends Controller {
  /**
   * 创建列表
   */
  public async create () {
    try {
      const { ctx } = this
      const { name, sort, typeId } = ctx.request.body
      if (!name || !sort || !typeId) throw new Error('name or sort is required!')
      const result = await ctx.model.Category.create({ name, typeId, sortNum: sort})
      if (result) {
        return ctx.body = this.app.success('', '创建成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  /**
   * 获取列表
   */
  public async list () {
    try {
      const { ctx } = this
      const result = await ctx.model.Category.find({}, null, { sort: { sortNum: 1 } } )
      if (result) {
        return ctx.body = this.app.success(result, '获取成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  /**
   * 获取单个
   */
  public async getOne () {
    try {
      const { ctx } = this
      const { id } = ctx.params
      if (!id) {
        throw new Error('id is required!')
      }
      const result = await ctx.model.Category.findById(id)
      if (result) {
        return ctx.body = this.app.success(result, '获取成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
  /**
   * 更新单个
   */
  public async updateOne () {
    try {
      const { ctx } = this
      const { _id, name, sort } = ctx.request.body
      console.log(ctx.request.body)
      if (!_id || !name || !sort) {
        throw new Error('id and name and sort is required!')
      }
      const result = await ctx.model.Category.update({ _id }, {$set: { name, sortNum: sort }})
      if (result) {
        return ctx.body = this.app.success(result, '更新成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }

  /**
   * 删除单个
   */
  public async deleteOne () {
    try {
      const { ctx } = this
      const { id } = ctx.params
      if (!id) {
        throw new Error('id is required!')
      }
      const result = await ctx.model.Category.remove({ _id: id })
      if (result) {
        return ctx.body = this.app.success(result, '删除成功')
      }
    } catch (error) {
      throw new Error(error.toString())
    }
  }
}
