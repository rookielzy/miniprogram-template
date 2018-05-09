Component({

  behaviors: [],

  properties: {
  },
  data: {
  },
  
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  created: function() {},
  attached: function(){},
  ready: function() {},
  moved: function(){},
  detached: function(){},

  methods: {
    linkToSearch: function () {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  }

})