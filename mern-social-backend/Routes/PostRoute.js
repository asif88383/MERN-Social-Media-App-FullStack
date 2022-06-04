import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController";

const router = express.Router();

router.post("/", createPost)
router.get("/:id", getPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.post("/:id/like", likePost)
router.get("/:id/timeline", getTimelinePosts)

export default router;