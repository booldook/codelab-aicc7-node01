const { isProd } = require("../module/util")

const error = (errCode, status) => {
  const err = new Error()
  if (Array.isArray(errCode)) {
    // express-validation 에서 오는 에러일때
    err.message = "유효성 검사 실패"
    err.status = 400
    err.data = errCode
    return err
  } else if (errCode instanceof Error) {
    // errCode 자체가 에러객체일때
    errCode.status = status || 500
    if (!isProd() && errCode.sql) {
      errCode.data = {
        message: errCode?.message || "",
        code: errCode?.code || "",
        errno: errCode?.errno || "",
        sqlMessage: errCode?.sqlMessage || "",
        sqlState: errCode?.sqlState || "",
        sql: errCode?.sql || "",
      }
    }
    return errCode
  } else {
    // My Error - 규격화
    let message = "UNKNOWN ERROR"
    let code = 500
    switch (errCode) {
      case "BAD_PARAMS":
        message = "파라메터가 잘못되었습니다."
        code = 400
        break
      case "EXIST_USER":
        message = "기존 회원 정보가 있습니다."
        code = 200
        break
      case "LOGIN_FAIL":
        message = "아이디와 패스워드를 확인하세요."
        code = 200
        break
      default:
        break
    }
    err.message = message
    err.status = code
    return err
  }
}

module.exports = error
