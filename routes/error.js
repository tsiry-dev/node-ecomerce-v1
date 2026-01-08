import express from 'express';
import * as errorController from '../controllers/error.controller.js';

const router = express.Router();

router.get('/404', errorController.error404);

export default router;