const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer(); 

server.listen(port, () => {
    console.log(`Server is Listening on port ${3000}`);
    
})