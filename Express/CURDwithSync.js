const fs = require('fs')
const path = require('path')

const fileName= "Sync.txt";
const filePath= path.join(__dirname, fileName)

//delete file ||unlinkSync
//   const deleteFile= fs.unlinkSync(filePath)
//   console.log(deleteFile)

//update text in file || appendFileSync
//   const appendData= fs.appendFileSync(filePath, "\nheelooooo", "utf-8")
//   console.log(appendData)

//read text in file || readFileSync
//  const readData= fs.readFileSync(filePath, "utf-8")
//  console.log(readData)

// created File || writeFileSync
// const createFile= fs.writeFileSync(filePath, "hello world", "utf-8")
// console.log(createFile)
