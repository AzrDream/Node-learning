let http = require("http");
let fs = require("fs");
let path = require("path");

let server = http.createServer();
server.on("request", (req,res)=>{
    readFile(req, res);
});
server.listen(3000);

function readFile(req, res) {
    let filePath = path.join(__dirname, "www", req.url);
    fs.readFile(filePath, "utf8", function (err, content) {
        if(err){
            res.end("Server Error");
        }
        res.end(content);
    });
}
