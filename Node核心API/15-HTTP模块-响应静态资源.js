let http = require("http");
let fs = require("fs");
let path = require("path");
let mime = require("./mime");

let server = http.createServer();
server.on("request", (req,res)=>{
    readFile(req, res);
});
server.listen(3000);

function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    let extName = path.extname(filePath);
    let type = mime[extName];
    if(type.startsWith("text")){
        type += "; charset=utf-8;";
    }
    res.writeHead(200, {
        "Content-Type": type
    });
    fs.readFile(filePath, function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}
