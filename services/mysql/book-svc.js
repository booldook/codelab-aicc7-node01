const error = require("../../common/error/error-util")
const { pool } = require("../../common/module/mysql-conn")

// SELECT * FROM book
// SELECT * FROM book WHERE (조건) id=1 , title like '%별%' , id>2
// SELECT * FROM book WHERE (조건) ORDER BY id ASC (id DESC)
// SELECT * FROM book WHERE (조건) ORDER BY id ASC (id DESC) LIMIT 시작Idx, 레코드수
// /book, /book/1, /book?page=1
const bookList = ({ field = "id", sort = "DESC" } = {}) => {
  return async (req, res, next) => {
    try {
      const pageCnt = 10
      const { page = 1 } = req.query
      const { id } = req.params
      let sql = ` SELECT * FROM book `
      if (id) sql += ` WHERE id = ? `
      sql += ` ORDER BY ${field} ${sort} `
      sql += ` LIMIT ${(page - 1) * pageCnt}, ${pageCnt} `
      const [rs] = await pool.execute(sql, id ? [id] : [])
      req.rs = rs || []
      next()
    } catch (err) {
      next(error("BAD_PARAMS"))
    }
  }
}

module.exports = { bookList }
