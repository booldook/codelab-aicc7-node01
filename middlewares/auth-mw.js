const { getSignData } = require("../common/module/token")
const error = require("../common/error/error-util")

const isApi = () => {
  return (req, res, next) => {
    try {
      const [, token] = (req.headers?.authorization || "").split("Bearer ")
      const verifyResult = getSignData(token)
      return verifyResult ? next() : next(error("ACCESS_TOKEN_VERIFY_FAIL"))
    } catch (err) {
      next(error("ACCESS_TOKEN_VERIFY_FAIL"))
    }
  }
}

const isAdmin = () => {
  return (req, res, next) => {
    try {
      const [, token] = (req.headers?.authorization || "").split("Bearer ")
      const verifyResult = getSignData(token)
      return verifyResult?.usrLv > 5 ? next() : next(error("IS_NOT_ADMIN"))
    } catch (err) {
      next(error("TOKEN_VERIFY_FAIL"))
    }
  }
}

module.exports = { isApi, isAdmin }
