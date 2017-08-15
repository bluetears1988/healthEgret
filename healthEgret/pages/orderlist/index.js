var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["全部", "待支付", "已预约","已出报告"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        item:{"img":"http://p0.meituan.net/165.220/movie/02ac72c0e8ee2987f7662ad921a2acc7999433.jpg","id":12,"nm":"妇女专项体检套餐","ctype":"短信",
        "zprice":198,"num":2,"count":396,"date":"2017-07-11","org":"万年县人民医院"}
    },
    onLoad: function () {
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
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    orderdetail: function(e){
        wx.navigateTo({
          url: '/pages/orderdetail/index'
      })
    }
});