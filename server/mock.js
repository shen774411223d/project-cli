const router = require('koa-router')();

router.get('/api/test', async(ctx, next) => {
  ctx.body = {
    status: 200,
    data: {}
  }
})

module.exports = router.routes()