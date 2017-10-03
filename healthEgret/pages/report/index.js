// pages/report/index.js
Page({
  data:{
    num:2,
    abnormal:[{name:'乳房', detail:'双侧乳腺弥漫性增厚，双侧乳腺弥漫性增厚，双侧乳腺弥漫性增厚，双侧乳腺弥漫性增厚，'},
    {name:'乳房', detail:'双侧乳腺弥漫性增厚，双侧乳腺弥漫性增厚，双侧乳腺弥漫性增厚，双侧乳腺弥漫性增厚，'}],
    general:{'shengao':{ 
      'value':'154.5',
      'isAbnormal':false
    },'tizhong':{ 
      'value':'51.5',
      'isAbnormal':false
    },'tizhongzhishu':{
      'value':'21.6',
      'isAbnormal':false,
      'range':'18.5-23.99'
    },'shousuoya':{
      'value':'107',
      'isAbnormal':false,
      'range':'90-139'
    },'shuzhangya':{
      'value':'67',
      'isAbnormal':true,
      'range':'60-89'
    },'summary':'定期复查，定期复查，定期复查，定期复查，定期复查，定期复查，定期复查，定期复查，定期复查，定期复查，定期复查，'},
    isAbnormal:false
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