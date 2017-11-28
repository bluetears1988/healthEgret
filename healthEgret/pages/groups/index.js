// pages/groups/index.js
var routes = require('router');  
Page({
  data:{
    cellHeight: '155px',  
    pageItems: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      var pageItems = [];  
      var row = [];  
      var len = routes.PageItems.length;//重组PageItems  
      len = Math.floor((len + 2) / 3) * 3;  
      for (var i = 0; i < len; i++) {  
        if ((i + 1) % 3 == 0) {  
          row.push(routes.PageItems[i]);  
          pageItems.push(row);  
          row = [];  
          continue;  
        }  
        else {  
          row.push(routes.PageItems[i]);  
        }  
      }  

      console.dirxml(pageItems);
      // wx.getSystemInfo({  
      //   success: function (res) {  
      //     var windowWidth = res.windowWidth;  
      //     that.setData({  
      //       cellHeight: (windowWidth / 3) + 'px'  
      //     })  
      //   },  
      //   complete: function () {  
      //     that.setData({  
      //       pageItems: pageItems  
      //     })  
      //   }  
      // }) 
      // var windowWidth = res.windowWidth;  
      this.setData({  
        // cellHeight: (windowWidth / 3) + 'px',
        pageItems: pageItems   
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
  search() {
    wx.navigateTo({
          url: '/pages/search/index'
      })
  },
})