let buf = Buffer.alloc(5, 17);

// let buf = Buffer.from([1,3,5]);
console.log(buf);
buf[0] = 6;
console.log(buf);
console.dir(buf);
