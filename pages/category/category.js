// pages/category/category.js
import { getProductSubset, getProductCategory } from '../../utils/api'
import regeneratorRuntime from '../../utils/runtime'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: null,
    subsets: null,
    subsetsCnt: 0,
    yAxis: 0,
    submenuHeight: 0
  },

  async _fetchMenuData () {
    const categories = await getProductCategory()
    const subsets = await getProductSubset()

    this.setData({
      categories: categories.data.data,
      subsets: subsets.data.data,
      subsetsCnt: subsets.data.data.length
    })

    this._getSubMenuHeight()
  },

  changeSubmenu (e) {
    console.log('change it')
    const { index } = e.target.dataset
    let yAxis = this.data.submenuHeight * index

    this.setData({
      yAxis
    })
  },

  _getSubMenuHeight: function(){
    let query = wx.createSelectorQuery()
    query.select('#category-submenu__container').boundingClientRect()
    query.exec((res) => {
      this.setData({
        submenuHeight: res[0].height
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._fetchMenuData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})