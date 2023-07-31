const express = require('express');
const http = require('http');
const fs = require('fs');


http.createServer(function(req, res) {
   if(req.url == '/page-c.html'){
       console.log(req.url);
       res.writeHead(301, {"Location": "http://"+req.headers['host']+"/page-b.html"});  
    
       return res.end();
   }else{
       console.log(req.url);
       fs.readFile(req.url.substring(1),
            function (err,data) {
                if (err) {
                    throw err;
                }
                res.writeHead(200);
                res.write(data.toString('utf8'));
                return res.end();
            }
       );
   }
}).listen(5656);
