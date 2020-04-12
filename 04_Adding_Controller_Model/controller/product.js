const Product = require('../model/product');


exports.getAddedProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product',
     path: '/admin/add-product',
     formCSS:true,
     productCSS:true,
     activeAddProduct:true });
  };
  
exports.postAddedProduct = (req, res, next) => {
    const productToBeAdded = new Product(req.body.title);
    productToBeAdded.save();
    res.redirect('/');
  };

exports.getProducts = (req, res, next) => {
    Product.fetchAll(product =>{
      console.log(product);
        res.render('shop', {
          prods: product, 
          pageTitle: 'Shop',
           path: '/',
           hasProducts:product.length > 0,
           activeShop:true,
           productCSS:true,
           formCSS:true});
    });
  };