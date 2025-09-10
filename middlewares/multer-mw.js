// const multer = require("multer")
// const upload = multer({ dest: "storages/" })
// app.post("/upload", upload.single("upfile"), function (req, res, next) {
//   res.status(200).json({ file: req.file })
// })

const path = require("path")
const multer = require("multer")
const fs = require("fs-extra")
const moment = require("moment")
const nanoid = require("nanoid")

// storages/book/20250910/00/
const destination = async (req, file, cb) => {
  cb(null, "/tmp/my-uploads")
}

// book_20250910_00_timestamp_(nanoid).ext
const filename = async (req, file, cb) => {
  cb(null, file.fieldname + "-" + Date.now())
}

const fileFilter = async (req, file, cb) => {
  cb(null, false)
  cb(null, true)
  cb(new Error("I don't have a clue!"))
}

const storage = multer.diskStorage({ destination, filename })
const limits = { fileSize: 100 * 1000 * 1024 }

module.exports = multer({ storage, limits, fileFilter })
