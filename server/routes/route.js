import express from 'express';
import { createPost,updatePost, getAllPosts,deletePost, getPost, registerUser, loginUser ,createDoctor} from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/create', createPost);
router.post('/createDoctor', createDoctor);
router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);
router.put('/update/:id', updatePost);
router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.delete('/delete/:id', deletePost);

export default router; 
