const multer = require('multer');
const path = require('path');


const storage  = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'uploads');
    },
    filename:(req,res,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-') + '-' + file.originalname)
    }
});


const filefilter = (req,res,cb)=>{
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpen'){
            cb(null,false);
    } else{
        cb(null,false)
    }
}

const upload = multer({storage:storage,fileFilter:filefilter});

module.exports = {upload};