// const multer = require("multer")
// const upload = multer({ dest: "storages/" })
// app.post("/upload", upload.single("upfile"), function (req, res, next) {
//   res.status(200).json({ file: req.file })
// })

const path = require("path")
const multer = require("multer")
const fs = require("fs-extra")
const moment = require("moment")
const { nanoid } = require("nanoid")

const multerPreload = (req, res, next) => {
  // C:/.../storages/book/20250910/00/ -> realPath(절대경로)
  // /upload/storages/book/20250910/00/ -> virtualPath(운영APP)
  const rPath = req.baseUrl
  const dPath = moment().format("YYYYMMDD/HH")
  const uploadPath = path.join(__dirname, "../", "storages", rPath, dPath)
  req.uploadPath = uploadPath
  next()
}

const destination = async (req, file, cb) => {
  console.log("destination", req.uploadPath)
  cb(null, req.uploadPath)
}

// timestamp_(nanoid).ext
const filename = async (req, file, cb) => {
  console.log("filename :: ", req.uploadPath)
  const ext = file.originalname.split(".")
  const destArr = req.uploadPath.split("\\")
  let filename =
    destArr[destArr.length - 3] +
    "_" +
    destArr[destArr.length - 2] +
    "_" +
    destArr[destArr.length - 1] +
    "_" +
    Date.now() +
    "_" +
    nanoid() +
    "." +
    ext[ext.length - 1]
  console.log("filename2 :: ", filename)
  cb(null, filename)
}

const fileFilter = async (req, file, cb) => {
  console.log("filter", file)
  cb(null, true)
  // cb(null, false)
  // cb(new Error("I don't have a clue!"))
}

const storage = multer.diskStorage({ destination, filename })
const limits = { fileSize: 100 * 1000 * 1024 }

module.exports = {
  multerPreload,
  multer: multer({ storage, limits, fileFilter }),
}
