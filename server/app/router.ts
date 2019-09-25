/*
 * @Description: 路由接口
 * @Author: leo
 * @Date: 2019-09-16 14:05:10
 * @LastEditors: leo
 * @LastEditTime: 2019-09-25 15:39:46
 */
import { Application } from 'egg';

export default (app: Application) => {
  // 命名空间
  const apiRouter = app.router.namespace('/api')

  const authrozated = app.middleware.authToken()

  const { controller, router } = app;
  const { user, category } = controller.api

  router.get('/', controller.home.index);
  apiRouter.post('/user/signin', user.signin)
  apiRouter.get('/user/list', authrozated, user.list)

  // 分类
  apiRouter.get('/category/list', category.list)
  apiRouter.post('/category/create', category.create)
  apiRouter.get('/category/:id', category.getOne)
  apiRouter.post('/category/update', category.updateOne)
  apiRouter.get('/category/delete/:id', category.deleteOne)
};
