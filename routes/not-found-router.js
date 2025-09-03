const express = require("express")
const createError = require("http-errors")
const path = require("path")
const router = express.Router()

router.use((req, res, next) => {
  next(createError(404))
})

module.exports = router
