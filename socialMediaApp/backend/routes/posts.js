const express = require('express')
const { getPosts, createPost, updatePost, deletePost ,likePost} = require('../contollers/posts')

const postRouter = express.Router()


postRouter.get("/", getPosts)
postRouter.post("/", createPost)
postRouter.patch("/:id", updatePost)
postRouter.delete("/:id", deletePost)
postRouter.patch("/:id/likePost", likePost)




module.exports = postRouter