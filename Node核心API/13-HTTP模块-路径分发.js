let http = require("http");

http.createServer((req, res) => {
    res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
    });
    if(req.url.startsWith("/index")){
        res.write("首页1");
        res.write("首页2");
        res.end();
    }else if(req.url.startsWith("/login")){
        res.end("登录")
    }else{
        res.end("没有数据")
    }
    console.log(req.url);
}).listen(3000);
