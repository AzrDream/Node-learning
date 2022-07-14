let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
server.on("request", function (req, res) {
    // console.log(req.method);
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    if(req.method.toLowerCase() === "get"){
        res.end("利用GET请求的方式处理参数");
    }else if(req.method.toLowerCase() === "post"){
        res.end("利用POST请求的方式处理参数");
    }
});
// 3.指定监听的端口
server.listen(3000);
