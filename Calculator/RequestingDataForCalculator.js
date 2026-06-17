const fs =require('fs');

const RDFCalculator = (request, response) => {
    if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Calculator</title>
                </head>
                <body>
                    <h1>Welcome </h1>
                    <a href="/cal">Click to open Calculator</a>
                </body>
                </html> 
        `)
        return response.end();

    }
    else if (request.url === "/cal") {
        response.setHeader("Content-Type", "text/html");
        response.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Practice</title>
            </head>
            <body>
            <form action="/result" method="POST">
                <h1>Welcome to Calculator</h1>
                <input name= "num1" type="number" placeholder="Enter 1" ></input>
                <input name= "num2" type="number" placeholder="Enter 2" ></input>
                <input type="submit" value="Add"> </input>
            </form>
            </body>
            </html> 
        `)
        return response.end();

    }
    else if (request.url === "/result" && request.method === "POST") {
        const data = [];
        request.on("data", (chunk) => data.push(chunk))
        request.on("end", () => {
            const buff = Buffer.concat(data).toString();
            const val = new URLSearchParams(buff);
            const obj = Object.fromEntries(val)
            fs.writeFileSync("result", JSON.stringify(obj))
            const result = Number(obj.num1) +Number(obj.num2);
            //to show addition
            response.setHeader("Content-Type", "text/html")
            response.write(`
                  <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Node_Pratice</title>
                </head>
                <body>
                    <h1> Result:::${result}</h1>
                </body>
                </html> 
            `)
            return response.end();
        })
    }
}

module.exports = RDFCalculator;