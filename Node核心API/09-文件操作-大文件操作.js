let fs = require("fs");
let path = require("path");

// 1.拼接读取的路径
let str = path.join(__dirname, "data.txt");
// 2.创建一个读取流
let readStream = fs.createReadStream(str,{encoding:"utf8", highWaterMark: 1});
// 3.添加事件监听
readStream.on("open",()=>{
    console.log("表示数据流和文件建立关系成功");
});
readStream.on("error",()=>{
    console.log("表示数据流和文件建立关系失败");
});
readStream.on("data",(data)=>{
    console.log("表示通过数据流从文件中读取到了数据",data);
});
readStream.on("close",()=>{
    console.log("表示数据流断开了和文件的关系，并且数据已经读取完毕了");
});
