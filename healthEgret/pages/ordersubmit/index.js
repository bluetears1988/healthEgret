// pages/ordersubmit/index.js
Page({
  data:{
    orderInfo:{},
    reportArray:["纸质报告","电子报告","两者都要"],
    payArray:["在线支付","到院付款"],
    reportIndex:0,
    payIndex:0,
    date:'',
    submitDisabled: true,
    formData:{'medicalMen':[]},
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var medicalMen = [];
    for(let i = 0; i < options.num; i++){
      medicalMen.push({
        name:'',
        idcard:'',
        phone:'',
        checkDate:''
      });
    }

    this.setData({
      orderInfo:options,
      formData:{'medicalMen':medicalMen}
    });

    console.dirxml('orderInfo', this.data.orderInfo);
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
  formSubmit:function(e){
    // console.dirxml(this.data.formData);
    // console.dirxml(e.detail.value);
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.dirxml( res.userInfo);
        // that.globalData.userInfo = res.userInfo;
        
        var D = new Date();
        var now = D.toLocaleDateString();
        var totalprice = that.data.orderInfo.oneprice * that.data.orderInfo.num;
        e.detail.value.authorized = parseInt(e.detail.value.authorized[0]);
        e.detail.value.payMethod = parseInt(e.detail.value.payMethod);
        e.detail.value.reportMethod = parseInt(e.detail.value.reportMethod);
        that.data.orderInfo.num = parseInt(that.data.orderInfo.num);
        console.dirxml(Object.assign(e.detail.value, that.data.orderInfo, that.data.formData, {bookDate: now,totalprice: totalprice,status: 0}));
        var otherInfo = {'bookDate': now,'totalprice': totalprice.toString(),'status': 0,'user':res.userInfo.nickName};
        // for(let i = 0; i < that.data.formData.medicalMen.length; i++){
        //   that.data.formData.medicalMen[i] = JSON.stringify(that.data.formData.medicalMen[i]);
        // }
        console.dirxml(that.data.formData);
        var f = Object.assign(e.detail.value, that.data.orderInfo, that.data.formData, otherInfo);

        // console.dirxml("usrInfo", that.globalData.userInfo);
        var orgInfo = {};
        wx.request({
            url: 'https://www.afamilyhealth.cn/api/institution',

            data: {
              city: that.data.orderInfo['city'],
              name: that.data.orderInfo['org']
            },

            success: (res) => {
              var data = res.data.data[0];
              console.dirxml("organizes", res.data.data);

              orgInfo = {
                name:data.name,
                address:data.address,
                phone:data.telephone
              }

              var postData = Object.assign(f, {'org':orgInfo});
              console.dirxml(postData);

              wx.request({
                  url: 'https://www.afamilyhealth.cn/api/order',
                  method:'POST',
                  // header: {  
                  //   "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"  
                  // }, 
                  header: {  
                    "Content-Type": "application/json;charset=UTF-8"  
                  },

                  data: postData,

                  success: (res) => {
                    // var data = res.data.data[0];
                    // console.dirxml("organizes", res.data.data);

                    // ogrInfo = {
                    //   name:data.name,
                    //   address:data.address,
                    //   phone:data.telephone
                    // }

                    // console.dirxml(Object.assign(f, {'org':ogrInfo}));

                    console.dirxml(res);

                    wx.showToast({
                      title:'提交成功',
                      icon:"success",
                      duration:300,
                      success: function(){
                        wx.redirectTo({
                            url: '../payment/index?id=' + res._id +'&card=' + that.data.orderInfo['card'] + '&org=' + that.data.orderInfo['org'] 
                            + '&num=' + that.data.orderInfo['num'] + '&oneprice=' + that.data.orderInfo['oneprice'] + '&ctype=' + that.data.orderInfo['ctype']
                        })
                      }
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
          });
        
      }
    })
    
     
  },
  bindReportPickerChange:function(e){
    this.setData({
      reportIndex: e.detail.value
    })
  },
  bindPayPickerChange:function(e){
    this.setData({
      payIndex: e.detail.value
    })
  },
  bindDateChange: function(e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      date: e.detail.value
    })

    this.data.formData.medicalMen[index]['checkDate'] = e.detail.value;
  },
  updateMedicalMen: function(e){
    var index = e.currentTarget.dataset.index;
    var attr = e.currentTarget.dataset.attr;
    this.data.formData.medicalMen[index][attr] = e.detail.value;
    // console.dirxml("formData", this.data.formData);
  }
})