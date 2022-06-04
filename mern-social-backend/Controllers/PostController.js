import PostModel from "../Models/postModal";
import mongoose from "mongoose";
import UserModal from "../Models/userModal";

// create new Post  
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);

    try {
        await newPost.save();;
        res.status(200).json("Post created successfully");
    }catch(err){
        res.status(500).json(`Error creating post: ${err}`);
    }
}

// Get a post 
export const getPost = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await PostModel.findById(postId);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(`Error getting post: ${err}`);
    }
}

// Update a post 
export const updastePost = async(req, res) => {
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);
        if(post.userId === userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("Post updated successfully");
        }else{
            res.status(401).json("Unauthorized");
        }
    }catch(err){
        res.status(500).json(`Error updating post: ${err}`);
    }
}

// Delete a post
export const deletePost = async(req, res) => {
    const id = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(id);
        if(post.userId === userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted successfully");
        } else {
            res.status(401).json("Unauthorized");
        }
    }catch(err){
        res.status(500).json(`Error deleting post: ${err}`);
    }
}

// like/ unlike a post
export const likePost = async(req, res) => {
    const id = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(id);
        if(!post.likes.includes(userId)){
            await post.updateOne({$push: {likes: userId}});
            res.status(200).json("Post liked successfully");
        }else{
            await post.updateOne({$pull: {likes: userId}});
            res.status(200).json("Post unliked successfully");
        }
    }catch(err){
        res.status(500).json(`Error liking post: ${err}`);
    }
}

// Get Timeline posts 
export const getTimelinePosts = async(req, res) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({userId: userId});
        const followingPosts = await PostModel.aggregate([
            {
                $match:{
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup:{
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);

        res.status(200).json(
          currentUserPosts
            .concat(...followingPosts[0].followingPosts)
            .sort((a, b) => b.createdAt - a.createdAt)
        );
    }catch(err){
        res.status(500).json(`Error getting timeline posts: ${err}`);
    }
}

