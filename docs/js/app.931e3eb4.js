(function(t){function e(e){for(var o,s,l=e[0],i=e[1],u=e[2],p=0,f=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/glosa-admin/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"49f8":function(t,e,n){var o={"./en.json":"edd4"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="49f8"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app container"},[t.$store.state.loading?n("Loading"):t._e(),t.$store.state.authorization?n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("All")]),t._v(" | "),n("router-link",{attrs:{to:"/logout"}},[t._v("Logout")])],1):t._e(),n("router-view")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"})},l=[],i={name:"Loading"},u=i,c=n("2877"),p=Object(c["a"])(u,s,l,!1,null,null,null),f=p.exports,d={name:"App",components:{Loading:f}},m=d,v=Object(c["a"])(m,r,a,!1,null,null,null),g=v.exports,h=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("img",{staticClass:"login__logo",attrs:{alt:"Logo",src:"img/icons/apple-touch-icon-152x152.png"}}),n("form",[n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"input-url"}},[t._v("URL Server")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-input",attrs:{type:"text",id:"input-url",placeholder:"https://my-glosa-instance.com"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"input-token"}},[t._v("Token")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],staticClass:"form-input",attrs:{type:"text",id:"input-token",placeholder:"q1w2e23r4t..."},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}})]),n("Button",{staticClass:"login__btn",attrs:{text:"LogIn",disabled:""===t.url||""===t.token},on:{click:function(e){return e.preventDefault(),t.checkToken(e)}}})],1)])},b=[],k=n("bc3a"),O=n.n(k),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-primary",attrs:{disabled:t.$store.state.loading}},[t._v(" "+t._s(t.text)+" ")])},x=[],L={name:"Button",props:{text:String}},w=L,C=Object(c["a"])(w,y,x,!1,null,null,null),E=C.exports,j={name:"LogIn",components:{Button:E},data:function(){return{url:"",token:""}},methods:{checkToken:function(){O.a.defaults.headers.common["Authorization"]="Bearer ".concat(this.token),O.a.post("".concat(this.$store.state.preURLAPI,"token/check/")).then((function(t){console.log(t),t.data.valid?console.log("sssssii yupi"):console.log("noooo")})).catch((function(t){console.log(t)}))}}},P=j,A=Object(c["a"])(P,_,b,!1,null,null,null),N=A.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments"},[n("h1",[t._v("This is an about page")])])}],U={name:"Comments",components:{}},T=U,B=Object(c["a"])(T,S,$,!1,null,null,null),I=B.exports;o["a"].use(h["a"]);var D=[{path:"/",name:"LogIn",component:N},{path:"/comments",name:"Comments",component:I}],M=new h["a"]({routes:D}),R=M,z=n("2f62");o["a"].use(z["a"]);var V=new z["a"].Store({state:{preURLAPI:"/api/v1/",loading:!1,domain:"",token:"",authorization:!1},mutations:{},actions:{},modules:{}}),J=(n("4160"),n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0"),n("a925"));function F(){var t=n("49f8"),e={};return t.keys().forEach((function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var r=o[1];e[r]=t(n)}})),e}o["a"].use(J["a"]);var q=new J["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/glosa-admin/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/glosa-admin/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:F()});o["a"].config.productionTip=!1,new o["a"]({router:R,store:V,i18n:q,render:function(t){return t(g)}}).$mount("#app")},edd4:function(t){t.exports=JSON.parse('{"message":"hello i18n !!"}')}});
//# sourceMappingURL=app.931e3eb4.js.map