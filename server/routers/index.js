const Router = require('koa-router')
const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')
const router = new Router()

router.get('/movies/all', async(ctx, next) => {
  const movies = await Movie.find({}).sort({
    'meta.createdAt': -1
  })

  ctx.body = {
    movies
  }
})

module.exports = router