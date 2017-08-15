// pages/payment/index.js
Page({
  data:{
    item:{
      'nm':'妇女专项体检套餐',
      'num':2,
      'zprice':198,
      'org':'万年县人民医院',
      'count':387

    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  laterpay:function(e){
    wx.navigateTo({
      url: '/pages/orderlist/index'
    })
  }
})