// pages/ordersubmit/index.js
Page({
  data:{
    item:{
      "img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg",
      "id":12,
      "nm":"妇女专项体检套餐",
      "ctype":"短信",
      "zprice":"198",
      "num":1,
      "organize":"万年县人民医院"
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
  submitorder:function(e){
    wx.navigateTo({
          url: '/pages/payment/index?id='
      }) 
  }
})