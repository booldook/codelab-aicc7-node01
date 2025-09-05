/* mw01 */
const mw01 = (req, res, next) => {
  req.mw01 = true
  next()
}

const body = (fieldNm) => {
  return {
    isEmpty: () => {
      return (req, res, next) => {
        // ...
        next()
      }
    },
    isInt: () => {
      return (req, res, next) => {
        // ...
        next()
      }
    },
  }
}

module.exports = mw01
