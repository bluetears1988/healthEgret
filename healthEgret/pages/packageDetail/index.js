Page({
  data:{
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
    tab_pkg:true
  },
  backHome: function(e){
    wx.navigateTo({
          url: '/pages/index/index'
      })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  }
})