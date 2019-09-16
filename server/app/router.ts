/*
 * @Description: 路由接口
 * @Author: leo
 * @Date: 2019-09-16 14:05:10
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 15:43:40
 */
import { Application } from 'egg';

export default (app: Application) => {
  // 命名空间
  const apiRouter = app.router.namespace('/api')

  const { controller, router } = app;
  const { user } = controller.api

  router.get('/', controller.home.index);
  apiRouter.post('/signin', user.signin)
};
