// pages/family/index.js
Page({
  data:{
    num:2,
    "members":[{"id":1,"portrait":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","name":"小姑子","score":100,"telephone":"18810296418"},
    {"id":2,"portrait":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","name":"小姑子","score":100,"telephone":"18810296418"}],
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
  detail: function (res) {
      var id = res.currentTarget.id;
      wx.navigateTo({
          url: '../member/index?id=' + id
      })
      // console.log(e);
  },
  addmember: function (res) {
      wx.navigateTo({
          url: '../addmember/index'
      })
      // console.log(e);
  },
  //  showModal: function () {
  //     // 显示遮罩层
  //     var animation = wx.createAnimation({
  //       duration: 200,
  //       timingFunction: "linear",
  //       delay: 0
  //     })
  //     this.animation = animation
  //     animation.translateY(300).step()
  //     this.setData({
  //       animationData: animation.export(),
  //       showModalStatus: true
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       this.setData({
  //         animationData: animation.export()
  //       })
  //     }.bind(this), 200)
  // },
  // hideModal: function () {
  //     // 隐藏遮罩层
  //     var animation = wx.createAnimation({
  //       duration: 200,
  //       timingFunction: "linear",
  //       delay: 0
  //     })
  //     this.animation = animation
  //     animation.translateY(300).step()
  //     this.setData({
  //       animationData: animation.export(),
  //     })
  //     setTimeout(function () {
  //       animation.translateY(0).step()
  //       this.setData({
  //         animationData: animation.export(),
  //         showModalStatus: false
  //       })
  //     }.bind(this), 200)
  // }
})