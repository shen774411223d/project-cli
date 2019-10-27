const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const index = require('./mock.js');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin','*');
  await next();
});
console.log('koa start');
app.use(bodyparser());
app.use(index);

app.listen(4001);