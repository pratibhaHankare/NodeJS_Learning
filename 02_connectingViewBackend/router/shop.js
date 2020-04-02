const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../helper/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','shop.html'));
});


module.exports = router;