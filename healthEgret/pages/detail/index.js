// pages/detail/index.js
Page({
  data:{
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
    card:{},
    isCollected:false,
    organizes:[],
    // card:{"id":1,"nm":"妇女专项体检套餐","female":true,"male":false,"all":false,"people":"中老年已婚妇女","symptom":"卵巢","zprice":198,"price":312,"sales":2000,
    // "img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg","count":34,"collect":false,"collect_num":300,"ship":"0.00"},
    // organizes:[{"code":123,"o_nm":"万年县人民医院","zprice":"198","price":"386","distance":"3.5","img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg","score":"5"},
    // {"code":123,"o_nm":"万年县中医院","zprice":"198","price":"386","distance":"3.5","img":"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg","score":"5"}],
    showModalStatus:false,
    selectOrgModal:false,
    elecard:true,
    count: 0,
    totalPrice:0,
    onePrice: '',
    selectedOrg:false,
    org:'请先选择体检机构'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options) 
    var that = this;
    wx.showToast({
      icon: 'loading',
      success: function (){
          wx.request({
            url: 'https://www.afamilyhealth.cn/api/card',

            data: {
              _id:options.id
            },

            success: (res) => {
              var c = {};
              if(res.data.data.length > 0){
                c = res.data.data[0];
              }else{
                return false;
              }
              that.setData({ card: c });
              wx.hideToast();
              wx.request({
                url: 'https://www.afamilyhealth.cn/api/institution',

                data: {
                  city: c['city'],
                  'cards.name': c['name']
                },

                success: (res) => {
                  var data = res.data.data;
                  console.dirxml("organizes", res.data.data);

                  for(var i = 0; i < data.length; i++){
                    let card = data[i].cards.filter(function(item){
                        if(item.name === that.data.card['name']) return true;
                        return false;
                      });
                    console.dirxml(card);
                    if(card.length > 0){
                      data[i].currentCard = card[0];
                    }else{
                      data[i].currentCard = {};
                    }
                    
                  }
                  that.setData({ organizes: data})
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
      });

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
  backHome: function(e){
    console.log("23234");
    wx.switchTab({
          url: '/pages/index/index'
      })
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
  selectOrg: function () {
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
        selectOrgModal: true
      })
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
  },
  next: function (res){
    // var ctype =  res.currentTarget.ctype;
    // var id =  res.currentTarget.id;
    // var num =  res.currentTarget.num;

    var ctype = this.data.elecard?'elecard':'entity';
    var num = this.data.count;
    var card = this.data.card.name;
    var img = this.data.card.images[0];
    var org = this.data.org;
    var oneprice = this.data.onePrice;
    var city = this.data.card.city;
    wx.navigateTo({
          url: '/pages/ordersubmit/index?org=' + org + '&ctype=' + ctype + '&num=' + num + '&oneprice=' + oneprice + '&card=' + card + '&img=' + img + '&city=' + city
      }) 
  },
  o_p_detail: function(e){
    // console.dirxml(e.currentTarget.dataset.org);
    // var org = e.currentTarget.dataset.org;
    // var card = e.currentTarget.dataset.card;
    // var price = e.currentTarget.dataset.price;
    // var realprice = e.currentTarget.dataset.realprice;
    wx.navigateTo({
          url: '/pages/pckoforg/index?card=' + e.currentTarget.dataset.card + '&org=' + e.currentTarget.dataset.org + '&dis=' + 0 + '&from=org&price=' + e.currentTarget.dataset.price + '&realprice=' + e.currentTarget.dataset.realprice
      }) 
  },
  itemChecked: function(e){
    console.dirxml(e.currentTarget.dataset.org);
    this.setData({
      org: e.currentTarget.dataset.org,
      selectedOrg: true,
      onePrice: e.currentTarget.dataset.real_price
    });

    this.hideModal();
    // console.dirxml(e);

  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var arr =  e.detail.value.split('#');
    this.setData({
          org: arr[0],
          selectedOrg: true,
          onePrice: arr[1]
        })
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
  }
})