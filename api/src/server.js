import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import fs from 'fs';

const app = new Koa();
app.use(serve(__dirname + '/../ui/'));
const router = new Router();
const PORT = 1300;

console.log(__filename);
console.log(__dirname);

fs.readdir(__dirname + '../../..', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

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
