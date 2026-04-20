const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === "/" ? "index.html":"req.url");
    const extname = String(path.extname(filePath).toLowerCase());

    const mineType = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/javascript",
        ".png" : "text/png",
    }

    const contentType = mineType[extname] || "application/octet-stream";
}); 

server.listen(port, () => {
    console.log(`Server is Listening on port ${3000}`);
    
})