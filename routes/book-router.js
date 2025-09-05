const express = require("express")
const router = express.Router()
const {
  bookCreateValidation,
} = require("../services/validation/book-validation")
const {
  bookList,
  bookCreate,
} = require(`../services/${process.env.DBMS}/book-svc`)
const error = require("../common/error/error-util")

// /book, /book/1, /book?page=1
router.get("/{:id}", bookList(), async (req, res, next) => {
  const list = req.rs
  res.status(200).json({ success: "OK", data: { list } })
})

router.post("/", bookCreateValidation, bookCreate(), async (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return res.status(200).json({ success: "OK" })
  }
  next(error(errors.array()))
})

module.exports = router
