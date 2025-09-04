const express = require("express")
const router = express.Router()
const {
  bookList,
  bookCreate,
} = require(`../services/${process.env.DBMS}/book-svc`)

// /book, /book/1, /book?page=1
router.get("/{:id}", bookList(), async (req, res, next) => {
  const list = req.rs
  res.status(200).json({ success: "OK", data: { list } })
})

router.post("/", bookCreate(), async (req, res, next) => {
  res.status(200).json({ success: "OK" })
})

module.exports = router
