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

// storages/book/20250910/00/
const destination = async (req, file, cb) => {
  console.log("dest", file, req.baseUrl)
  const rPath = req.baseUrl
  const dPath = moment().format("YYYYMMDD/HH")
  const destPath = path.join(__dirname, "../", "storages", rPath, dPath)
  await fs.ensureDir(destPath)
  req.destination = destPath
  cb(null, destPath)
}

// book_20250910_00_timestamp_(nanoid).ext
const filename = async (req, file, cb) => {
  console.log("filename", file)
  const ext = file.originalname.split(".")
  const destArr = req.destination.split("/")
  let filename =
    destArr.at(-3) +
    "_" +
    destArr.at(-2) +
    "_" +
    destArr.at(-1) +
    "_" +
    Date.now() +
    "_" +
    nanoid() +
    "." +
    ext.at(-1)
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

module.exports = multer({ storage, limits, fileFilter })
