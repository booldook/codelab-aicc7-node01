const express = require("express")
const router = express.Router()
const products = require("../mock/shop-mock")

router.get("/", (req, res, next) => {
  res.status(200).json({ success: "OK", data: { list: products } })
})

module.exports = router
