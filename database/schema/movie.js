const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {Mixed, ObjectId} = Schema.Types

const movieSchema = new Schema({
  doubanId: {
      unique: true,
      type: String
  },

  category: [{
      type: ObjectId,
      ref: 'Category'
  }],

  rate: Number,
  title: String,
  summary: String,
  video: String,
  poster: String,
  cover: String,

  rawTitle: String,
  movieTypes: [String],
  pubDate: Mixed,
  year: Number,

  videoKey: String,
  posterKey: String,
  coverKey: String,

  tags: [String],

  meta: {
      createdAt: {
          type: Date,
          default: Date.now()
      },
      updatedAt: {
          type: Date,
          default: Date.now()
      }
  }
})

// 增加一个中间件 这里的this 指本条数据 不能用箭头函数 会破坏上下文
movieSchema.pre('save', function(next){
  if(this.isNew){
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  }else{
    this.meta.updatedAt = Date.now()
  }

  next()

})

mongoose.model('Movie', movieSchema)
