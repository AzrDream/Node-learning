let http = require("http");

// 1.创建一个服务器实例对象
let server = http.createServer();
// 2.注册请求监听
server.on("request",(req,res)=>{
    // res.end("www.azrdream.com");
    res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
    });
    res.end("贾凯文");
});
// 3.指定监听的端口
server.listen(3000);
