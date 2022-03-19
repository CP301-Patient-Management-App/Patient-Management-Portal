import express from 'express';
import { createPost, getAllPosts, getPost, registerUser, loginUser } from '../controller/post-controller.js';


const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);
router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);


export default router; 
