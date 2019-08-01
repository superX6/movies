const Koa = require('koa');
const app = new Koa();
const {connect} = require('./database/init')


;(async () => {
  await connect();
  app.use(async ctx => {
    ctx.body = '电影服务';
  });
  
  app.listen(3000, ()=>{
    console.log('启动成功')
  });
})()

