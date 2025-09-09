const isApi = () => {
  return (req, res, next) => {
    console.log(req)
    console.log(req.headers)
    const [, token] = (req.headers?.authorization || "").split("Bearer ")
    console.log(token)
    next()
  }
}

module.exports = { isApi }
