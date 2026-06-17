const http = require('http');
const requestingData = require('./RequestingData');

const server= http.createServer(requestingData);
const PORT=300;
server.listen(PORT, ()=>{
        console.log(`ServerStarted http://localhost:${PORT}`);
})