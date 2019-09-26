/*
 * @Description: 引入插件
 * @Author: leo
 * @Date: 2019-09-16 14:05:10
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 15:40:39
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus'
  }
};

export default plugin;
