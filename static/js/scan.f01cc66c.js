(window.webpackJsonp=window.webpackJsonp||[]).push([["scan"],{"15d4":function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"a",function(){return c}),r.d(e,"b",function(){return o});var n=r("b775");function a(t){return Object(n.a)({url:"/b2c/rest/front/ordercheck/detail",method:"get",params:t})}function c(t){return Object(n.a)({url:"/b2c/rest/front/ordercheck/check",method:"post",data:t})}function o(t){return Object(n.a)({url:"/b2c/rest/front/ordercheck/list",method:"get",params:t})}},"45b5":function(t,e,r){},"5cf8":function(t,e,r){"use strict";r.r(e);r("ea65"),r("6a61");var n,a,c=r("cf7f"),o=r("7b04"),s=r.n(o),i=r("15d4"),u=r("c24f"),d=(r("653a"),function(t){s.a.config({debug:!0,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.noticeStr,signature:t.data.signature,jsApiList:["closeWindow","scanQRCode"]}),s.a.ready(function(){s.a.checkJsApi({jsApiList:["closeWindow","scanQRCode"],success:function(){}})}),s.a.error(function(t){})}),f={name:"Scan",data:function(){return{code:""}},mounted:function(){this.getWxConfig()},methods:{getWxConfig:(a=Object(c.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.href.split("#")[0],t.next=4,Object(u.a)({url:e});case 4:r=t.sent,d(r),this.scanCode();case 8:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),scanCode:function(){s.a.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){var e=t.resultStr;this.$toast(e)}})},onClickLeft:function(){this.$router.back(-1)},toHandle:function(){this.$router.push("/check")},onDecode:function(t){this.code=t},onLoaded:function(){},onError:function(){this.$toast.fail("出错了")},orderDetail:(n=Object(c.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={checkNo:this.code},t.next=3,Object(i.c)(e);case 3:(r=t.sent).data&&r.data.orderDetailDTO&&r.data.orderCheckDTO?(this.$store.dispatch("setGoodsCheckNo",this.value),this.$store.dispatch("setGoodsDetail",r.data.orderDetailDTO),this.$store.dispatch("setOrderCheckDTO",r.data.orderCheckDTO),this.$router.push("/ecard")):this.$toast.fail("暂时无法查到对应订单");case 5:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})}},h=(r("bc4a"),r("b42e"),r("9ca4")),l=Object(h.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-nav-bar",{attrs:{title:"扫一扫","left-text":"","right-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}})],1)},[],!1,null,"32aa63e6",null);e.default=l.exports},8757:function(t,e,r){},b42e:function(t,e,r){"use strict";var n=r("8757");r.n(n).a},b775:function(t,e,r){"use strict";r("aa8d");var n=r("b89e"),a=r("cebe"),c=r.n(a),o=r("653a"),s=(r("a18c"),r("5f87")),i=c.a.create({baseURL:"",timeout:5e3});i.interceptors.request.use(function(t){return t.headers["TENANT-ID"]="1",Object(s.a)()&&(t.headers.Auth="Bearer "+Object(s.a)()),t},function(t){return Promise.reject(t)}),i.interceptors.response.use(function(t){var e=t.data;return 0!==e.code?Promise.reject(new Error(e.msg||"Error")):e},function(t){switch(t.response.status){case 401:n.a.fail({message:t.response.data.msg,duration:1500}),Object(s.b)(),o.a.dispatch("setToken","").then(function(){location.reload()});break;case 404:n.a.fail("网络请求不存在");case 403:n.a.fail(t.response.data.msg);break;default:n.a.fail(t.response.data.msg)}return Promise.reject(t)}),e.a=i},bc4a:function(t,e,r){"use strict";var n=r("45b5");r.n(n).a},c24f:function(t,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"a",function(){return c});var n=r("b775");function a(t){return Object(n.a)({url:"/mbr/rest/front/mbrMchClerk/login",method:"post",data:t})}function c(t){return Object(n.a)({url:"/mbr/rest/front/mbrMchClerk/getWxAuthConfig",method:"post",data:t})}}}]);