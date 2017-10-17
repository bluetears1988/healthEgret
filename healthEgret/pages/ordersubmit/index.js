// pages/ordersubmit/index.js
Page({
  data:{
    // item:{
    //   "img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg",
    //   "id":12,
    //   "nm":"妇女专项体检套餐",
    //   "ctype":"短信",
    //   "zprice":"198",
    //   "num":1,
    //   "organize":"万年县人民医院"
    // },
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
        console.dirxml(Object.assign(e.detail.value, that.data.orderInfo, that.data.formData, {bookDate: now,totalprice: totalprice,status: 0}));
        var f = Object.assign(e.detail.value, that.data.orderInfo, that.data.formData, {bookDate: now,totalprice: totalprice,status: 0,user:res.userInfo.nickName});

        // console.dirxml("usrInfo", that.globalData.userInfo);
        var ogrInfo = {};
        wx.request({
            url: 'https://www.afamilyhealth.cn/api/institution',

            data: {
              city: that.data.orderInfo['city'],
              name: that.data.orderInfo['org']
            },

            success: (res) => {
              var data = res.data.data[0];
              console.dirxml("organizes", res.data.data);

              ogrInfo = {
                name:data.name,
                address:data.address,
                phone:data.telephone
              }

              console.dirxml(Object.assign(f, {'org':ogrInfo}));

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
    
    // wx.navigateTo({
    //       url: '/pages/payment/index?id='
    //   }) 
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