// pages/city/index.js
Page({
  data:{
    currentCity:'',
    open:true,
    hot:[{"code":12,"nm":"南昌","aleph":"N"},{"code":13,"nm":"鹰潭","aleph":"Y"},{"code":13,"nm":"上饶","aleph":"Y"}]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      currentCity:options.city
    })
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
  }
})