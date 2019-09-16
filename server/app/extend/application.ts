/*
 * @Description: 扩展工具
 * @Author: leo
 * @Date: 2019-09-16 19:13:04
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 19:26:24
 */
export default {
  success (data: any = '', message: string = '成功') {
    return {
      code: 200,
      message,
      data
    }
  }
}
