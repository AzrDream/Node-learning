let res = Buffer.isEncoding("utf-8");
console.log(res);

let obj = {};
let res2 = Buffer.isBuffer(obj);
console.log(res2);

let buf = Buffer.from("123");
let res3 = Buffer.byteLength(buf);
console.log(buf.length);
console.log(res3);

let buf1 = Buffer.from("123");
let buf2 = Buffer.from("abc");
let res4 = Buffer.concat([buf1,buf2]);
console.log(res4.toString());
