// pages/pckoforg/index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data:{
    info:{},
    card:{},
    org:{},
    selectedOrg:false,
    count:0,
    elecard:true,
    totalPrice:0,
    onePrice: '',
    // org:{
    //   "nm":"万年县人民医院",
    //   "distance":"3.2",
    //   "from":0,
    // },
    // pkg:{
    //   "zprice":"198",
    //   "price":"345"
    // },
    showModalStatus:false,
    // tabs: ["套餐简介","体检项目","机构详情"],
    tabs:[],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    console.dirxml("options", options);
    wx.getSystemInfo({
        success: function(res) {
            var tabs = [];
            if(options.from === 'card'){
              tabs = ["套餐简介","体检项目"];
            }else if(options.from === 'org'){
              tabs = ["套餐简介","机构详情"];
            }else if(options.from === 'classify'){
              tabs = ["套餐简介","体检项目","机构详情"];
            }

            that.setData({
                sliderLeft: (res.windowWidth / tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / tabs.length * that.data.activeIndex,
                info:options,
                onePrice:options.realprice,
                tabs:tabs,
                selectedOrg:true
            });

            wx.showToast({
              icon: 'loading',
              success: function () {
                wx.request({
                    url: 'https://www.afamilyhealth.cn/api/card',

                    data: {
                      'institutions':options.org,
                      'name':options.card
                    },

                    success: (res) => {
                      console.dirxml("card", res.data.data[0]);
                      that.setData({ card: res.data.data[0]});
                      wx.hideToast();
                    },

                    fail: (res) => {
                      // console.dirxml(res.data);
                    },

                    complete: (res) => {
                      // console.dirxml(res.data);
                    }
                });

                wx.request({
                      url: 'https://www.afamilyhealth.cn/api/institution',

                      data: {
                        name:options.org
                      },

                      success: (res) => {
                        console.dirxml("org", res.data.data[0]);
                        that.setData({ org: res.data.data[0]})
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
    });


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
  },
  numDec: function(){
    if(this.data.count > 0){
      this.setData({
          count: --this.data.count,
          totalPrice: this.data.count*this.data.onePrice
        })
    }
  },
  numAdd: function(){
    if(this.data.count < 20){
      this.setData({
          count: ++this.data.count,
          totalPrice: this.data.count*this.data.onePrice

        })
    }
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
  next: function (res){
    var ctype = this.data.elecard?'elecard':'entity';
    var num = this.data.count;
    var card = this.data.card.name;
    var img = this.data.card.images[0];
    var org = this.data.info.org;
    var oneprice = this.data.onePrice;
    var city = this.data.card.city;
    wx.navigateTo({
          url: '/pages/ordersubmit/index?org=' + org + '&ctype=' + ctype + '&num=' + num + '&oneprice=' + oneprice + '&card=' + card + '&img=' + img + '&city=' + city
      }) 
  },
  tabClick: function (e) {
      this.setData({
          sliderOffset: e.currentTarget.offsetLeft,
          activeIndex: e.currentTarget.id
      });
  },
  otherOrgs:function(e){
    wx.navigateBack();  //返回上一个页面
  },
  otherCards:function(e){
    wx.navigateBack();  //返回上一个页面
  }
})