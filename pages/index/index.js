import { wxRender } from '../../utils/api'

const app = getApp()

Page({
  data: {
    carousel: null
  },

  onLoad: function () {
    wxRender().then(res => {
      console.log(res.data, 'carousel data')
      this.setData({
        carousel: res.data
      })
    })
  }
})
