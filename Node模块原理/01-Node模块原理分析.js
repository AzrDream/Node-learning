let vm = require("vm");

// let str = "console.log('www.it666.com');";
// vm.runInThisContext(str);

/*
runInThisContext: 提供了一个安全的环境给我们执行字符串中的代码
runInThisContext提供的环境不能访问本地的变量, 但是可以访问全局的变量(也就是global上的变量)
* */
// let name = "lnj";
// let str = "console.log(name);";
// vm.runInThisContext(str); // name is not defined

// global.name = "lnj";
// let str = "console.log(name);";
// vm.runInThisContext(str);
/*
runInNewContext: 提供了一个安全的环境给我们执行字符串中的代码
runInNewContext提供的环境不能访问本地的变量, 也不能访问全局的变量(也就是global上的变量)
* */
// let name = "lnj";
// let str = "console.log(name);";
// vm.runInNewContext(str); // name is not defined

global.name = "lnj";
let str = "console.log(name);";
vm.runInNewContext(str); // name is not defined
