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
