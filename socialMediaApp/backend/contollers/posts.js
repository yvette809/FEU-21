const postModel = require('../models/postModel')


const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find()
        res.status(200).send(posts)
    } catch (error) {
        res.status(404).json({message:error.message})
    }

}

const createPost = async(req, res) => {
   try {
       const post = req.body
       const newPost = new postModel(post)
       await newPost.save()
       res.status(201).json(newPost)
      
   } catch (error) {
       res.status(409).json({message:error.message})
   }
}



module.exports = { getPosts, createPost }