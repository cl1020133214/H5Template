import api from './install'
import Vue from 'vue'

Vue.use(api);
//项目ID
var pid = "5dcbbb4d0b22832f3896d208";
//微信分享内容
var share = {
    title: '这是一封来自百联奥特莱斯广场（上海·青浦）的惊喜，不信你打开！',
    desc: '感恩回馈，爱礼“莱”袭！',
    link: 'https://c.kdcer.com/customer/index?pid=5dcbbb4d0b22832f3896d208',
    imgUrl: 'https://wxcdn.kdcer.com/al_syb/shareimg_67.png'
};
export default {
    install(Vue) {
        //获取页面上的参数信息 ：使用方式this.GetUrlParam("***")
        Vue.prototype.GetUrlParam = function (paraName) {
            var url = document.location.toString();
            var arrObj = url.split("?");

            if (arrObj.length > 1) {
                var arrPara = arrObj[1].split("&");
                var arr;

                for (var i = 0; i < arrPara.length; i++) {
                    arr = arrPara[i].split("=");

                    if (arr != null && arr[0] == paraName) {
                        return arr[1];
                    }
                }
                return "";
            } else {
                return "";
            }
        };
        //微信SDK
        Vue.prototype.wxConfig = function (callback) {
            // 这里用try catch包裹，请求失败的时候就执行catch里的
            console.log("链接", window.location.href.split('#')[0]);
            try {
                let params = {
                    Url: encodeURIComponent(window.location.href.split('#')[0])
                };
                this.$api.matches.wx_get_sdk_config(params).then(data => {
                    wx.config({
                        debug: false,
                        appId: data.app_id,
                        timestamp: data.timestamp,
                        nonceStr: data.nonce_str,
                        signature: data.signature,
                        jsApiList: ['updateTimelineShareData', 'updateAppMessageShareData']
                    });
                    wx.ready(function () {
                        wx.updateTimelineShareData({
                            title: share.title,
                            link: share.link,
                            imgUrl: share.imgUrl,
                            success: function () {
                                callback && typeof callback === 'function' && callback();
                            }
                        });

                        wx.updateAppMessageShareData({
                            title: share.title,
                            desc: share.desc,
                            link: share.link,
                            imgUrl: share.imgUrl,
                            success: function () {
                                callback && typeof callback === 'function' && callback();
                            }
                        });
                    });
                })
            } catch (e) {
                console.log('​catch -> e', e)
            }
        };
        //活动时间返回
        Vue.prototype.getActivitytime = function (paraName) {
            return new Promise((resolve, reject) => {
                let params = {
                    pid: pid
                };
                this.$api.matches.Activitytime(params).then(res => {
                    resolve(res);
                }).catch(err => {
                    console.log(err);
                    reject(err);
                });
            })
        };
        //抽奖
        Vue.prototype.getrandomPrize = function (paraName) {
            return new Promise((resolve, reject) => {
                let params = {
                    uid: paraName,
                    pid: pid
                };
                this.$api.matches.randomPrize(params).then(res => {
                    resolve(res);
                }).catch(err => {
                    console.log(err);
                    reject(err);
                });
            })
        };
        //奖品核销
        Vue.prototype.getcheckMyPrize = function (paraName) {
            return new Promise((resolve, reject) => {
                let params = {
                    uid: paraName,
                    pid: pid
                };
                this.$api.matches.checkMyPrize(params).then(res => {
                    resolve(res);
                }).catch(err => {
                    console.log(err);
                    reject(err);
                });
            })
        };
        //查看奖品信息
        Vue.prototype.getMyPrize = function (paraName) {
            return new Promise((resolve, reject) => {
                let params = {
                    uid: paraName,
                    pid: pid
                };
                this.$api.matches.MyPrize(params).then(res => {
                    resolve(res);
                }).catch(err => {
                    console.log(err);
                    reject(err);
                });
            })
        };
    }
}
