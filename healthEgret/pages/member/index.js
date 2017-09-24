// pages/member/index.js
Page({
  data:{
    num:10,
    "member": {"id":1,"portrait":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","name":"小姑子","score":100,
    "telephone":"18810296418","details":{
      "2017":[{"rid":"233434","time":"1.27","nm":"男科专项体检套餐"},{"rid":"233434","time":"1月27日","nm":"男科专项体检套餐"}],
      "2016":[{"rid":"233434","time":"1月27日","nm":"男科专项体检套餐"},{"rid":"233434","time":"1月27日","nm":"男科专项体检套餐"}]}
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
  backFamily: function(e){
    // console.log("123");
    // wx.navigateTo({
    //       url: '../family/index'
    //   })
    // var rid = res.currentTarget.id;
    wx.navigateTo({
        url: '../family/index'
    })
  },
  reportDetail: function(res){
    var rid = res.currentTarget.id;
    wx.navigateTo({
        url: '../report/index?rid=' + rid
    })

  }
})