/*
 * @Description: 配置文件---生产模式
 * @Author: leo
 * @Date: 2019-09-16 14:05:10
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 14:20:29
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.cors = {}
  return config;
};
