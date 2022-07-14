let path = require("path");

let res = path.basename("a/b/c/d/index.html", ".html");
console.log(res);

let res1 = path.dirname("a/b/c/d/index.html");
console.log(res1);

let res2 = path.extname("a/b/c/d/index.html");
console.log(res2);

let res3 = path.isAbsolute("/a/b/c/d/index.html");
let res4 = path.isAbsolute("./a/b/c/d/index.html");
let res5 = path.isAbsolute("c:\\a\\b\\c\\d\\index.html");
console.log(res3, res4, res5);

console.log(path.sep);
console.log(path.delimiter);

let obj = path.parse("/a/b/c/d/index.html");
console.log(obj);

let obj2 = {
    root: '/',
    dir: '/a/b/c/d',
    base: 'index.html',
    ext: '.html',
    name: 'index'
};
let str = path.format(obj2);
console.log(str);

let str2 = path.join("/a/b","/c","../");
console.log(str2);

let res6 = path.normalize("/a//b//c/d////index.html");
console.log(res6);
res6 = path.relative("/a/b/c/d/index.html","/a/b/e/f");
console.log(res6);

res6 = path.resolve('/foo/bar','/baz');
console.log(res6);
