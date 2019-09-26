/*
 * @Description: 扩展工具
 * @Author: leo
 * @Date: 2019-09-16 19:13:04
 * @LastEditors: leo
 * @LastEditTime: 2019-09-19 16:59:06
 */
interface IParseLimit {
  page?: string | number;
  rows?: string | number;
  sort?: any;
}
export default {
  success (data: any = '', message: string = '成功') {
    return {
      code: 200,
      message,
      data
    }
  },
  parseLimit ({ page, rows, sort }: IParseLimit) {
    let obj: IParseLimit = {}
    rows = rows || 10
    page = page || 1
    if (sort) {
      obj.sort = sort
    }
    return {
      ...obj,
      limit: +rows,
      skip: (+page - 1) * +rows
    }
  }
}
