const express = require('express');
const multer = require('multer')

const {  uploadSingleFile, uploadMultipleFiles} = require('../Controllers/uploadController')
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload-single', upload.single('file'), uploadSingleFile);

router.post('/upload-multiple', upload.array("files", 5), uploadMultipleFiles);

module.exports = router;