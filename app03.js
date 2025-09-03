const express = require("express")
const app = express()
app.listen(3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", express.static("./public"))
