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

