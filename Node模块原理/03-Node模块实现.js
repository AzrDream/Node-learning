let path = require("path");
let fs = require("fs");
let vm = require("vm");

class KWModule {
    constructor(id) {
        this.id = id;   // 保存当前模块的绝对路径
        this.exports = {};
    }
}
KWModule._cache = {};
KWModule._extensions = {
    ".js":function (module) {
        // 1.读取js代码
        let script = fs.readFileSync(module.id);
        // 2.将js代码包裹到函数中
        let strScript = KWModule.wrapper[0]+script+KWModule.wrapper[1];
        // 3.将字符串转换成js代码
        let jsScript = vm.runInNewContext(strScript);
        // 4.执行转换之后的js代码
        jsScript.call(module.exports, module.exports);
    },
    ".json":function (module) {
        let json = fs.readFileSync(module.id);
        let obj = JSON.parse(json);
        module.exports = obj;
    }
};
KWModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

function kwRequire(filePath) {
    // 1.将传入的相对路径转为绝对路径
    let absPath = path.join(__dirname, filePath);
    // 2.尝试从缓存中获取当前的模块
    let cacheModule = KWModule._cache[absPath];
    if(cacheModule) {
        return cacheModule.exports;
    }
    // 3.如果没有缓存对象就自己创建一个KWModule对象，并缓存起来
    let module = new KWModule(absPath);
    KWModule._cache[absPath] = module;
    // 4.利用tryModule方法加载模块
    tryModuleLoad(module);
    // 5.返回模块的exports
    return module.exports;
}
function tryModuleLoad(module){
    // 1.取出模块的后缀
    let extName = path.extname(module.id);
    KWModule._extensions[extName](module);
}

// let aModule = kwRequire("./02-a.js");
let aModule = kwRequire("./person.json");
console.log(aModule);
