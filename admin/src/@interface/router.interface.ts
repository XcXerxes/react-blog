/*
 * @Description: 全局的类型定义
 * @Author: leo
 * @Date: 2019-09-17 12:08:58
 * @LastEditors: leo
 * @LastEditTime: 2019-09-17 12:29:17
 */
import React from 'react'
export interface iRoute {
  icon?: string;
  name: string;
  routes?: iRoute[];
  path?: string;
  component?: any
}
