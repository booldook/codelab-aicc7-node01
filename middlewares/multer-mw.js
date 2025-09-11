// const multer = require("multer")
// const upload = multer({ dest: "storages/" })
// app.post("/upload", upload.single("upfile"), function (req, res, next) {
//   res.status(200).json({ file: req.file })
// })

const path = require("path")
const multer = require("multer")
const fs = require("fs-extra")
const { uploadPath, createFileNm } = require("../common/module/util")
const extWhiteList = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".zip",
  ".pptx",
  ".txt",
  ".xlsx",
  ".docx",
  ".ppt",
  ".xls",
  ".doc",
  ".hwp",
  ".pdf",
]

// C:/.../storages/book/20250910/00/ -> realPath(절대경로)
// /upload/storages/book/20250910/00/ -> virtualPath(운영APP)
const destination = async (req, file, cb) => {
  const upPath = uploadPath(__dirname, "../storages", req.baseUrl)
  req.uploadPath = upPath
  await fs.ensureDir(upPath)
  cb(null, upPath)
}

// book_20250910_00_timestamp_(nanoid).ext
const filename = (req, file, cb) => {
  const fileNm = createFileNm(req.uploadPath, file.originalname)
  cb(null, fileNm)
}

const fileFilter = (req, file, cb) => {
  const isAllow = extWhiteList.includes(
    path.extname(file.originalname).toLowerCase()
  )
  cb(null, isAllow)
}

const storage = multer.diskStorage({ destination, filename })
const limits = { fileSize: 100 * 1000 * 1024 }

module.exports = multer({ storage, limits, fileFilter })
