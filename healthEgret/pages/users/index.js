// pages/users/index.js
Page({
  data:{
    user:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.dirxml(res);
        that.setData({
          user:res.userInfo
        })
      }
    })
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
  orderlist: function(e){
    wx.navigateTo({
        url: '/pages/orderlist/index'
    }) 
  },
  reportlist: function(e){
    wx.navigateTo({
        url: '/pages/reportList/index'
    }) 
  },
  collectlist: function(e){
    wx.navigateTo({
        url: '/pages/collectList/index'
    }) 
  },
})