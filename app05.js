/**
 * Middleware02
 */
const express = require("express")
const app = express()
const path = require("path")
const mw01 = require("./middlewares/mw01")
const mw02 = require("./middlewares/mw02")
app.listen(3000)
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", express.static("./public"))

app.use("/mw", mw01, (req, res, next) => {
  res.status(200).json({ mw01: req.mw01 })
})

app.use("/mw2", mw02("temp"), (req, res, next) => {
  res.status(200).json({ mw02: req.temp })
})

app.use("/normal", (req, res, next) => {
  res.status(200).json({ mw01: req.mw01 || "not used" })
})
