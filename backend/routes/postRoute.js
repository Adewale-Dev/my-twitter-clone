import express from "express";
import {
    commentOnPost,
    createPost,
    deletePost,
    getAllPost,
    getFollowingPosts,
    getlikedPosts,
    getUserPosts,
    likeUnlikePost
} from "../controllers/postController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get('/all', protectRoute, getAllPost);
router.get('/following', protectRoute, getFollowingPosts);
router.get('/likes/:id', protectRoute, getlikedPosts);
router.get('/user/:username', protectRoute, getUserPosts);
router.post('/create', protectRoute, createPost);
router.post('/like/:id', protectRoute, likeUnlikePost);
router.post('/comment/:id', protectRoute, commentOnPost);
router.delete('/delete/:id', protectRoute, deletePost);


export default router;