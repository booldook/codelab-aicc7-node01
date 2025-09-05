const { body } = require("express-validator")

const bookCreateValidation = () => {
  return (req, res, next) => {
    ;[
      body("title").notEmpty().escape(),
      body("writer").notEmpty().escape(),
      body("content").optional().escape(),
      body("publish_d").optional().isDate(),
      (req, res, next) => {
        console.log("MW")
        next()
      },
    ](req, res, next)
    next()
  }
}

module.exports = { bookCreateValidation }
