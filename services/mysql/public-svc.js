const error = require("../../common/error/error-util")
const { pool } = require("../../common/module/mysql-conn")
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
      const sql = `SELECT COUNT(id) AS count FROM user WHERE usr_id = ? OR usr_email = ?`
      const [rs] = await pool.execute(sql, [usrId, usrEmail])
      console.log(rs)
      req.rs = rs
      next()
    } catch (err) {
      console.log(err)
      next(error("BAD_PARAMS"))
    }
  }
}

module.exports = { createUser }
