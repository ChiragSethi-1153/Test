const multer = require('multer')

exports.upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(req.files)
           return cb(null, ("uploads"))
        },
        filename: (req, file, cb) => {
           return cb(null, `${Date.now()}_${file.originalname}`)
        }
   
    })
}).fields([{name: 'images', maxCount: 1}]);
