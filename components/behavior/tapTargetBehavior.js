module.exports = Behavior({
  behaviors: [],
  properties: {},
  data: {},
  attached: function () { },
  methods: {
    _navigateToProduct: function (id) {
      wx.navigateTo({
        url: `/pages/product/product?id=${id}`
      })
    },
    _redirectToCat: function (id) {
      wx.redirectTo({
        url: `/pages/category/category?id=${id}`
      })
    },
    _navigateToSubset: function (id) {
      wx.navigateTo({
        url: `/pages/subset/subset?id=${id}`
      })
    },
    _navigateToH5: function (id) {
      wx.navigateTo({
        url: `/pages/webview/webview?id=${id}`
      })
    },
    bindTapTarget: function (e) {
      /*通过点击目标的 type 来判断跳转类型
        type: 1 -> 分类
              2 -> 商品
              3 -> 商品集
              4 -> 微页面
      */
      const { target_id, target_type } = e.target.dataset
      console.log(target_id, target_type, e.target)
      switch (target_type) {
        case 1:
          this._redirectToCat(target_id)
          break
          
        case 2:
          this._navigateToProduct(target_id)
          break
          
        case 3:
          this._navigateToSubset(target_id)
          break
          
        case 4:
          this._navigateToH5(target_id)
          break
          
        case 5:
          break
      }
    }
  }
})