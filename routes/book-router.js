const express = require("express")
const router = express.Router()
const { bookList } = require("../services/mysql/book-svc")

router.get("/", bookList(), async (req, res, next) => {
  const list = req.rs
  res.status(200).json({ success: "OK", data: { list } })
})

module.exports = router
