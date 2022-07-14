let fs = require("fs");
let path = require("path");

/*
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
*/

/*
// 1.拼接写入的路径
let str = path.join(__dirname, "azrdream.txt");
// 2.创建一个写入流
let wirthStream = fs.createWriteStream(str,{encoding:"utf8"});
// 3.监听写入流的事件
wirthStream.on("open",()=>{
    console.log("表示数据流和文件建立关系成功");
});
wirthStream.on("error",()=>{
    console.log("表示数据流和文件建立关系失败");
});
wirthStream.on("close",()=>{
    console.log("表示数据流断开了和文件的关系");
});
let data = "www.azrdream.com";
let index = 0;
let timerId = setInterval(()=>{
    let ch = data[index++];
    wirthStream.write(ch);
    console.log("本次写入了", ch);
    if(index === data.length) {
        clearInterval(timerId);
        wirthStream.end();
    }
},500);
*/

// 1.生成读取和写入的路径
let readPath = path.join(__dirname, "test.mp4");
let writePath = path.join(__dirname, "abc.mp4");
// 2.创建一个读取流
let readStream = fs.createReadStream(readPath);
// 3.创建一个写入流
let writeStream = fs.createWriteStream(writePath);
// 利用读取流的管道方法来快速的实现文件拷贝
readStream.pipe(writeStream);
