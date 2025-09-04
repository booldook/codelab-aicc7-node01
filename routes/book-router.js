const express = require("express")
const router = express.Router()
const { pool } = require("../common/module/mysql-conn")
const error = require("../common/error/error-util")

router.get("/", async (req, res, next) => {
  try {
    const sql = `SELECT * FROM book ORDER BY id DESC`
    const [rs] = await pool.execute(sql)
    res.status(200).json({ success: "OK", data: { list: rs || [] } })
  } catch (err) {
    next(error("BAD_PARAMS"))
  }
})

module.exports = router
