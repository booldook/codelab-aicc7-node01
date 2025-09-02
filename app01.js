// ESM(import)<-지원, node18, CJS(require)-express4
// const express = require('express')
// const https = require('https')
// const http = require('http')
// import express from "express"
// import https from "node:https"
// import express from "express"

const express = require("express")
const app = express()
app.listen(3000)

app.use("/", express.static("./public"))
app.get("/", (req, res) => {
  res.status(200).send("Hello Express")
})
app.get("/html", (req, res) => {
  const greeting = "Hello World222"
  res.status(200).send(`
  <html>
    <head>
      <title>Hello Express</title>
      <link href="/css/style.css" rel="stylesheet">
    </head>
    <body>
      ${greeting}
    </body>
  </html>  
  `)
})
