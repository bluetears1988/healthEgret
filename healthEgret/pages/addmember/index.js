// pages/addmember/index.js
Page({
  data:{
    name:'',
    cardID:'',
    nickName:'',
    telephone:'',
    sexy:[{'name':'男','checked':true,'value':0},{'name':'女','checked':false,'value':1}]
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
  nameInput:function(e){
    this.setData({
      name : e.detail.value
    })
  },
  cardIDInput:function(e){
    this.setData({
      cardID : e.detail.value
    })
  },
  nickNameInput:function(e){
    this.setData({
      nickName : e.detail.value
    })
  },
  phoneInput:function(e){
    this.setData({
      telephone : e.detail.value
    })
  },
})