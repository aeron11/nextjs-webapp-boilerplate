/**
 * Created by zhangheng on 2017/9/15.
 */
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://api.yourdomain.com' : 'https://localhost:3000'
}
