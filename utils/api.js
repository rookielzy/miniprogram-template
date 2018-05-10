import { wxRequest } from './rest'

const wxRender = () => wxRequest('GET', '/wx-render')
const wxLogin = (data) => wxRequest('POST', '/wechat-login', data, true)
const wxStyle = () => wxRequest('GET', '/wx-style')

module.exports = {
  wxRender,
  wxLogin,
  wxStyle
}
