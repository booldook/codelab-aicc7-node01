const express = require("express")
const router = express.Router()
const products = require("../mock/shop-mock")

router.get("/", (req, res, next) => {
  res.status(200).json({ success: "OK", data: { list: products } })
})

router.get("/err", (req, res, next) => {
  res.status(200).json({
    success: "FAIL",
    error: { message: "알수없는 에러가 발생했습니다." },
  })
})

module.exports = router
