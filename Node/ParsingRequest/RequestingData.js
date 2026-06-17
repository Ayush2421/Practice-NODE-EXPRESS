const fs = require('fs');
const requestingData = (request, response) => {
    console.log(request.url, request.method);
    if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Node_Pratice</title>
    </head>
    <body>
        <form action="/submit_form" method="POST">
           <input type="text" name="userName" placeholder="Enter Name"></input>
            <label for="Men"> Men</label>
            <input name="gender" id="Men" type="radio" value="Men"></input>
            <label for="Women"> Women</label>
            <input name="gender" id="Women" type="radio" value="Women"></input>
            <input type="submit" value="Submit"></input>
        </form>
    </body>
    </html>
        `)
        return response.end();
    }
    else if(request.url.toLowerCase()=== "/submit_form" && request.method=== "POST"){
        const body = []
        request.on("data",(chunk)=>{
            body.push(chunk);
        });
        request.on("end",()=>{
        const parseBody= Buffer.concat(body).toString();
        const params = new URLSearchParams(parseBody);
        const obj = Object.fromEntries(params);
        fs.writeFileSync("Demo", JSON.stringify(obj));
        })
        response.statusCode= 302;
        response.setHeader('Location','/');
         return response.end();
    }
}

module.exports = requestingData;