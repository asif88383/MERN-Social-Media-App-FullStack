import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    desc: {type: String},
    image: {type: String},
    likes: [],
    comments: [],
},
{
    timestamps: true
});

const PostModel = mongoose.model("Post", postSchema);
export default PostModel;