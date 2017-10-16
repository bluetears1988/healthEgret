//index.js
//获取应用实例
var app = getApp();
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
// var amapFile = require('../../libs/amap-wx.js');

Page({
  data: {
    sexy:[{'name':'通用','value':0},{'name':'男','value':1},{'name':'女','value':2}],
    hosipital_type:[{'name':'公立医院','value':1},{'name':'公立三甲','value':2},{'name':'专科医院','value':3},{'name':'体检机构','value':4},],
    // infos: [{"id":1,"nm":"妇女专项体检套餐","female":true,"male":false,"all":false,"people":"中老年已婚妇女","symptom":"卵巢","zprice":198,"o_nm":"万年县人民医院","o_num":6,"price":312,"sales":2000,"img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg"},
    // {"id":2,"nm":"妇女专项体检套餐","female":false,"male":true,"all":true,"people":"中老年已婚妇女","symptom":"卵巢","zprice":198,"price":312,"sales":2000,"img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg"}],
    infos:[],
    o_infos:[],
    // o_infos:[{"oid":2,"o_nm":"万年县人民医院","address":"县政府路108号","score":"4.5","distance":"1.2","bprice":"200","img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg"}],
    id: '',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    bannerUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    array:['从低到高','从高到低'],
    index:0,
    tab_pkg:true,
    tab_org:false,
    tabs: ["距离优先", "推荐最多"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    address:"",
    salesFirstSelected:false,
    priceSortUp:false,
    filterShow:false,
    showModalStatus:false,
    sortByPriceSelected:false,
    arrow_up:false,
    arrow_down:false,
    filterSexy:'',
    filterType:'',
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  onShareAppMessage: function () {
    return {
      title: '一家健康 一生守护',
      path: '/page/user?id=123',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  shopCarDetail: function(e){
    var id = 1;
    wx.navigateTo({
          url: '/pages/shopcar/index?id=' + id
      })
  },
  sortByPrice: function(){  
    this.setData({
      sortByPriceSelected:true,
      salesFirstSelected:false,
      priceSortUp:false,
      filterShow:false
    })

    if(this.data.arrow_up){
      this.setData({
        arrow_up: false,
        arrow_down: true
      })
    }else{
      this.setData({
        arrow_up: true,
        arrow_down: false
      })
    }
  },
  salesFirst: function(){
    this.setData({
      sortByPriceSelected:false,
      arrow_up: false,
      arrow_down: false,
      salesFirstSelected:true,
      priceSortUp:false,
      filterShow:false
    })
  },
  filter: function(){
    this.setData({
      sortByPriceSelected:false,
      salesFirstSelected:false,
      priceSortUp:false,
      filterShow:true,
    });
    this.showModal();
  },
  showModal: function () {
      // 显示遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      // setTimeout(function () {
      //   animation.translateY(300).step()
      //   this.setData({
      //     animationData: animation.export()
      //   })
      // }.bind(this), 200)
  },
  hideModal: function () {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      // animation.translateY(300).step()
      // this.setData({
      //   animationData: animation.export(),
      // })
      animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false,
          filterShow:false
        })
      // setTimeout(function () {
      //   animation.translateY(0).step()
      //   this.setData({
      //     animationData: animation.export(),
      //     showModalStatus: false,
      //     filterShow:false
      //   })
      // }.bind(this), 200)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	// //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    //   that.update()
    // })

    // wx.request({
    //     url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
    //     data: {},
    //     method: 'GET',
    //     success: function (res) {
    //         // success
    //         // console.log(res);
    //         // console.log(res);
    //         that.setData({
    //             infos: res.data.data.movies
    //         })
    //     },
    //     fail: function () {
    //         // fail
    //     },
    //     complete: function () {
    //         // complete
    //     }
    // })


    // var myAmapFun = new amapFile.AMapWX({key:'30b51a1d3f87e7ee63ee08599b532b17'});
    // myAmapFun.getRegeo({
    //   success: function(data){
    //     //成功回调
    //     console.dirxml(data);
    //   },
    //   fail: function(info){
    //     //失败回调
    //     console.log(info)
    //   }
    // })
    //获取当前经纬度信息
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
            let township = res.data.regeocode.addressComponent.township;
            var streetnumber = res.data.regeocode.addressComponent.streetNumber.streetnumber;
            var street = res.data.regeocode.addressComponent.streetNumber.street;
            let streetinfo = street?street:'' + streetnumber?streetnumber:'';
            let info = city + township + streetinfo;
            // that.currentCity = city;
            console.dirxml(city);
            this.setData({ address: info });


            wx.request({
                url: 'https://www.afamilyhealth.cn/api/card',

                data: {
                  city:city
                },

                success: (res) => {
                  console.dirxml("infos", res.data.data);
                  this.setData({ infos: res.data.data })
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
                  city:city
                },

                success: (res) => {
                  console.dirxml("o_infos", res.data.data);
                  this.setData({ o_infos: res.data.data })
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

    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });

    

  },
  detail: function (res) {
      var id = res.currentTarget.id;
      wx.navigateTo({
          url: '../detail/index?id=' + id
      })
      // console.log(e);
  },
  tabpkgTran: function(e){
    this.setData({
      tab_pkg:true,
      tab_org:false
    })
    // console.log(this.data.tab_pkg);
  },
  taborgTran: function(e){
    this.setData({
      tab_pkg:false,
      tab_org:true
    })
    // console.log(this.data.tab_pkg);
  },
  tabClick: function (e) {
      this.setData({
          sliderOffset: e.currentTarget.offsetLeft,
          activeIndex: e.currentTarget.id
      });
  },
  change_city: function(e){
    wx.navigateTo({
        url: '../city/index'
    })
  },
  o_detail: function(e){
    wx.navigateTo({
        url: '../organization/index'
    })
  },
  sexyRadioChange: function(e) {
    this.setData({
      filterSexy: e.detail.value,
    });
    
  },
  typeRadioChange: function(e) {
    this.setData({
      filterType: e.detail.value,
    });
    
  }
})
