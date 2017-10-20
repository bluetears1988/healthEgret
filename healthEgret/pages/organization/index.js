// pages/organization/index.js
Page({
  data:{
    hosipital_type:['dfsd','dsfs','df','d','公立医院','公立三甲','体检中心','专科医院'],
    // org:{
    //   "id":12,
    //   "nm":"万年县人民医院",
    //   "type":"公立医院",
    //   "score":"5.0",
    //   "num":"500",
    //   "address":"江西省上饶市万年县",
    //   "telephone":"0793-387642",
    //   "pkgnum":12,
    //   "msgnum":100,
    // },
    // projects:[{
    //   "nm":"妇女专项体检套餐",
    //   "img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
    //   "zprice":"198",
    //   "price":"375",
    //   "id":12
    // },{
    //   "nm":"妇女专项体检套餐",
    //   "img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
    //   "zprice":"198",
    //   "price":"375",
    //   "id":12
    // },{
    //   "nm":"妇女专项体检套餐",
    //   "img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
    //   "zprice":"198",
    //   "price":"375",
    //   "id":12
    // }],
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

    }],
    organizes:'',
    dis:'',
    showModalStatus:false,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.showToast({
      icon: 'loading',
      success: function (){
        wx.request({
                url: 'https://www.afamilyhealth.cn/api/institution',

                data: {
                  _id:options.id
                },

                success: (res) => {
                  var data = res.data.data[0];
                  console.dirxml("organizes", res.data.data[0]);

                  // for(var i = 0; i < data.length; i++){
                  //   let card = data[i].cards.filter(function(item){
                  //       if(item.name === that.data.card['name']) return true;
                  //       return false;
                  //     });
                  //   console.dirxml(card);
                  //   if(card.length > 0){
                  //     data[i].currentCard = card[0];
                  //   }else{
                  //     data[i].currentCard = {};
                  //   }
                    
                  // }
                  that.setData({ organizes: data,dis:options.dis})
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
    var card = e.currentTarget.dataset.name;
    var org = this.data.organizes.name;
    var price = e.currentTarget.dataset.price;
    var realprice = e.currentTarget.dataset.realprice;
    wx.navigateTo({
          url: '/pages/pckoforg/index?card=' + card + '&org=' + org + '&dis=' + this.data.dis + '&from=card' + '&price=' + price + '&realprice=' + realprice
      }) 
  },
  all_comment: function(e){
    wx.navigateTo({
          url: '/pages/comment/index'
      }) 
  },
  backHome: function(e){
    wx.navigateTo({
          url: '/pages/index/index'
      })
  },
  showIntroduce: function(e){
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
})