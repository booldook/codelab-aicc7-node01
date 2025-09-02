const express = require("express")
const cors = require("cors")
const app = express()

/** Server Init **/
app.listen(3000)

/** CORS **/
app.use(cors())

/** POST/JSON Init **/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/** Static Routing **/
app.use("/", express.static("./public"))

/** Dynamic Routing **/
app.get(["/books", "/books/:id"], (req, res) => {
  // req.params.id undefined || "1", "2", "3"...
  const { id } = req.params
  const { id: id2 } = req.query // ?id=5
  console.log(id, id2)
  const books = [
    { id: 1, title: "별주부전", content: "용왕이 토끼의 간을..." },
    { id: 2, title: "홍길동전", content: "아버지를 아버지라..." },
    { id: 3, title: "춘향전", content: "변사또가 춘향이를..." },
    { id: 4, title: "구운몽전", content: "꿈속에서 선녀가..." },
  ]
  const resBooks = books.filter((book) => !id || id === String(book.id))

  res.status(200).json({
    count: resBooks.length,
    data: id ? books.filter((book) => String(book.id) === id) : books,
  })
})

app.get("/join", (req, res) => {
  const { usrId, usrPw, usrNm } = req.query
  res.status(200).send(`잘 받았음/${usrId}/${usrPw}/${usrNm}`)
})

app.post("/join", (req, res) => {
  const { usrId, usrPw, usrNm } = req.body
  res.status(200).send(`잘 받았음?/${usrId}/${usrPw}/${usrNm}`)
})
