(window.webpackJsonp=window.webpackJsonp||[]).push([["login"],{3072:function(e,t,o){},6515:function(e,t,o){"use strict";var s=o("8161");o.n(s).a},8161:function(e,t,o){},"8c08":function(e,t,o){},9231:function(e,t,o){"use strict";var s=o("3072");o.n(s).a},ac2a:function(e,t,o){"use strict";o.r(t);var s,n,a=o("ce3c"),r=(o("e411"),o("f030")),i=(o("cc66"),o("2767")),c=(o("3a23"),o("04a0"),o("332b")),l=(o("6a61"),o("cf7f")),d=(o("5880"),o("b06f"),{name:"VerifyCodeBtn",components:Object(a.a)({},r.a.name,r.a),props:{btnMsg:{type:String,default:"发送验证码"},restTime:{type:Number,default:30}},data:function(){return{codeRestTime:0}},methods:{btnClick:function(){var e=this;this.codeRestTime=this.restTime;var t=setInterval(function(){--e.codeRestTime,e.codeRestTime||(clearInterval(t),t=null)},1e3);this.$emit("sendVerifyCode")}}}),u=(o("6515"),o("9ca4")),p=Object(u.a)(d,function(){var e=this,t=e.$createElement;return(e._self._c||t)("van-button",{staticClass:"check-btn",attrs:{size:"mini",type:"default",color:"#44B47C",disabled:!!e.codeRestTime},on:{click:e.btnClick}},[e._v("\n  "+e._s(e.codeRestTime?e.codeRestTime+"S":"发送验证码")+"\n")])},[],!1,null,"b8c864a6",null).exports,f=o("c24f"),b=o("5f87"),m={name:"Login",data:function(){return{logo:o("cf05"),mobile:"13488889999",password:"12345678",code:"",loginWay:"password",passwordType:"password",mobileError:""}},mounted:function(){},methods:{sendVerifyCode:function(){this.mobileError="",this.mobile||(this.mobileError="手机号码必填")},switchPasswordType:function(){this.passwordType="password"===this.passwordType?"text":"password"},switchLoginWay:function(){this.password=this.code="",this.loginWay="password"===this.loginWay?"verifyCode":"password"},handleLogin:(n=Object(l.a)(regeneratorRuntime.mark(function e(){var t,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={mobile:this.mobile,password:this.password,platformType:"b2c",clientType:"WXH5"},e.next=3,Object(f.b)(t);case 3:0===(o=e.sent).code&&(this.$toast.success("登录成功"),Object(b.c)(o.data.token),this.$store.dispatch("setToken",o.data.token),this.$router.push("/"));case 5:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},computed:{loginWayObj:function(){return"password"===this.loginWay?{icon:"closed-eye",toggleMsg:"验证码登录"}:{icon:"eye",toggleMsg:"密码登录"}},passwordIcon:function(){return"password"===this.passwordType?"closed-eye":"eye"}},components:(s={},Object(a.a)(s,c.a.name,c.a),Object(a.a)(s,i.a.name,i.a),Object(a.a)(s,r.a.name,r.a),Object(a.a)(s,"VerifyCodeBtn",p),s)},h=(o("9231"),o("d03e"),Object(u.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg"},[o("div",{staticClass:"header"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:t.logo,alt:"default_logo"}})])]),t._v(" "),o("div",{staticClass:"content"},[o("van-field",{attrs:{placeholder:"请输入手机号","error-message":t.mobileError},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),"password"===t.loginWay?o("van-field",{attrs:{placeholder:"登录密码",type:t.passwordType},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[o("van-icon",{attrs:{slot:"right-icon",name:t.passwordIcon},on:{click:t.switchPasswordType},slot:"right-icon"})],1):o("van-field",{attrs:{placeholder:"请输入验证码",type:"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[o("VerifyCodeBtn",{attrs:{slot:"button"},on:{sendVerifyCode:t.sendVerifyCode},slot:"button"})],1),t._v(" "),o("div",{staticClass:"button-wrap"},[o("div",{staticClass:"login-btn",on:{click:t.handleLogin}},[t._v("登录")])]),t._v(" "),o("div",{staticClass:"more-wrap"},[o("div",{staticClass:"switch-way",on:{click:t.switchLoginWay}},[t._v(t._s(t.loginWayObj.toggleMsg))])])],1)])},[],!1,null,"df5b9be6",null));t.default=h.exports},b775:function(e,t,o){"use strict";o("aa8d");var s=o("b89e"),n=o("cebe"),a=o.n(n),r=o("653a"),i=o("5f87"),c=a.a.create({baseURL:"",timeout:5e3});c.interceptors.request.use(function(e){return e.headers["TENANT-ID"]="1",Object(i.a)()&&(e.headers.Auth="Bearer "+Object(i.a)()),e},function(e){return Promise.reject(e)}),c.interceptors.response.use(function(e){var t=e.data;return 0!==t.code?(401===t.code?s.a.confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then(function(){Object(i.b)(),r.a.dispatch("setToken","").then(function(){location.reload()})}):Object(s.a)(t.msg),Promise.reject(new Error(t.msg||"Error"))):t},function(e){return s.a.fail({message:e.message,duration:1500}),Promise.reject(e)}),t.a=c},c24f:function(e,t,o){"use strict";o.d(t,"b",function(){return n}),o.d(t,"a",function(){return a});var s=o("b775");function n(e){return Object(s.a)({url:"/mbr/rest/front/mbrMchClerk/login",method:"post",data:e})}function a(e){return Object(s.a)({url:"/mbr/rest/front/mbrMchClerk/getWxAuthConfig",method:"post",data:e})}},d03e:function(e,t,o){"use strict";var s=o("8c08");o.n(s).a}}]);