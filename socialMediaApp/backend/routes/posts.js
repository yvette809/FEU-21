const express = require('express')
const { getPosts, createPost } = require('../contollers/posts')

const postRouter = express.Router()


postRouter.get("/", getPosts)
postRouter.post("/", createPost)




module.exports = postRouter