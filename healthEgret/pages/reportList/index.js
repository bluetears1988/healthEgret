// pages/reportList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:123,
    height: '',
    reports: [{id:'34234324',status:'已录入',name:'小李',date:'2017-01-21 09:00:00',pkgname:'妇女专项体检套餐',organization:'万年县人民医院'},
    {id:'34234324',status:'已录入',name:'小李',date:'2017-01-21 09:00:00',pkgname:'妇女专项体检套餐',organization:'万年县人民医院'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height:wx.getSystemInfoSync().windowHeight
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  reportDetail: function (){
    wx.navigateTo({
        url: '/pages/report/index'
    }) 
  }
})