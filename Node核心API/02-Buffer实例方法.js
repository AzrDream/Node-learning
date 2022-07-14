let buf = Buffer.from([97,98,99]);
console.log(buf);
console.log(buf.toString());

let buf1 = Buffer.alloc(5);
console.log(buf1);
buf1.write("abcdefg",2,2);
console.log(buf1);

let buf2 = buf1.slice(2,4);
console.log(buf2);
console.log(buf2.toString());
