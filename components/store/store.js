var tapTargetBehavior = require('../behavior/tapTargetBehavior')

Component({

  behaviors: [tapTargetBehavior],

  properties: {
    stores: { // 属性名
      type: Array, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: null, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function(newVal, oldVal){
        console.log('stores something change ', newVal, oldVal, this.data)
      }
    },
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
  }

})