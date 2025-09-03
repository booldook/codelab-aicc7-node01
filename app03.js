const express = require("express")
const app = express()
const path = require("path")
const navi = require("./mock/navi-mock")
const books = require("./mock/book-mock")
app.listen(3000)
/* ejs 설정 */
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", express.static("./public"))
app.use((req, res, next) => {
  req.ejs = { navi }
  next()
})

app.get("/books", (req, res) => {
  const ejs = req.ejs
  ejs.title = "도서리스트"
  ejs.books = books
  res.status(200).render("book/list", ejs)
})
