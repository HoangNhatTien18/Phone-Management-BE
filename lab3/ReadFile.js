const fs = require('fs');

fs.readFile('page-b.html', function(err, data) {
    if(err) {
        throw err;
    }
    console.log(data.toString('utf8'));
})