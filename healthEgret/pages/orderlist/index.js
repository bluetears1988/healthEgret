var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["全部", "待支付", "已预约","已出报告"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        // item:{"img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg","id":12,"nm":"妇女专项体检套餐","ctype":"短信",
        // "zprice":198,"num":2,"count":396,"date":"2017-07-11","org":"万年县人民医院"},
        allList:[],
        unpayOrderList:[],
        payOrderList:[],
        finishedList:[],
        user:'',
        status:["待支付", "已预约","已出报告"]
    },
    onLoad: function (options) {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });

        var status = 0;
        if(options.activeIndex){
            that.setData({
                activeIndex:options.activeIndex
            });

            if(options.activeIndex === 0){
                status = 'all';
            }else if(options.activeIndex === 1){
                status = 0;
                arr = 'unpayOrderList';
            }else if(options.activeIndex === 2){
                status = 1;
            }else{
                status = 2;
            }
        }
        

        wx.getUserInfo({
            success: function (res) {
                let user = res.userInfo.nickName;
                that.setData({
                    'user':user
                });

                wx.showToast({
                    icon: 'loading',
                    success: function () {
                        wx.request({
                            url: 'https://www.afamilyhealth.cn/api/order',

                            data: {
                                'user':user,
                                'status':status
                            },

                            success: (res) => {
                                console.dirxml(res);

                                if(options.activeIndex){
                                    if(options.activeIndex === 0){
                                        that.setData({
                                            allList: res.data.data
                                        });
                                    }else if(options.activeIndex === 1){
                                        that.setData({
                                            unpayOrderList: res.data.data
                                        });
                                    }else if(options.activeIndex === 2){
                                        that.setData({
                                            payOrderList: res.data.data
                                        });
                                    }else{
                                        that.setData({
                                            finishedList: res.data.data
                                        });
                                    }
                                }else{
                                    that.setData({
                                        unpayOrderList: res.data.data
                                    });
                                }
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
    tabClick: function (e) {
        var activeIndex = e.currentTarget.id;
        console.log('activeIndex', activeIndex);
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });

        var status = '';
        if(activeIndex === '0'){
            status = 'all';
        }else if(activeIndex === '1'){
            status = 0;
        }else if(activeIndex === '2'){
            status = 1;
        }else{
            status = 2;
        }
        var that = this;
        wx.showToast({
            icon: 'loading',
            success: function () {
                wx.request({
                    url: 'https://www.afamilyhealth.cn/api/order',

                    data: {
                        'user':that.data.user,
                        'status':status
                    },

                    success: (res) => {
                        console.dirxml(res);

                        if(activeIndex === '0'){
                            that.setData({
                                allList: res.data.data
                            });
                        }else if(activeIndex === '1'){
                            that.setData({
                                unpayOrderList: res.data.data
                            });
                        }else if(activeIndex === '2'){
                            that.setData({
                                payOrderList: res.data.data
                            });
                        }else{
                            that.setData({
                                finishedList: res.data.data
                            });
                        }

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
    orderdetail: function(e){
        var id = e.currentTarget.id;
        wx.navigateTo({
          url: '/pages/orderdetail/index?id=' + id
      })
    },
    cancelOrder: function(e){
        var that = this;
        // var status = 0;
        // var arr = '';
        // if(that.data.activeIndex === 0){
        //     status = 'all';
        //     arr = 'allList';
        // }else if(that.data.activeIndex === 1){
        //      status = 0;
        //      arr = 'unpayOrderList';
        // }else if(that.data.activeIndex === 2){
        //      status = 1;
        //      arr = 'payOrderList';
        // }else{
        //     status = 2;
        //     arr = 'finishedList';
        // }
        wx.showModal({
          title: '提示',
          content: '确认删除该订单？',
          success: function(res) {
            if (res.confirm) {
              wx.showToast({
                title:'删除中',
                icon: 'loading',
                success: function () {
                    wx.request({
                        url: 'https://www.afamilyhealth.cn/api/order/' + e.currentTarget.id,
                        method:'DELETE',

                        success: (res) => {
                            console.dirxml(res);
                            // wx.request({
                            //     url: 'https://www.afamilyhealth.cn/api/order',

                            //     data: {
                            //         'user':that.data.user,
                            //         'status':status
                            //     },

                            //     success: (res) => {
                            //         console.dirxml(res);
                            //         that.setData({
                            //             arr: res.data.data
                            //         });
                            //         wx.hideToast();
                            //     },

                            //     fail: (res) => {
                            //         // console.dirxml(res.data);
                            //     },

                            //     complete: (res) => {
                            //         // console.dirxml(res.data);
                            //     }
                            // });
                            wx.navigateTo({
                                // url: '/pages/orderlist/index?activeIndex=' + that.data.activeIndex
                                url: '/pages/orderlist/index'
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
});