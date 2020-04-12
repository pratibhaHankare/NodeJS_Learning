const express = require('express');
const productController = require('../controller/product');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productController.getAddedProduct );


// /admin/add-product => POST
router.post('/add-product',productController.postAddedProduct );

module.exports = router;



