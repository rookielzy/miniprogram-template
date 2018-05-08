import { wxRequest } from './rest'

const wxRender = () => wxRequest('GET', '/wx-render')

module.exports = {
  wxRender
}
