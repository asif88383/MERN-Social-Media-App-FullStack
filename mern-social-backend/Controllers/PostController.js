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

