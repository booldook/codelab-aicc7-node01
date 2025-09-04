const express = require("express")
const router = express.Router()
const { bookList } = require("../services/mysql/book-svc")

router.get(
  "/",
  bookList({ order: { field: "title", sort: 1 } }),
  async (req, res, next) => {
    const list = req.rs
    res.status(200).json({ success: "OK", data: { list } })
  }
)

module.exports = router
