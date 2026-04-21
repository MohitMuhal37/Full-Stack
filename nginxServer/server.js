const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === "/" ? "index.html":req.url);
    const extname = String(path.extname(filePath).toLowerCase());

    const mineType = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/javascript",
        ".png" : "image/png",
    }

    const contentType = mineType[extname] || "application/octet-stream";

    fs.readFile(filePath, (err,context)=>{
        if(err){
            if(err.code === "ENOENT"){
                res.writeHead(404, {"content-type":"text/html"})
                res.end("404 FILE NOT FIND BRO")
            }
        }else{
            res.writeHead(200,{"content-type" : contentType});
            res.end(context, "utf-8");
        }
    })
}); 

server.listen(port, () => {
    console.log(`Server is Listening on port ${3000}`);
    
})