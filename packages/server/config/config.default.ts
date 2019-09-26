/*
 * @Description: 
 * @Author: leo
 * @Date: 2019-09-16 14:05:10
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 17:08:32
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568613890715_4354';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.security = {
    csrf: {
      enable: false,
    }
  }
  // mongodb 服务配置
  const dbclient = {
    url: 'mongodb://127.0.0.1:27017/xc-blog',
    options: {
      autoReconnect: true,
      poolSize: 20
    }
  }
  // mongodb 配置
  config.mongoose = {
    client: dbclient
  }
  config.JWT_SECRET = 'xc123123'
  config.proxy = true
  config.maxProxyCount = 1
  config.onerror = {
    all (err, ctx) {
      // 统一处理错误信息
      ctx.body = {
        code: 1001,
        message: err.toString().replace('Error: Error: ', '')
      }
      ctx.status = 200
      // 统一错误日志记录
      ctx.logger.info(`统一错误日志：发现了错误${err}`)
    },
    accepts () {
      return 'json'
    }
  }
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
