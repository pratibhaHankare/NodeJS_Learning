const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(product =>{
        res.render('admin/products', {
          prods: product, 
          pageTitle: 'Admin Product List',
          path: '/admin/products',
          });
    });
};

exports.getAddedProduct = (req, res, next) => {
    res.render('admin/add-product', { 
     pageTitle: 'Add Product',
     path: '/admin/add-product',
     formCSS:true,
     productCSS:true,
     activeAddProduct:true });
  };
  
exports.postAddedProduct = (req, res, next) => {
    const title= req.body.title;
    const imageUrl=req.body.imageUrl;
    const price=req.body.price;
    const description=req.body.description;
    const productToBeAdded = new Product(title,imageUrl,price,description);
    productToBeAdded.save();
    res.redirect('/');
  };
