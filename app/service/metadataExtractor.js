module.exports = function(app) {
    var multer = require('multer');
    var multerReap = require('multer-autoreap');
    var upload = multer({dest:'./app/uploads'});

    //The node module multer-autoreap is used delete the uploaded file after
    //the meta-data has been extracted from it.
    app.use(multerReap);
    
    app.post('/upload', upload.single('file'), function (req, res) {
            res.json({
                name: req.file.originalname,
                file: req.file.filename,
                size: req.file.size, 
                time: new Date().toLocaleString(), 
                });
     })
}