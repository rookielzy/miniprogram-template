import { wxRequest } from './rest'

const wxRender = () => wxRequest('GET', '/wx-render')
const wxLogin = (data) => wxRequest('POST', '/wechat-login', data, true)

module.exports = {
  wxRender,
  wxLogin
}
