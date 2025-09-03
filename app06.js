/* 라우터 분리 */
const path = require("path")
const dotenv = require("dotenv")
const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env"
dotenv.config({ path: path.resolve(__dirname, envFile) })

console.log(process.env)
const express = require("express")
const app = express()
const mw01 = require("./middlewares/mw01")
const mw02 = require("./middlewares/mw02")
app.listen(process.env.port)
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", express.static("./public"))
