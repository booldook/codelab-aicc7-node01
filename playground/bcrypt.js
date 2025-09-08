const bcrypt = require("bcrypt")
const saltRounds = 7
const myPlaintextPassword = "s0//P4$$w0rD"
const someOtherPlaintextPassword = "not_bacon"
let _hash
// console.time()
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  console.log(hash)
  _hash = hash
  // console.timeEnd()
})
setTimeout(() => {
  bcrypt.compare(myPlaintextPassword, _hash, function (err, result) {
    console.log(result)
  })
}, 1000)
