Component({

  behaviors: [],

  properties: {
    carousel: { // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: null, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function(newVal, oldVal){
        console.log('something change ', newVal, oldVal, this.data)
      }
    },
  },
  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000
  },
  
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  created: function() {},
  attached: function(){},
  ready: function() {},
  moved: function(){},
  detached: function(){},

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
      }
    }
  }

})