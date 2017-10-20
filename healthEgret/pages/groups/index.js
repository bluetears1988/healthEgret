// pages/groups/index.js
var routes = require('router');  
Page({
  data:{
    cellHeight: '155px',  
    pageItems: [],
    currentCity:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      // var pageItems = [];  
      // var row = [];  
      // var len = routes.PageItems.length;//重组PageItems  
      // len = Math.floor((len + 2) / 3) * 3;  
      // for (var i = 0; i < len; i++) {  
      //   if ((i + 1) % 3 == 0) {  
      //     row.push(routes.PageItems[i]);  
      //     pageItems.push(row);  
      //     row = [];  
      //     continue;  
      //   }  
      //   else {  
      //     row.push(routes.PageItems[i]);  
      //   }  
      // }  

      // console.dirxml(pageItems);
      // // wx.getSystemInfo({  
      // //   success: function (res) {  
      // //     var windowWidth = res.windowWidth;  
      // //     that.setData({  
      // //       cellHeight: (windowWidth / 3) + 'px'  
      // //     })  
      // //   },  
      // //   complete: function () {  
      // //     that.setData({  
      // //       pageItems: pageItems  
      // //     })  
      // //   }  
      // // }) 
      // // var windowWidth = res.windowWidth;  
      // this.setData({  
      //   // cellHeight: (windowWidth / 3) + 'px',
      //   pageItems: pageItems   
      // })  

      var that = this;

      wx.showToast({
        icon: 'loading',
        success: function (){
          wx.getLocation({
            type: 'wgs84',//默认为"wgs84"返回gps坐标
            success: ({latitude, longitude}) => {
              // 调用后台API，获取地址信息

              console.dirxml({latitude, longitude});
              wx.request({
                url: 'https://www.afamilyhealth.cn/api/address/location',

                data: {
                  latitude: latitude,
                  longitude: longitude,
                },

                success: (res) => {
                  let city = res.data.regeocode.addressComponent.city;
                  console.dirxml(city);
                  var currentCity = city;

                  var app = getApp();
                  var cityInfo = app.globalData.cityInfo;
                  if(cityInfo){
                    currentCity = cityInfo.city;
                  }
                  console.dirxml("cityInfo", cityInfo);
                  that.setData({currentCity:currentCity});

                  wx.request({
                      url: 'https://www.afamilyhealth.cn/api/classify',

                      data: {
                        city:currentCity
                      },

                      success: (res) => {
                        console.dirxml("classify", res.data.data);
                        var routes = [];
                        var data = res.data.data
                        var dlen = data.length;
                        for(var j = 0; j < dlen; j++){
                          routes.push({
                            text:data[j].name,
                            icon: '../../images/report.png',
                            route:'../packageDetail/index?id=' + data[j]._id
                          })
                        }

                        var pageItems = [];  
                        var row = [];  
                        // var len = res.data.data.length;//重组PageItems  
                        var len = Math.floor((dlen + 2) / 3) * 3;  
                        for (var i = 0; i < len; i++) {  
                          if ((i + 1) % 3 == 0) {  
                            row.push(routes[i]);  
                            pageItems.push(row);  
                            row = [];  
                            continue;  
                          }  
                          else {  
                            row.push(routes[i]);  
                          }  
                        }  

                        console.dirxml(pageItems);

                        this.setData({  
                          pageItems: pageItems   
                        })  
                        wx.hideToast();
                      },

                      fail: (res) => {
                        // console.dirxml(res.data);
                      },

                      complete: (res) => {
                        // console.dirxml(res.data);
                      }
                  });
                },

                fail: (res) => {
                  // console.dirxml(res.data);
                },

                complete: (res) => {
                  // console.dirxml(res.data);
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
    var that = this;
      wx.getLocation({
            type: 'wgs84',//默认为"wgs84"返回gps坐标
            success: ({latitude, longitude}) => {
              // 调用后台API，获取地址信息

              console.dirxml({latitude, longitude});
              wx.request({
                url: 'https://www.afamilyhealth.cn/api/address/location',

                data: {
                  latitude: latitude,
                  longitude: longitude,
                },

                success: (res) => {
                  let city = res.data.regeocode.addressComponent.city;
                  console.dirxml(city);
                  var currentCity = city;

                  var app = getApp();
                  var cityInfo = app.globalData.cityInfo;
                  if(cityInfo){
                    currentCity = cityInfo.city;
                  }
                  console.dirxml("cityInfo", cityInfo);
                  that.setData({currentCity:currentCity});

                  wx.request({
                      url: 'https://www.afamilyhealth.cn/api/classify',

                      data: {
                        city:currentCity
                      },

                      success: (res) => {
                        console.dirxml("classify", res.data.data);
                        var routes = [];
                        var data = res.data.data
                        var dlen = data.length;
                        for(var j = 0; j < dlen; j++){
                          routes.push({
                            text:data[j].name,
                            icon: '../../images/report.png',
                            route:'../packageDetail/index?id=' + data[j]._id
                          })
                        }

                        var pageItems = [];  
                        var row = [];  
                        // var len = res.data.data.length;//重组PageItems  
                        var len = Math.floor((dlen + 2) / 3) * 3;  
                        for (var i = 0; i < len; i++) {  
                          if ((i + 1) % 3 == 0) {  
                            row.push(routes[i]);  
                            pageItems.push(row);  
                            row = [];  
                            continue;  
                          }  
                          else {  
                            row.push(routes[i]);  
                          }  
                        }  

                        console.dirxml(pageItems);

                        this.setData({  
                          pageItems: pageItems   
                        })  

                      },

                      fail: (res) => {
                        // console.dirxml(res.data);
                      },

                      complete: (res) => {
                        // console.dirxml(res.data);
                      }
                  });
                },

                fail: (res) => {
                  // console.dirxml(res.data);
                },

                complete: (res) => {
                  // console.dirxml(res.data);
                }
              })
            }
          })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  search() {
    wx.navigateTo({
          url: '/pages/search/index'
      })
  },
})