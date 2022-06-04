import express from "express";
import { createPost } from "../Controllers/PostController";

const router = express.Router();

router.post("/", createPost)

export default router;