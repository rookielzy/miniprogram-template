import { wxRequest } from './rest'

const wxRender = () => wxRequest('GET', '/wx-render')
const wxLogin = (data) => wxRequest('GET', '/api/user/wechatLogin', data, true)
const wxStyle = () => wxRequest('GET', '/wx-style')
const getProductSubset = () => wxRequest('GET', '/product-subsets')
const getProductCategory = () => wxRequest('GET', '/product-categories')

module.exports = {
  wxRender,
  wxLogin,
  wxStyle,
  getProductSubset,
  getProductCategory
}
