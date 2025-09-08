const error = require("../../common/error/error-util")
const { pool } = require("../../common/module/mysql-conn")
const bcrypt = require("bcrypt")
const sqlstring = require("sqlstring")

const userList = ({ field = "id", sort = "DESC" } = {}) => {
  return async (req, res, next) => {
    next()
  }
}

const createUser = () => {
  return async (req, res, next) => {
    try {
      const { usrId, usrPw, usrNm, usrEmail } = req.body
      const sql = `SELECT COUNT(id) AS count FROM user WHERE usr_id=? OR usr_email=?`
      const [rs] = await pool.execute(sql, [usrId, usrEmail])
      if (rs[0].count > 0) {
        // 기존회원존재
        return next(error("EXIST_USER"))
      }
      // 회원가입
      const usrPwHash = await bcrypt.hash(usrPw, Number(process.env.SALT_RND))
      const sqlIsert = `
      INSERT INTO user 
        (usr_id, usr_pw, usr_nm, usr_email) 
      VALUES 
        (?, ?, ?, ?)`
      const formattedSql = sqlstring.format(sqlIsert, [
        usrId,
        usrPwHash,
        usrNm,
        usrEmail,
      ])
      console.log(formattedSql)
      const [rsInsert] = await pool.execute(sqlIsert, [
        usrId,
        usrPwHash,
        usrNm,
        usrEmail,
      ])
      req.rs = rsInsert
      return next()
    } catch (err) {
      console.log(err)
      return next(error("BAD_PARAMS"))
    }
  }
}

module.exports = { createUser }
