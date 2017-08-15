// pages/pckoforg/index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data:{
    org:{
      "nm":"万年县人民医院",
      "distance":"3.2",
      "from":0,
    },
    pkg:{
      "zprice":"198",
      "price":"345"
    },
    showModalStatus:false,
    tabs: ["套餐简介","体检项目","机构详情"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
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
  showModal: function () {
      // 显示遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
  },
  hideModal: function () {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(300).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false,
          selectOrgModal:false
        })
      }.bind(this), 200)
  },
  next: function (res){
    var ctype =  res.currentTarget.ctype;
    var id =  res.currentTarget.id;
    var num =  res.currentTarget.num;
    wx.navigateTo({
          url: '/pages/ordersubmit/index?id=' + id + '&ctype=' + ctype + '&num=' + num
      }) 
  },
  tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
})