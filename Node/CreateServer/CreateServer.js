const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url==="/home"){
        res.write("<h1> WELCOME TO HOME</h1>")
        return res.end();
    } else if(req.url==="/men"){
        res.write("<h1> WELCOME TO MEN</h1>")
        return res.end();
    } else if(req.url==="/women"){
        res.write("<h1> WELCOME TO WOMEN</h1>")
        return res.end();
    } 
    else if(req.url==="/about"){
        res.write("<h1> WELCOME TO ABOUT</h1>")
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>Node_Pratice</title>
</head><body><head> <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">MEN</a></li>
            <li><a href="/women">WOMEN</a></li>
            <li><a href="/about">ABOUT</a></li>
        </ul></head></body></html>
    `)
    return res.end();
})
const PORT = 300;
server.listen(PORT, () => {
    console.log(`Welcome http://localhost:${PORT}`)
})