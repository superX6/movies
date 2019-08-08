// 判断是开发环境还是生产环境
const env = process.env.NODE_ENE === 'production' ? 'prod' : 'dev'

console.log(env, 'env')


module.exports = require(`./${env}.js`)