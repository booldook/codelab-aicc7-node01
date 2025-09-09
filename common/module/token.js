const Redis = require("ioredis")
const jwt = require("jsonwebtoken")

const updateToken = (signData) => {
  const accessToken = jwt.sign({ data: signData }, process.env.SALT_JWT, {
    expiresIn: process.env.EXP_ACC_JWT,
  })
  const refreshToken = jwt.sign({ data: signData }, process.env.SALT_JWT, {
    expiresIn: process.env.EXP_REF_JWT,
  })
  const redis = new Redis()
  if (!signData.usrId) throw new Error("Redis Key undefined")
  redis.set(`RT:${signData.usrId}`, refreshToken)
  return { accessToken, refreshToken }
}

const isVerifyRefresh = async (refreshToken) => {
  const clientTokenValid = jwt.verify(refreshToken, process.env.SALT_JWT)
  const usrId = clientTokenValid?.data?.usrId || ""
  const redis = new Redis()
  const redisToken = await redis.get(`RT:${usrId}`)
  jwt.verify(redisToken, process.env.SALT_JWT)
  return refreshToken === redisToken
}

module.exports = { updateToken, isVerifyRefresh }
export { updateToken, isVerifyRefresh }
