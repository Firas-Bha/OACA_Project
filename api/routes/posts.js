import express from 'express';
import { getPosts,createPost,updatePost,deletePost,countByPost } from '../controllers/posts.js';
import auth from '../middleware/auth.js'; // fel backend nzidou .js
const router = express.Router();

//localhost:5000/posts
//

router.get('/',getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.put('/:id',auth,updatePost); //patch is used for updating 
router.delete('/:id',auth,deletePost);
router.get("/countByPost", countByPost);

export default router;
