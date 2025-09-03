/* mw02 */
const mw02 = (query) => (req, res, next) => {
  req[query] = true
  next()
}
module.exports = mw02
