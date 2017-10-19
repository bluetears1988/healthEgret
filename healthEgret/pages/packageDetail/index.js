Page({
  data:{
    priceSortUp:false,
    filterShow:false,
    text:"Page packageDetail",
    groups:[
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"9000",
        lowest_price:"980",
        count:200
      },
      {
        title:"adfsdfsdfdsfeffeffsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdffsfsffs",
        shichang_price:"900",
        lowest_price:"680",
        count:200
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
        count:200
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
        count:200
      },
      {
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
        count:200
    },{
        title:"adfsdfsdfdsfeffef",
        shichang_price:"900",
        lowest_price:"680",
        count:200
    }],
    pkgUrls:[{
      imgurl:"",
      pkgname:"入职体检",
      color:"green"
    },
    {
      imgurl:"",
      pkgname:"入职体检",
      color:"red"
    },
    {
      imgurl:"",
      pkgname:"入职体检",
      color:"black"
    }
    ],
    tab_pkg:true,
    salesFirstSelected:false,
    sortByPriceSelected:false,
    arrow_up:false,
    arrow_down:false,
    height:'',
    num:12
  },
  backHome: function(e){
    wx.navigateTo({
          url: '/pages/index/index'
      })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数\
    var screen_height = wx.getSystemInfoSync().windowHeight - 225;

    this.setData({
      height:screen_height
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
  sortByPrice: function(){
    var that = this;
    this.setData({
      sortByPriceSelected:true,
      salesFirstSelected:false,
      priceSortUp:false,
      filterShow:false
    })

    var asc = null;
    if(this.data.arrow_up){
      this.setData({
        arrow_up: false,
        arrow_down: true
      });

      asc = 1;
    }else{
      this.setData({
        arrow_up: true,
        arrow_down: false
      });

      asc = -1;
    }

    wx.showToast({
      icon: 'loading',
      success: function (){
        wx.request({
            // url: 'https://www.afamilyhealth.cn/api/card',

            // data: {
            //   city:that.data.currentCity,
            //   'sort.bprice':asc
            // },

            // success: (res) => {
            //   console.dirxml("infos", res.data.data);
            //   that.setData({ infos: res.data.data });
            //   wx.hideToast();
            // },

            // fail: (res) => {
            //   // console.dirxml(res.data);
            // },

            // complete: (res) => {
            //   // console.dirxml(res.data);
            // }
        });
      }
    });
  },
  salesFirst: function(){
    var that = this;
    this.setData({
      sortByPriceSelected:false,
      arrow_up: false,
      arrow_down: false,
      salesFirstSelected:true,
      priceSortUp:false,
      filterShow:false
    });

    wx.showToast({
      icon: 'loading',
      success: function (){
        // wx.request({
        //   url: 'https://www.afamilyhealth.cn/api/card',

        //   data: {
        //     city:that.data.currentCity,
        //     'sort.sales':-1
        //   },

        //   success: (res) => {
        //     console.dirxml("infos", res.data.data);
        //     that.setData({ infos: res.data.data });
        //     wx.hideToast();
        //   },

        //   fail: (res) => {
        //     // console.dirxml(res.data);
        //   },

        //   complete: (res) => {
        //     // console.dirxml(res.data);
        //   }
        // });
      }
    });
  },
  // sortByPrice: function(){  
  //   this.setData({
  //     sortByPriceSelected:true,
  //     salesFirstSelected:false,
  //     priceSortUp:false,
  //     filterShow:false
  //   })

  //   if(this.data.arrow_up){
  //     this.setData({
  //       arrow_up: false,
  //       arrow_down: true
  //     })
  //   }else{
  //     this.setData({
  //       arrow_up: true,
  //       arrow_down: false
  //     })
  //   }
  // },
  // salesFirst: function(){
  //   this.setData({
  //     sortByPriceSelected:false,
  //     arrow_up: false,
  //     arrow_down: false,
  //     salesFirstSelected:true,
  //     priceSortUp:false,
  //     filterShow:false
  //   })
  // },
  o_p_detail: function(e){
  wx.navigateTo({
        url: '/pages/pckoforg/index'
    }) 
  },
})