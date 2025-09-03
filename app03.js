const express = require("express")
const app = express()
const path = require("path")
const books = require("./mock/book-mock")
app.listen(3000)
/* ejs 설정 */
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", express.static("./public"))
app.get("/books", (req, res) => {
  const ejs = {}
  ejs.title = "도서리스트"
  ejs.books = books
  res.status(200).render("book/list", ejs)
})
