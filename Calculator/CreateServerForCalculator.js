
const http = require('http');
const RDFCalculator = require('./RequestingDataForCalculator');

const server = http.createServer(RDFCalculator)
const PORT= 300;
server.listen(PORT,()=>{
console.log(`SERVER STRATED http://localhost:${PORT}`)
})