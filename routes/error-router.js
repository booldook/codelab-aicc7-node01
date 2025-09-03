const express = require("express")
const createError = require("http-errors")
const path = require("path")
const router = express.Router()

router.use((req, res, next, error) => {
  res.status(500).json({ success: "FAIL", error })
})

module.exports = router
