const express = require('express');
const productController = require('../controller/shop');
const adminController = require('../controller/admin');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',adminController.getAddedProduct );

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product',adminController.postAddedProduct );

module.exports = router;



