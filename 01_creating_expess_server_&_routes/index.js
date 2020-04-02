const express = require('express');
const app = express();

/** Task 1 */
/*app.use((req,res,next)=>{
    console.log(' first middleware');
    next();
});

app.use((req,res,next)=>{
    console.log('second middleware');
    res.send('Hello, from second midlleware via express js');
});*/

/**Task 2 */
app.use('/users',(req,res,next)=>{
    console.log('Middleware number 1');
    res.send('Response from middleware number 2');
});

app.use('/',(req,res,next)=>{
    console.log('Response from default middleware');
    res.send('response from the deaflut middleware');
});


app.listen(3000);