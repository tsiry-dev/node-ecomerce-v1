import express from 'express';
import { body } from 'express-validator';
import * as productController from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/add-product', productController.createProduct);
router.post(
  '/add-product',
  [
    body('title')
      .trim()
      .notEmpty()
      .withMessage('Title is required')
      .isLength({ min: 3 })
      .withMessage('Title must be at least 3 characters'),

    body('description')
      .trim()
      .notEmpty()
      .withMessage('Description is required'),

    body('price')
      .notEmpty()
      .withMessage('Price is required')
      .isFloat({ gt: 0 })
      .withMessage('Price must be greater than 0'),

    body('imageUrl')
      .trim()
      .notEmpty()
      .withMessage('Image URL is required')
      .isURL()
      .withMessage('Image URL must be valid')
  ],
  productController.storeProduct
);

export default router;
