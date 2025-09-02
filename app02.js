const express = require("express")
const cors = require("cors")
const app = express()

/** Server Init **/
app.listen(3000)

/** CORS **/
app.use(cors())

/** Static Routing **/
app.use("/", express.static("./public"))

/** Dynamic Routing **/
app.get("/books", (req, res) => {
  const books = [
    { id: 1, title: "별주부전", content: "용왕이 토끼의 간을..." },
    { id: 2, title: "홍길동전", content: "아버지를 아버지라..." },
    { id: 3, title: "춘향전", content: "변사또가 춘향이를..." },
    { id: 4, title: "구운몽전", content: "꿈속에서 선녀가..." },
  ]
  res.status(200).json({ count: books.length, data: books })
})
