const fs = require('fs');
const data = "hello My world";

fs.writeFile('hello11.txt', data,function(err){
    if(err) throw err;
    console.log("File written successfully");
})