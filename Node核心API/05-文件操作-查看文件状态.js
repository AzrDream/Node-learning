let fs = require("fs");
console.log(1);
fs.stat(__dirname,(err, stats)=>{
    // console.log(3);
    if(stats.isFile()){
        console.log("当前路径对应的是一个文件");
    }else if(stats.isDirectory()){
        console.log("当前路径对应的是一个文件夹");
    }
});
let stats = fs.statSync(__dirname);
console.log(stats);
console.log(2);
