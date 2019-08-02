// 判断是开发环境还是生产环境
const env = process.env.NODE_ENE === 'production' ? 'prod' : 'dev'

module.exports = require(`./${env}.js`)