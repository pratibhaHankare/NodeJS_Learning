const express = require('express');
const productController = require('../controller/product');

const router = express.Router();

/** route for HandleBar */
router.get('/',productController.getProducts );

module.exports = router;

