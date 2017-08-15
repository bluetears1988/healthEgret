// pages/organization/index.js
Page({
  data:{
    org:{
      "id":12,
      "nm":"万年县人民医院",
      "type":"公立医院",
      "score":"5.0",
      "num":"500",
      "address":"江西省上饶市万年县",
      "telephone":"0793-387642",
      "pkgnum":12,
      "msgnum":100,
    },
    projects:[{
      "nm":"妇女专项体检套餐",
      "img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "zprice":"198",
      "price":"375",
      "id":12
    },{
      "nm":"妇女专项体检套餐",
      "img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "zprice":"198",
      "price":"375",
      "id":12
    },{
      "nm":"妇女专项体检套餐",
      "img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "zprice":"198",
      "price":"375",
      "id":12
    }],
    messages:[{
      "account":"18810296418",
      "date":"2017-07-03 10:22",
      "comment":"很干净，服务很好",
      "score":"3.5"

    },{
      "account":"18810296418",
      "date":"2017-07-03 10:22",
      "comment":"很干净，服务很好",
      "score":"3.5"

    }]
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
  },
  o_p_detail: function(e){
    wx.navigateTo({
          url: '/pages/pckoforg/index'
      }) 
  },
  all_comment: function(e){
    wx.navigateTo({
          url: '/pages/comment/index'
      }) 
  },
})