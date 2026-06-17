//❗ this is creatFile in txt Form, check in terminal by:- node CreateFileCLIApp.js //

// YTLink :https://www.youtube.com/watch?v=_LuhLeN9N1Q&list=PLwGdqUZWnOp3KELplHtc-RnJ5xTUPqdgH&index=28

import readline from "readline"
import fs from "fs"
// const readline = require("readline")
// const fs = require("fs")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const createFile = () => {
    rl.question("What is your file name: ", (fName) => {
        rl.question("Write Content: ", (Content) => {
            fs.writeFile(`${fName}.txt`,Content , (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("File Created Successful!!!!");
                rl.close();
            })
        })
    })
}

createFile();


