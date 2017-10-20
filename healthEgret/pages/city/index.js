// pages/city/index.js
Page({
  data:{
    currentCity:{},
    open:true,
    hot:[]
    // hot:[{"code":12,"nm":"南昌","aleph":"N"},{"code":13,"nm":"鹰潭","aleph":"Y"},{"code":13,"nm":"上饶","aleph":"Y"}]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // this.setData({
    //   currentCity:options.city
    // })

    var that = this;
    wx.showToast({
      icon: 'loading',
      success: function (){
        wx.getLocation({
          type: 'wgs84',
          success: function ({latitude, longitude}) {
            wx.request({
                url: 'https://www.afamilyhealth.cn/api/address/location',

                data: {
                  latitude: latitude,
                  longitude: longitude,
                },

                success: (res) => {
                  let city = res.data.regeocode.addressComponent.city;
                  that.setData({ currentCity:{name:city,location:[longitude,latitude]}});

                  wx.request({
                    url: 'https://www.afamilyhealth.cn/api/cities',

                    data:{
                      grade:2
                    },

                    success: (res) => {
                      var hot = res.data.data.filter(function(obj){
                        return obj.name !== city;
                      });
                      console.dirxml("hot", hot);
                      that.setData({ hot: hot});
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
            
          }
        })
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
  },
  changeCity: function(e){
    var city = e.currentTarget.dataset.city;
    var location = e.currentTarget.dataset.location.join(',');
    var app = getApp()
    app.globalData.cityInfo = {city:city, location:location};  //存储数据到app对象上
    console.dirxml('glb', app.globalData.cityInfo);
    wx.navigateBack();  //返回上一个页面
    // wx.switchTab({
    //       url: '../index/index?city=' + city  + '&location='  + location
    //   })
  }
})