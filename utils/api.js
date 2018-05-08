import { wxRequest } from './rest'

function wxRender () {
  wxRequest('GET', '/wx-render').then(res => {
    console.log(res)
  })
}

module.exports = {
  wxRender
}
