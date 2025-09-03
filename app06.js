/* 라우터 분리 */
require("./modules/dotenv")()
const express = require("express")
const app = express()
const path = require("path")
const createError = require("http-errors")
const mw01 = require("./middlewares/mw01")
const mw02 = require("./middlewares/mw02")
const shopRouter = require("./routes/shop-router")
const bookRouter = require("./routes/book-router")
const notFoundRouter = require("./routes/not-found-router")
const errorRouter = require("./routes/error-router")
app.listen(process.env.port)
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", express.static("./public"))
app.use("/shop", shopRouter)
app.use("/book", bookRouter)

app.get("/err", (req, res, next) => {
  try {
    throw new Error("오류 발생")
  } catch (err) {
    next(createError(err))
  }
})

app.use(notFoundRouter)
app.use(errorRouter)
