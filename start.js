// require('babel-core/register')() //运行一个es6并不支持的，需要运行时
// require('babel-polyfill')

require("@babel/register")
require('@babel/polyfill')


require('./server/index.js')
// require('./test/demo') 