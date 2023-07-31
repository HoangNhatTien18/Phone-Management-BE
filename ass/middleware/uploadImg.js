const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg"){
            cb(null, './ass/public/images');
        }else{
            cb(new Error('Can only post JPEG'),null)
        }
    },

    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

module.exports = upload;