// pages/collectList/index.js
Page({
  data:{
    height: '',
    collects: [{img:'http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg',name:'妇科专项体检套餐',collcetNum:'234', bprice:'198'},
    {img:'http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg',name:'妇科专项体检套餐',collcetNum:'234', bprice:'198'},{img:'http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg',name:'妇科专项体检套餐',collcetNum:'234', bprice:'198'},{img:'http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg',name:'妇科专项体检套餐',collcetNum:'234', bprice:'198'},{img:'http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg',name:'妇科专项体检套餐',collcetNum:'234', bprice:'198'}]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      height:wx.getSystemInfoSync().windowHeight
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
  cardDetail:function(res){
    var id = res.currentTarget.id;
    wx.navigateTo({
        url: '../detail/index?id=' + id
    })
  }
})