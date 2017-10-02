// pages/detail/index.js
Page({
  data:{
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    bannerUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    card:{"id":1,"nm":"妇女专项体检套餐","female":true,"male":false,"all":false,"people":"中老年已婚妇女","symptom":"卵巢","zprice":198,"price":312,"sales":2000,
    "img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg","count":34,"collect":false,"collect_num":300,"ship":"0.00"},
    organizes:[{"code":123,"o_nm":"万年县人民医院","zprice":"198","price":"386","distance":"3.5","img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg","score":"5"},
    {"code":123,"o_nm":"万年县中医院","zprice":"198","price":"386","distance":"3.5","img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg","score":"5"}],
    showModalStatus:false,
    selectOrgModal:false,
    elecard:true
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
  backHome: function(e){
    wx.navigateTo({
          url: '/pages/index/index'
      })
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
  selectOrg: function () {
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
        selectOrgModal: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
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
  o_p_detail: function(e){
    wx.navigateTo({
          url: '/pages/pckoforg/index'
      }) 
  },
  itemChecked: function(e){

    console.dirxml(e);

  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  selectCardType: function(e){
    if(e.target.id == 'elecard'){
      this.setData({
          elecard: true
        })
    }else{
      this.setData({
          elecard: false
        })
    }
  }
})