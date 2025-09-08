const error = (errCode) => {
  if (Array.isArray(errCode)) {
    // express-validator Error
    const err = new Error("유효성 검사 실패")
    err.status = 400
    err.data = errCode
    return err
  } else {
    // my Error
    let message = "UNKNOWN ERROR"
    let code = 500
    switch (errCode) {
      case "BAD_PARAMS":
        message = "파라메터가 잘못되었습니다."
        code = 400
        break
      case "EXIST_USER":
        message = "기존 회원 정보가 있습니다."
        code = 209
        break
      default:
        break
    }
    const err = new Error(message)
    err.status = code
    return err
  }
}

module.exports = error
