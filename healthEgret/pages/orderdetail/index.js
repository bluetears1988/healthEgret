// pages/orderdetail/index.js
Page({
  data:{
    "item":{
      "id":1,
      "img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg",
      "nm":"妇科专项体检套餐",
      "ctype":"短信",
      "zprice":198,
      "num":2,
      "ordercode":"D170805182505594"
    },
    orderInfo:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.showToast({
        icon: 'loading',
        success: function () {
          wx.request({
              url: 'https://www.afamilyhealth.cn/api/order',

              data: {
                  '_id':options.id,
              },

              success: (res) => {
                  console.dirxml(res);
                  var data = res.data.data;
                  console.log(data.length);
                  if(data.length === 0){
                    console.log('navigateTo orderlist');
                    wx.navigateTo({
                        // url: '/pages/orderlist/index?activeIndex=' + that.data.activeIndex
                        url: '/pages/orderlist/index'
                    }) 
                  };
                  that.setData({
                      orderInfo: data[0]
                  });
                  wx.hideToast();
              },

              fail: (res) => {
                  // console.dirxml(res.data);
              },

              complete: (res) => {
                  // console.dirxml(res.data);
              }
          });
        }
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