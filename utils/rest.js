const { baseURL } = require('./config')
/**
 * 微信请求 Promise 化
 * @param {String} type 请求类型
 * @param {String} url 请求URL
 * @param {Object} data 请求携带的数据
 */
function wxRequest (type = 'GET', url, data = {}) {
  console.log(baseURL)
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method: type,
      data,
      success: (res) => {
        // TODO: 添加错误码处理
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}


module.exports = {
  wxRequest
}
