const express = require("express")
const router = express.Router()
const {
  bookCreateValidation,
} = require("../services/validation/book-validation")
const {
  bookList,
  bookCreate,
} = require(`../services/${process.env.DBMS}/book-svc`)
const multer = require("../middlewares/multer-mw")

// /book, /book/1, /book?page=1
router.get("/{:id}", bookList(), async (req, res, next) => {
  const list = req.rs
  res.status(200).json({ success: "OK", data: { list } })
})

router.post(
  "/",
  bookCreateValidation(),
  bookCreate(),
  async (req, res, next) => {
    res.status(200).json({ success: "OK" })
  }
)

router.post("/upload", multer.single("upfile"), function (req, res, next) {
  res.status(200).json({ file: req.file })
})

module.exports = router
