const express = require('express');
const bodyParser = require('body-parser');
const adminRouterHandler = require('./router/admin');
const userRouterHandler = require('./router/shop');
const path = require('path');
const rootDir = require('./helper/path');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminRouterHandler);
app.use(userRouterHandler);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'view','404ErrorPage.html'));
});

app.listen(3000);