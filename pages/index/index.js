import { wxRender, wxLogin } from '../../utils/api'

const app = getApp()

Page({
  data: {
    renderData: null
  },

  onLoad: function () {
    // wx.login({
    //   success: (res) => {
    //     const code = res.code
    //     console.log('code', code)
    //     wx.getExtConfig({
    //       success: (res) => {
    //         const { appid } = res.extConfig

    //         wxLogin({
    //           "code": code,
    //           "appid": appid
    //         }).then(res => {
    //           console.log('test :', res)
    //         })
    //       }
    //     })
    //   }
    // })

    wxRender().then(res => {
      const renderData = res.data.data

      this.setData({
        renderData
      })

      console.log('render data: ', renderData)
    })
  }
})
