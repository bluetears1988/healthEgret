// pages/member/index.js
Page({
  data:{
    num:10,
    member:{},
    reports:[]
    // "member": {"id":1,"portrait":"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg","name":"小姑子","score":100,
    // "telephone":"18810296418","details":{
    //   "2017":[{"rid":"233434","time":"1.27","nm":"男科专项体检套餐"},{"rid":"233434","time":"1.27","nm":"男科专项体检套餐"}],
    //   "2016":[{"rid":"233434","time":"1.27","nm":"男科专项体检套餐"},{"rid":"233434","time":"1.27","nm":"男科专项体检套餐"}]}
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    console.dirxml(options);
    wx.showToast({
      icon: 'loading',
      success: function (){
        that.setData({member:options});
        wx.request({
          url: 'https://www.afamilyhealth.cn/api/reports',

          data: {
            idcard:options.idcard,
            'sort.date':-1
          },

          success: (res) => {
            console.dirxml("reports", res.data.data);
            that.setData({ reports: res.data.data });
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
  },
  makePhoneCall: function(e){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.telephone.toString(),
      success: function(){
        console.log('成功拨打电话');
      }
    });
  },
  cancleFocus: function(e){
    wx.showModal({
          title: '提示',
          content: '确认删除该家庭成员？',
          success: function(res) {
            if (res.confirm) {
              wx.showToast({
                title:'删除中',
                icon: 'loading',
                success: function () {
                  console.dirxml(e.currentTarget.id);
                    wx.request({
                        url: 'https://www.afamilyhealth.cn/api/members/' + e.currentTarget.id,
                        method:'DELETE',

                        success: (res) => {
                            console.dirxml(res);
                            wx.switchTab({
                                // url: '/pages/orderlist/index?activeIndex=' + that.data.activeIndex
                                url: '../family/index'
                            }) 
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
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})