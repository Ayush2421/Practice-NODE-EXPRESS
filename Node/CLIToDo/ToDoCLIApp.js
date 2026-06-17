//❗ this is ToDo app, check in terminal by:- node ToDoCLIApp.js //

import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const task =[];
const frameQuestion = ()=>{
    console.log("\n1: Enter Task");
    console.log("2: Preview Task");
    console.log("3: Exit Task");
    rl.question("Enter Any Number: ", handleInputs)
}
const handleInputs=(options)=>{
    if(options === "1"){
       rl.question("Enter any thing: ", (data)=>{
        task.push(data);
        frameQuestion();
       })
    }
    else if(options === "2"){
       task.forEach((element, index)=>{
        console.log(`task_${index+1}:  ${element}`)
       })
       frameQuestion();
    }else if(options === "3"){
         console.log(`👋 Good bye👋`)
         rl.close();
    }else{
         console.log(`Please enter valid number`);
         frameQuestion();
    }
}
frameQuestion();