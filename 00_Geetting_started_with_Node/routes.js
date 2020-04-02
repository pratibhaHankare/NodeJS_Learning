const fs = require('fs');
const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write(`<head><title>My Default Page</title></head>`);
        res.write(`<body><ol><li><a href='/'>Home</a></li><li><a href='/user'>User List</a></li></ol><form method='POST' action='/create_user'><h1>Enter the name of the user:</h1><input type='text' name='user'><button type='submit'>Submit</button></form></body>`);
        res.write('</html>');
        return res.end();
    }

    if(url === '/user'){
        res.write('<html>');
        res.write(`<body><ol><li>user 1</li><li>user 1</li><li>user 2</li><li>user 2</li><li>user 3</li></ol><a href='/' type='button'>Back</a></body>`);
        res.write('</html>');
        return res.end();
    }

    // to console log posted data
    if(url === '/create_user' && method=== 'POST'){
        const body = [];
        // event methods
            // collect data -> listen to data event
            req.on('data', chunk =>{
                console.log(chunk);
                body.push(chunk);
            });
            // collect data -> listen to end event in-order to console.log input or write on file
            return req.on('end', ()=>{
                const parsedBody = Buffer.concat(body).toString();
                const message =  parsedBody.split('=')[1];
                console.log(message);
                fs.writeFile('message',message,err=>{
                    res.statusCode = 302;
                    res.setHeader('Location','/');
                    return res.end();
                });

            });
    }

    // default
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write(`<head><title>My users Page</title></head>`);
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;
