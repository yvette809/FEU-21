const postModel = require('../models/postModel')
const mongoose = require('mongoose')


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
const updatePost = async (req, res) => {
    // rename id to _id
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);


    const updatedPost = await postModel.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}

const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postModel.findByIdAndRemove(id)
    res.status(200).send('post deleted')


}

const likePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await postModel.findById(id)
    const updatedPost = await postModel.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.json(updatedPost)

}




module.exports = { getPosts, createPost, updatePost, deletePost, likePost }