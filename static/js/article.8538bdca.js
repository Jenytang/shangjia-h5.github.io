(window.webpackJsonp=window.webpackJsonp||[]).push([["article"],{"22fb":function(e,t,a){e.exports=a.p+"static/img/login_bg.51c4e3f9.png"},"4c41":function(e,t,n){"use strict";n.r(t);n("6a61");var a=n("cf7f"),r=n("ce3c"),s=(n("c116"),n("352a")),c=(n("3a23"),n("088d"),n("b4dd")),i=n("b775");n("1d45");var o,u,f=n("7d56"),d={name:"My",data:function(){return{active:1,list:[],total:0,page:1,loadedAll:!1}},mounted:function(){this.getList()},components:(o={},Object(r.a)(o,c.a.name,c.a),Object(r.a)(o,s.a.name,s.a),Object(r.a)(o,"FooterTabbar",f.a),o),methods:{pullingDown:function(){this.beforePullDown=!1,this.page=1,this.getList(!1)},pullingUp:function(){this.page+=1,this.getList()},getList:(u=Object(a.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.page,e.next=4,Object(i.a)({url:"/b2c/rest/front/ordercheck/detail",method:"get",params:{orderDetailId:"1300354780324982785"},showLoading:!1});case 4:e.sent;case 5:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})}},l=(n("8811"),n("9ca4")),p=Object(l.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("img",{attrs:{src:n("22fb"),alt:""}}),e._v("\n  我的开发中。。。\n  "),a("footer-tabbar")],1)},[],!1,null,"2a729d3a",null);t.default=p.exports},"6c8a":function(e,t,a){},8811:function(e,t,a){"use strict";var n=a("6c8a");a.n(n).a},b775:function(e,t,a){"use strict";a("aa8d");var n=a("b89e"),r=a("cebe"),s=a.n(r),c=a("653a"),i=(a("a18c"),a("5f87")),o=s.a.create({baseURL:"",timeout:5e3});o.interceptors.request.use(function(e){return e.headers["TENANT-ID"]="1",Object(i.a)()&&(e.headers.Auth="Bearer "+Object(i.a)()),e},function(e){return Promise.reject(e)}),o.interceptors.response.use(function(e){var t=e.data;return 0!==t.code?Promise.reject(new Error(t.msg||"Error")):t},function(e){switch(e.response.status){case 401:n.a.fail({message:e.response.data.msg,duration:1500}),Object(i.b)(),c.a.dispatch("setToken","").then(function(){location.reload()});break;case 404:n.a.fail("网络请求不存在");case 403:n.a.fail(e.response.data.msg);break;default:n.a.fail(e.response.data.msg)}return Promise.reject(e)}),t.a=o}}]);