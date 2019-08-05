const Koa = require('koa');
// const {decrypt} = require('./test/crack-douban');
const R = require('ramda')


const {connect, initSchemas,initAdmin} = require('./database/init')
const {resolve} = require('path')



//定义一个定时函数，休眠一个time后再执行
const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})



// 定义一个中间件数据 用ramda 方法将Router 和前端打包的parcel 目录下的内容 全部加载进去
// common 包含body 解析 session 等 router 为路由 parcel 为内容打包到dist 目录

// const MIDDLEWARES = ['common', 'router', 'parcel']

// map 对象的所言属性一次执行某个函数
// compose 将多个函数合并为一个函数 从右到左执行
// forEachObjIndexed: 每个属性一次为执行给定函数 给定函数的参数分别是属性值 和属性名

// const useMiddlewares = (app) => {
//   R.map(
//     R.compose(
//       R.forEachObjIndexed(
//         initWith => initWith(app)
//       ),
//       require,
//       name => resolve(__dirname, `./midllerwares/${name}`)
//     )
//   )(MIDDLEWARES)
// }


;(async () => {
  await connect(); // 连接数据库
  initSchemas() // 创建数据库结构

  await initAdmin() // 创建一个账户
  
    // require('./tasks/movie')
      // await sleep(5000)
        // require('./tasks/trailer')
    // require('./tasks/api')
    // await sleep(5000)
    // console.log('99')
    // require('./tasks/qiniu')

  const app = new Koa();
const router = require('./routers')

  app.use(router.routes())

  // await useMiddlewares(app)
  app.use(async ctx => {
    ctx.body = '电影服务';
  });


  
  app.listen(3000, ()=>{
    console.log('启动成功')
  });
})()

