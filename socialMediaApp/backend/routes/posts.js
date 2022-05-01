const express = require('express')
const getPosts =require('../contollers/posts')

const postRouter = express.Router()


postRouter.get("/", getPosts)




module.exports= postRouter