const error = require("../../common/error/error-util")
const { pool } = require("../../common/module/mysql-conn")

const bookList = (params) => {
  return async (req, res, next) => {
    try {
      // LIMIT 0, 10 : idx[0] 부터 10개
      const { order, page = 1 } = params || {}
      const orderBy = `${order?.field || "id"} ${order?.sort ? "DESC" : "ASC"}`
      const pageIdx = (page - 1) * 10
      const sql = `SELECT * FROM book ORDER BY ${orderBy} LIMIT ?, 10`
      const [rs, fields] = await pool.execute(sql, [pageIdx])
      req.rs = rs || []
      next()
    } catch (err) {
      next(error("BAD_PARAMS"))
    }
  }
}

module.exports = { bookList }
