const { body, validationResult } = require("express-validator")
const error = require("../../common/error/error-util")

const bookCreateValidation = () => {
  return [
    body("title").notEmpty().escape(),
    body("writer").notEmpty().escape(),
    body("content").optional({ checkFalsy: true }).escape(),
    body("publish_d").optional({ checkFalsy: true }).isDate(),
    (req, res, next) => {
      const err = validationResult(req)
      if (err.isEmpty()) next()
      else next(error(err.array()))
    },
  ]
}

module.exports = { bookCreateValidation }
