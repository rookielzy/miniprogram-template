import { wxRender } from '../../utils/api'

const app = getApp()

Page({
  data: {
    carousel: null,
    renderData: null
  },

  onLoad: function () {
    wxRender().then(res => {
      const renderData = res.data.data

      this.setData({
        renderData
      })

      console.log('render data: ', renderData)
    })
  }
})
