import * as fs from 'fs'
import * as path from 'path'
import { Service } from 'egg'
import { pump } from 'mz-modules'

export default class Multipart extends Service {
  async upload () {
    const { ctx, config } = this
    const stream = await ctx.getFileStream()
    console.log('-----------stream', stream)
    // const filename = (stream.fields.name ? encodeURIComponent(stream.fields.name) : '') + path.extname(stream.filename).toLowerCase()
    // const filename = Date.now() + path.extname(stream.filename).toLowerCase()
    const target = path.join(config.baseDir, 'app/public', stream.filename)
    const writeStream = fs.createWriteStream(target)
    await pump(stream, writeStream)
    return stream.filename
  }
}
