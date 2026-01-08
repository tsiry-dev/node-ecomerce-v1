import express from 'express';
import * as shopController from '../controllers/shop.controller.js';

// const express = require('express');
// const path = require('path');
// const rootDir = require('../utils/path');
// const { products } = require('./admin');


const router = express.Router();

router.get('/', shopController.findAllProduct);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);

export default router;
