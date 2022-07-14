let fs = require("fs");
let path = require("path");

// 1.拼接写入的路径
let str = path.join(__dirname,"data.txt");

// 2.开始追加数据
/*
fs.appendFile(str,"www.azrdream.com","utf8",err => {
    if(err){
        throw new Error("写入数据失败");
    }else{
        console.log("写入数据成功");
    }
});
*/
fs.appendFileSync(str,"123456","utf8");
