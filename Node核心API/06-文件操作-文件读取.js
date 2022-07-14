let fs = require("fs");
let path = require("path");

// 1.那都需要读取的文件路径
let str = path.join(__dirname, "data.txt");
// 2.读取文件
/*
fs.readFile(str,"utf8",(err, data) => {
    if(err) {
        throw new Error("读取文件失败")
    }
    console.log(data);
});
*/
let data = fs.readFileSync(str,"utf8");
console.log(data);
