(function(e){function t(t){for(var a,r,u=t[0],l=t[1],c=t[2],s=0,m=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function u(e){return l.p+"js/"+({}[e]||e)+".1607448351028.js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-531a009e":1,"chunk-689572b6":1,"chunk-7b711cb5":1,"chunk-336dd27c":1,"chunk-8986b05c":1,"chunk-bfcc95ea":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+".1607448351028.css",i=l.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===i))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){c=m[u],s=c.getAttribute("data-href");if(s===a||s===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var m=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-quasar-manage/",l.oe=function(e){throw e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("b3c3"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o={name:"App"},u=o,l=(n("034f"),n("2877")),c=Object(l["a"])(u,r,i,!1,null,null,null),s=c.exports,m=n("2f62"),d={role:"",routes:[],tagView:[],breadcrumbs:[],keepAliveList:[]},h=d,p={getRole:function(e){return e.role},getRoutes:function(e){return e.routes},getTagView:function(e){return e.tagView},getBreadcrumbs:function(e){return e.breadcrumbs},getKeepAliveList:function(e){return e.keepAliveList}},f=p,g=(n("c975"),n("b0c0"),n("53ca")),b=(n("d3b7"),[{path:"/",name:"home",meta:{roles:["admin","editor","test"],title:"主页",icon:"home",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-bfcc95ea")]).then(n.bind(null,"77b8"))}},{path:"/start",name:"start",meta:{roles:["admin","editor"],title:"快速起步",icon:"blur_on",keepAlive:!0},component:function(){return n.e("chunk-2d0b6cfa").then(n.bind(null,"1f6e"))},children:[{path:"getting-started",name:"getting-started",meta:{roles:["admin","editor"],title:"基础配置",icon:"fingerprint",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b04a066")]).then(n.bind(null,"3b2b"))}},{path:"router-config",name:"router-config",meta:{roles:["admin","editor"],title:"路由配置",icon:"mediation",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b059893")]).then(n.bind(null,"5f72"))}},{path:"my-menu",name:"my-menu",meta:{roles:["admin","test"],title:"关于菜单",icon:"menu",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b06eaa0")]).then(n.bind(null,"8c7e"))}}]},{path:"/optimization",name:"optimization",meta:{roles:["admin","test"],title:"性能优化",icon:"memory",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b1b2c23")]).then(n.bind(null,"f5c0"))}},{path:"/component",name:"component",component:function(){return n.e("chunk-2d0b6cfa").then(n.bind(null,"1f6e"))},meta:{roles:["admin","test"],title:"组件说明",icon:"apps",isOpen:!0,isHidden:!1},children:[{path:"keep-alive-doc",name:"keep-alive-doc",meta:{roles:["admin","editor"],title:"keep-alive 缓存",icon:"cached",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b1ab671")]).then(n.bind(null,"e692"))}},{path:"scrollDemo",name:"scrollDemo",meta:{roles:["admin","editor"],title:"滚动区域",icon:"swap_vert",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b198ba5")]).then(n.bind(null,"aaca"))}},{path:"tagViewDemo",name:"tagViewDemo",meta:{roles:["admin","editor"],title:"tagView",icon:"input",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b05c22f")]).then(n.bind(null,"738d"))}},{path:"breadcrumbsDemo",name:"breadcrumbsDemo",meta:{roles:["admin","editor"],title:"面包屑",icon:"double_arrow",keepAlive:!0,isHidden:!1},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b1b1395")]).then(n.bind(null,"f037"))}},{path:"icon",name:"icon",meta:{roles:["admin","editor"],title:"icon 集合",icon:"api",keepAlive:!1},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-531a009e")]).then(n.bind(null,"b8fc"))}},{path:"loading-bar",name:"loading-bar",meta:{roles:["admin","test"],title:"loading-bar",icon:"rotate_right",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b1b2e70")]).then(n.bind(null,"f780"))}},{path:"markdown",name:"markdown",meta:{roles:["admin","test"],title:"markdown",icon:"history_edu",keepAlive:!0},component:function(){return n.e("chunk-2d208dcf").then(n.bind(null,"a736"))}},{path:"json",name:"json",meta:{roles:["admin","test"],title:"json",icon:"settings_ethernet",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b1991a4")]).then(n.bind(null,"ad93"))}}]},{path:"/axios",name:"axios",meta:{roles:["admin","editor"],title:"axios",icon:"http",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b051115")]).then(n.bind(null,"4a45"))}},{path:"/menu-1",name:"menu-1",meta:{roles:["admin","test"],title:"三级菜单",icon:"filter_3",keepAlive:!0},component:function(){return n.e("chunk-2d0b6cfa").then(n.bind(null,"1f6e"))},children:[{path:"menu-2",name:"menu-2",meta:{roles:["admin","test"],title:"菜单 1-1",icon:"filter_2",keepAlive:!0},component:function(){return n.e("chunk-2d0b6cfa").then(n.bind(null,"1f6e"))},children:[{path:"menu-3",name:"menu-3",meta:{roles:["admin","test"],title:"菜单 1-2",icon:"filter_1",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b06c66a")]).then(n.bind(null,"99ad"))}}]}]},{path:"http://www.quasarchs.com/vue-components/button",name:"external-link",meta:{roles:["admin","editor"],title:"外部链接/更多组件",icon:"send"}},{path:"/my-lottie",name:"my-lottie",meta:{roles:["admin","editor"],title:"lottie 动效",itemLabel:"MY SHARE",icon:"videocam",keepAlive:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-b3e7c3a8"),n.e("chunk-4b199e1b")]).then(n.bind(null,"afb1"))}},{path:"/tableDetail/:id",name:"tableDetail",meta:{roles:["admin","editor"],title:"Treats 详情",icon:"blur_linear",isHidden:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-4b1abe26")]).then(n.bind(null,"e89e"))}},{path:"/cimo",name:"cimo",meta:{roles:["admin","editor"],title:"关于作者",icon:"fab fa-studiovinari",isHidden:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-689572b6")]).then(n.bind(null,"01db"))}},{path:"*",redirect:"/NoFound404",meta:{roles:["admin","test"],isHidden:!0}}]),v=[{path:"/",name:"index",redirect:"/",component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-7b711cb5")]).then(n.bind(null,"1e4b"))},meta:{roles:["admin","editor","test"]},children:b}],k=v;n("4de4");function w(e,t){for(var n in t=e.filter((function(e){return-1!==e.meta.roles.indexOf(M.getters.getRole)})),t)t[n].children&&(t[n].children=w(t[n].children));return t}var A=w;function P(e){if(null!==e){var t=e.push?[]:{};for(var n in e)"object"===Object(g["a"])(e[n])?t[n]=P(e[n]):t[n]=e[n];return t}}function y(e){for(var t in e)return e[t]}var V=P,_=n("8c4f"),S=[{path:"/logon",name:"logon",meta:{title:"登录"},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-b3e7c3a8"),n.e("chunk-8986b05c")]).then(n.bind(null,"1d86"))}},{path:"/NoFound404",name:"NoFound404",meta:{roles:["admin","editor"],title:"404",icon:"sentiment_dissatisfied",isHidden:!0},component:function(){return Promise.all([n.e("chunk-185175e6"),n.e("chunk-b3e7c3a8"),n.e("chunk-336dd27c")]).then(n.bind(null,"2c3e"))}}],E=S;a["default"].use(_["a"]);var T=_["a"].prototype.push;function O(){var e=x();L.matcher=e.matcher}_["a"].prototype.push=function(e,t,n){return t||n?T.call(this,e,t,n):T.call(this,e).catch((function(e){return e}))};var x=function(){return new _["a"]({base:"/vue-quasar-manage/",routes:E})},L=x(),R=L;n("fb6a"),n("a434");function j(e){var t={fullPath:e.fullPath,name:e.name,title:e.meta.title,icon:e.meta.icon,keepAlive:e.meta.keepAlive||!1};void 0!==y(e.params)&&(t.title=t.title+"："+y(e.params)),null!==t.title&&void 0!==t.title&&"/"!==t.fullPath&&-1===t.fullPath.indexOf("#")&&M.commit("ADD_TAG_VIEW",t)}function D(e){M.commit("SET_TAG_VIEW",e)}function I(e,t){var n=e.tagView[t].fullPath;if(e.tagView.splice(t,1),0===e.tagView.length)window.sessionStorage.setItem("tagView","[]"),R.push("/");else{if(t===e.tagView.length&&Pe.$route.path===n)return void R.push(e.tagView[t-1].fullPath);if(0===t&&Pe.$route.path===n)return void R.push(e.tagView[0].fullPath);Pe.$route.path===n&&R.push(e.tagView[t-1].fullPath)}}function N(e,t){switch(t.side){case"right":e.tagView=e.tagView.slice(0,t.index+1),1===e.tagView.length&&R.push(e.tagView[0].fullPath),e.tagView.length===t.index+1&&R.push(e.tagView[t.index].fullPath);break;case"left":e.tagView=e.tagView.slice(t.index,e.tagView.length),1===e.tagView.length&&R.push(e.tagView[0].fullPath),e.tagView.length<=t.index&&R.push(e.tagView[0].fullPath);break;case"others":e.tagView=e.tagView.splice(t.index,1),R.push(e.tagView[0].fullPath);break;default:break}}var B={SET_ROLES_AND_ROUTES:function(e,t){e.role=t;var n=V(k);n[0].children=A(n[0].children),e.routes=n},LOGOUT:function(e,t){e.role="admin",e.routes=[],e.tagView=[],sessionStorage.removeItem("access_token"),sessionStorage.removeItem("user_role"),O()},ADD_TAG_VIEW:function(e,t){var n=e.tagView.length;n||"/"===t.fullPath||e.tagView.push(t);for(var a=[],r=0;r<n;r++)a.push(e.tagView[r].fullPath);a.indexOf(t.fullPath)<0&&n&&e.tagView.push(t)},SET_TAG_VIEW:function(e,t){e.tagView=t},REMOVE_TAG_VIEW:function(e,t){switch(Object(g["a"])(t)){case"undefined":e.tagView=[],window.sessionStorage.setItem("tagView","[]"),R.push("/");break;case"object":N(e,t);break;default:I(e,t)}},SET_BREADCRUMBS:function(e,t){e.breadcrumbs=t},SET_KEEPALIVELIST:function(e,t){e.keepAliveList=[];for(var n=0;n<t.length;n++)t[n].keepAlive&&e.keepAliveList.push(t[n].name);return e.keepAliveList}},$=B,C={},U=C,q={},H=q;a["default"].use(m["a"]);var M=new m["a"].Store({state:h,getters:f,mutations:$,actions:U,modules:H}),G=(n("0ca9"),n("5c7d"),n("7d6e"),n("e54f"),n("a4b7"),n("05bc"),n("0d0e"),n("573e"),n("b05d")),F=n("1b3f"),J=n("436b"),K=n("2a19"),W=n("515f"),z=n("7ea5"),Q=n("75c3"),Y=n("4e73"),X=n("7f67"),Z=n("714f"),ee=n("b12a");a["default"].use(G["a"],{config:{},components:{},directives:{ClosePopup:X["a"],Ripple:Z["a"]},plugins:{LoadingBar:F["a"],Dialog:J["a"],Notify:K["a"],Cookies:W["a"],QAjaxBar:z["a"],TouchPan:Q["a"],QMenu:Y["a"],AppFullscreen:ee["a"]}});var te=n("5530");F["a"].setDefaults({color:"my-loadingBar-color",size:"2.3px",position:"top"});var ne=F["a"];function ae(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n].meta);M.commit("SET_BREADCRUMBS",t)}R.beforeEach((function(e,t,n){ie(e);var a=sessionStorage.getItem("access_token"),r=sessionStorage.getItem("user_role");if(a)if("/login"===e.path&&n({path:"/"}),r&&M.getters.getRoutes.length)n();else{var i=sessionStorage.getItem("user_role");M.commit("SET_ROLES_AND_ROUTES",i),R.addRoutes(M.getters.getRoutes),n(Object(te["a"])(Object(te["a"])({},e),{},{replace:!0}))}else"/logon"!==e.path?n({path:"/logon"}):n()})),R.afterEach((function(){ne.stop(),ne.stop()}));var re=R;function ie(e){if(null!=e.name){document.title=e.meta.title+a["default"].prototype.$title,ne.start();for(var t=0;t<E.length;t++)if(E[t].path===e.path)return;var n=[];null===JSON.parse(window.sessionStorage.getItem("tagView"))?window.sessionStorage.setItem("tagView","[]"):n=JSON.parse(window.sessionStorage.getItem("tagView")),0===M.getters.getTagView.length&&0!==n.length?(D(n),M.commit("SET_KEEPALIVELIST",n)):j(e),ae(e.matched),oe(e)}}function oe(e){if(e.matched&&e.matched.length>2)for(var t=0;t<e.matched.length;t++){var n=e.matched[t];"layout"===n.components.default.name&&(e.matched.splice(t,1),oe(e))}}a["default"].prototype.$title=" | Vue Quasar",a["default"].prototype.$SildeBar="hHh lpR fFf",a["default"].prototype.$baseURL="",a["default"].prototype.$timeOut=8e3,a["default"].prototype.$Max_KeepAlive=10,a["default"].prototype.$buttonList=[{text:"Vue",URL:"https://cn.vuejs.org/"},{text:"Quasar",URL:"http://www.quasarchs.com/"},{text:"Github",URL:"https://github.com/972784674t/vue-quasar-manage"},{text:"Gitee",URL:"https://gitee.com/incimo/vue-quasar-manage"},{text:"捐赠",URL:"/cimo"},{text:"关于作者",URL:"/cimo"}];a["default"];var ue=n("bc3a"),le=n.n(ue),ce=le.a.create({timeout:a["default"].prototype.$timeOut});ce.interceptors.request.use((function(e){var t=sessionStorage.getItem("access_token");if(t&&e.type)switch(e.headers.Authorization="Bearer "+t,e.type){case"FORM-DATA":e.transformRequest=[function(e){return"args="+JSON.stringify(e)}];break;default:e.headers={"Content-Type":"application/json"}}return e}),(function(e){return Promise.reject(e)})),ce.interceptors.response.use((function(e){return e}),(function(e){var t={message:"未知错误",icon:"warning",color:"warning",position:"top",timeout:1500};switch(e.response.status){case 403:t.message="拒绝访问(403)",K["a"].create(t);break;case 404:t.message="资源不存在(404)",K["a"].create(t);break;case 408:t.message="请求超时(404)",K["a"].create(t);break;case 500:t.message="服务器错误(500)",K["a"].create(t);break;case 501:t.message="服务未实现(501)",K["a"].create(t);break;case 502:t.message="网络错误(502)",K["a"].create(t);break;case 503:t.message="服务不可用(503)",K["a"].create(t);break;case 504:t.message="网络超时(504)",K["a"].create(t);break;case 505:t.message="HTTP版本不受支持(505)",K["a"].create(t);break}return"ECONNABORTED"===e.code&&-1!==e.message.indexOf("timeout")&&(t.message="网络异常",K["a"].create(t)),Promise.reject(e)}));var se=ce,me=function(e){return se({url:e.url,method:e.method||"POST",params:e.params,responseType:e.responseType||"json",auth:e.auth||{username:localStorage.getItem("access_token")},data:e.data||""})};a["default"].prototype.$fetchData=me;a["default"];var de=n("77ed"),he=n.n(de),pe=n("1b37"),fe=n.n(pe),ge=n("ee2d"),be=n.n(ge),ve=(n("fefe"),n("02c6")),ke=n.n(ve);be.a.use(ke.a),a["default"].use(be.a);var we=n("9ca8");n("94b1"),n("007d"),n("ef97"),n("2f73"),n("c037");a["default"].component("v-chart",we["a"]),a["default"].config.productionTip=!1,a["default"].use(he.a),a["default"].use(fe.a),a["default"].prototype.$PUBLIC_PATH="/vue-quasar-manage/";var Ae=new a["default"]({router:re,store:M,render:function(e){return e(s)}}).$mount("#app"),Pe=t["default"]=Ae},b3c3:function(e,t,n){}});