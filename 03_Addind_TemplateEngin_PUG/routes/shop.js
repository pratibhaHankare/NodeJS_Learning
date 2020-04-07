const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

/** route for pug 
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});
*/

/** route for HandleBar */
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/',hasProducts:products.length > 0,activeShop:true,productCSS:true,formCSS:true});
});

module.exports = router;

