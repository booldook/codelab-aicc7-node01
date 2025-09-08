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
      const sql = `SELECT Count()`

      const sql = ` 
          INSERT INTO book
            (title, content, writer, publish_d)
          VALUES
            (?, ?, ?, ?)`
      const [rs] = await pool.execute(sql, [
        title,
        content,
        writer || null,
        publish_d || null,
      ])
      req.rs = rs
      next()
    } catch (err) {
      console.log(err)
      next(error("BAD_PARAMS"))
    }
  }
}

module.exports = { bookList, bookCreate }
