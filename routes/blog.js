import express from 'express';
import * as blogController from '../controllers/blog.controller.js';


const router = express.Router();


router.get('/', blogController.findAllBlog);
router.get('/create', blogController.createBlog);


export default router;