const Koa = require('koa');
// const {decrypt} = require('./test/crack-douban');

const {connect, initSchemas,initAdmin} = require('./database/init')
const {resolve} = require('path')



//定义一个定时函数，休眠一个time后再执行
const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

const after = () => new Promise(resolve => {
  console.log('延迟打印')
  resolve()
})


;(async () => {
  await connect(); // 连接数据库
  initSchemas() // 创建数据库结构

  // await initAdmin() // 创建一个账户
  
    // require('./tasks/movie')
      // await sleep(5000)
    // require('./tasks/api')

  const app = new Koa();
  app.use(async ctx => {
    ctx.body = '电影服务';
  });
  
  app.listen(3000, ()=>{
    console.log('启动成功')
  });
})()

