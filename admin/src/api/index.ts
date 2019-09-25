/*
 * @Description: api目录结构
 * @Author: leo
 * @Date: 2019-09-18 20:33:50
 * @LastEditors: leo
 * @LastEditTime: 2019-09-25 19:04:53
 */
import Request from './Request'

export default {
  // 登录接口
  signin (params: any) {
    return Request.post(params, '/auth/signin')
  },
  // 创建分类
  createCate (params: any) {
    return Request.post(params, '/category/create')
  },
  // 获取分类列表
  cateList (params: any) {
    return Request.get(params, '/category/list')
  },
  // 单条分类
  cateItemById (params: any) {
    return Request.get({}, `/category/${params.id}`)
  },
  // 更新分类
  updateCate (params: any) {
    return Request.post(params, '/category/update')
  },
  // 删除分类
  deleteCateById (params: any) {
    return Request.get({}, `/category/delete/${params.id}`)
  }
}
