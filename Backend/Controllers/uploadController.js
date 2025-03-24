const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage ({
    destination : function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + "-"+ Date.now() + path.extname(file.originalname));
    }
});

const upload = multer ({
    storage : storage,
    limits : {fileSize : 5 * 1024 * 1024}, // it is around 5MB;
    fileFilter : function (req, file, cb) {
        const allowedType = /\.(jpeg|jpg|png|webp|mp3|mp4|gif|bmp|wav|avi|mov|svg|pdf)$/i;
        const extname = allowedType.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedType.test(file.mimetype);
        
        if(extname && mimetype){
            cb(null, true)
        }else{
            cb(new error("This file type is not allowed !"), false)
        }
    }

})

// For single uploads:
const uploadSingleFile = ( req, res) => {
    if(!req.file){
        res.status(400).json({ message : " No file Uploaded"})
    }
    res.status(200).json({ messsage : " File uploaded Successfully ", file: req.file.filename})
}

const uploadMultipleFiles = ( req, res) => {
    if(!req.files) {
        res.status(404).json({ message : "No file Uploaded"})
    }
    const fileNames = req.files.map(file => file.filename);
    res.json({ message : "File Uploaded successfully", files : fileNames});


}

module.exports = {
    upload,
    uploadMultipleFiles,
    uploadSingleFile,
}