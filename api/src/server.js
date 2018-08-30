import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();
const PORT = 1300;

router.get('/health', async ctx => {
  ctx.status = 200;
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
