// pages/family/index.js
Page({
  data:{
    num:2,
    members:''
    // "members":[{"id":1,"portrait":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","name":"小姑子","score":100,"telephone":"18810296418"},
    // {"id":2,"portrait":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","name":"小姑子","score":100,"telephone":"18810296418"}],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.showToast({
      icon: 'loading',
      success: function (){
        wx.getUserInfo({
          success: function (res) {
            var user = res.userInfo.nickName;
            wx.request({
              url: 'https://www.afamilyhealth.cn/api/members',

              data: {
                user:user
              },

              success: (res) => {
                console.dirxml("members", res.data.data);
                that.setData({ members: res.data.data });
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
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var that = this;
    wx.showToast({
      icon: 'loading',
      success: function (){
        wx.getUserInfo({
          success: function (res) {
            var user = res.userInfo.nickName;
            wx.request({
              url: 'https://www.afamilyhealth.cn/api/members',

              data: {
                user:user
              },

              success: (res) => {
                console.dirxml("members", res.data.data);
                that.setData({ members: res.data.data });
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
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  detail: function (res) {
      var id = res.currentTarget.id;
      var index = res.currentTarget.dataset.index;
      var idcard = res.currentTarget.dataset.idcard;
      var member = this.data.members[index];
      wx.navigateTo({
          url: '../member/index?idcard=' + idcard  + '&nickName='  + member['nickName'] + '&telephone='  + member['telephone'] + '&score='  + member['score'] + '&id='  + id
      })
      // console.log(e);
  },
  addmember: function (res) {
      wx.navigateTo({
          url: '../addmember/index'
      })
      // console.log(e);
  },
  makePhoneCall: function(e){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.telephone.toString(),
      success: function(){
        console.log('成功拨打电话');
      }
    });
  }
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