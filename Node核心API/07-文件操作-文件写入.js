let fs = require("fs");
let path = require("path");

// 1.拼接写入的路径
let str = path.join(__dirname,"data.txt");

// 2.写入数据
/*
let buf = Buffer.from("www.azrdream.com");
fs.writeFile(str,buf,"utf8",err => {
    if(err){
        throw new Error("写入数据失败");
    }else{
        console.log("写入数据成功");
    }
});
*/
let res = fs.writeFileSync(str,"贾凯文123456","utf8");
