let http = require("http");
let queryString = require("querystring");

http.createServer((req, res) => {
    // 1.定义变量保存传递过来的参数
    let params = "";
    req.on("data",chunk => {
        params+=chunk;
    });
    req.on("end",()=>{
        let obj = queryString.parse(params);
        res.end(obj.userName+"----"+obj.password)
    })
}).listen(3000);
