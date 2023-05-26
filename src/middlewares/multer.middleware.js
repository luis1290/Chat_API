const path = require("path")
const multer = require("multer")

//Configuración de multer donde subirá las imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/uploads"),
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({
    storage
  }).single("image")


  module.exports = upload