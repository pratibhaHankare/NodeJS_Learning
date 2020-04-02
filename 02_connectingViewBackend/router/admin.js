const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../helper/path');

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    console.log('post request');
    res.redirect('/');
});

module.exports = router;