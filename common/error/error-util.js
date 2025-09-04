const error = (errCode) => {
  let message = "UNKNOWN ERROR"
  let code = 500
  switch (errCode) {
    case "BAD_PARAMS":
      message = "파라메터가 잘못되었습니다."
      code = 400
      break
    default:
      break
  }
  const err = new Error(message)
  err.status = code
  return err
}

module.exports = error
