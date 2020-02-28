import { AuthRouter } from './auth';
import Router from 'koa-router';

const AppRouter = new Router({
    prefix: '/api'
})

AppRouter.use(AuthRouter);

export { AppRouter };