const fs = require('fs');
const data = "\n hello nodejs";
fs.appendFile('hello11.txt', data,'utf8', function(err){
    if (err) throw  err;
    console.log('Data is appended to hello.txt');
});