/*
 * @Description: 路由配置页面
 * @Author: leo
 * @Date: 2019-09-16 20:37:18
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 20:44:10
 */
import loadable from 'utils/loadable'

// 管理控制台
const Article = loadable(() => import('views/article/Article'))

const RouterConfig: any = [
  {
    name: '文章管理',
    path: '/article',
    component: Article,
    icon: 'control',
    routes: []
  }
]
export default RouterConfig
