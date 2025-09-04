const express = require("express")
const router = express.Router()
const { bookList } = require("../services/mysql/book-svc")

// /book, /book/1, /book?page=1
router.get("/{:id}", bookList(), async (req, res, next) => {
  const list = req.rs
  res.status(200).json({ success: "OK", data: { list } })
})

module.exports = router
