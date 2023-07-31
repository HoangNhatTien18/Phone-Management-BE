const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//set Storage

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(file.mimetype === "image/jpeg"){
            cb(null, 'uploads');
        }else{
            cb(new Error('Can only post JPEG'),null)
        }
    },

    filename: function(req,file,cb){
        cb(null, Date.now() +'.JPEG');
    }
});
const upload = multer({storage: storage});

//get URL
app.get('/', function(req, res) {
    // res.json({msg: 'hello world'})
    res.sendFile(__dirname + '/views/form-upload.html');
});



app.post('/uploadfile', upload.single("myFile") , (req, res,next)=> {
    const file = req.file;
    if(!file){
        const err = new Error('please upload a file');
        err.httpStatusCode = 400;
        return next(err);
    }
        
    res.json(file);
});

app.post('/uploadmultiplefile', upload.array("myFiles",12) , (req, res,next)=> {
    const files= req.files;
    if(!files){
        const err = new Error('please upload a file');
        err.httpStatusCode = 400;
        return next(err);
    }
    
    res.json(files);
});

app.listen(1709, function() {console.log('App listening at http://localhost:1709')});