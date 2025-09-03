/**
 * Middleware01
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

app.use(
  (req, res, next) => {
    console.log("MW1")
    next()
  },
  (req, res, next) => {
    console.log("MW2")
    next()
  },
  (req, res, next) => {
    console.log("MW3")
    next()
  },
  (req, res, next) => {
    if (req.method === "GET" && req.path === "/book") {
      res.status(200).json({ content: "걸렸어" })
    }
    next()
  }
)
app.get("/books", (req, res, next) => {
  res.status(200).json({ content: "걸렸어s" })
})
