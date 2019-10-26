import { Controller } from 'egg'

export default class Uploader extends Controller {
  async upload () {
    const { ctx } = this
    const filename = await this.service.multipart.upload()
    return ctx.body = this.app.success(filename, '上传成功')
  }
}
