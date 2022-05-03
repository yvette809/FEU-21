const postModel = require('../models/postModel')


const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find()
        res.status(200).send(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const createPost = async (req, res) => {
    try {
        const { title, message, selectedFile, creator, tags } = req.body;

        const newPostMessage = new postModel({ title, message, selectedFile, creator, tags })
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



module.exports = { getPosts, createPost }