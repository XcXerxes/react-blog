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
    } catch (error) {
      
    }
  }
}