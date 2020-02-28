export interface AuthLoginRequestBody {
    username: string;
    password: string;
}

import Router from 'koa-router';
import consola from 'consola';

const router: Router = new Router();

router
    .get('/auth/login', (ctx, next) => {
        ctx.body = "Hey this should do a thing."
    })
    .post('/auth/login', (ctx, next) => {
        const { username, password } = (ctx.req as any).body;
        if (username === 'jling' && password === 'somepass') {
            consola.log("Got past the auth check!");
            ctx.status = 200;
            ctx.body = {
                success: true,
                responseMessage: "LOG_IN_SUCCESS"
            };
        }
        else {
            consola.log("Didn't get past the auth check!");
            ctx.status = 403;
            ctx.body = {
                success: false,
                responseMessage: "LOG_IN_FAILURE"
            };
        }
    });

export const AuthRouter = router.routes();