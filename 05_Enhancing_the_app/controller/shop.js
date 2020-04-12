const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(product =>{
        res.render('shop/product-list', {
          prods: product, 
          pageTitle: 'All Product List',
          path: '/products',
          });
    });
  };
exports.getIndex = (req, res, next) => {
    Product.fetchAll(product =>{
        res.render('shop/index', {
          prods: product, 
          pageTitle: 'Shop',
          path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
        res.render('shop/cart', {
           pageTitle: 'Cart Page',
           path: '/cart',
        });
};

exports.getOrders=(req, res, next) => {
  res.render('shop/orders', {
     pageTitle: 'Order Page',
     path: '/orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
     pageTitle: 'Checkout Page',
     path: '/checkout',
  });
};