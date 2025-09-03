/* mw01 */
const mw01 = (req, res, next) => {
  req.mw01 = true
  next()
}
module.exports = mw01
