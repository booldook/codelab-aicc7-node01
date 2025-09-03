/**
 * Middleware02
 */
const express = require("express")
const app = express()
const path = require("path")
app.listen(3000)
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", express.static("./public"))
