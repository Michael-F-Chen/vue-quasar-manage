(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8986b05c"],{"1d86":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-center items-center",staticStyle:{height:"100vh"}},[s("div",{staticClass:"row base-card-shadow",staticStyle:{width:"60vw","min-width":"300px"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.$q.screen.gt.sm,expression:"$q.screen.gt.sm"}],staticClass:"col-6 flex justify-center items-center "},[t.isLottieF?t._e():s("q-skeleton",{attrs:{type:"text",height:"70%",width:"50%"}}),s("lottie-web-cimo",{staticStyle:{height:"70%"},attrs:{align:"right",path:t.defaultOptions.path},on:{isLottieFinish:t.handleFinish}})],1),t.$q.screen.gt.sm?s("q-separator",{attrs:{vertical:"",inset:""}}):t._e(),s("div",{staticClass:"col flex justify-center items-center"},[s("q-card",{staticClass:"no-shadow",staticStyle:{"min-width":"290px",height:"100%",width:"60%"},attrs:{square:""}},[s("q-card-section",{attrs:{align:"center"}},[s("h3",{staticClass:"text-uppercase"},[t._v("cimo")]),s("q-input",{staticClass:"logon-input",attrs:{clearable:"",standout:"bg-cyan text-white","bottom-slots":"",label:"账号"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"account_circle"}})]},proxy:!0}]),model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("q-input",{staticClass:"logon-input",attrs:{standout:"bg-cyan text-white","bottom-slots":"",label:"密码",type:t.isPwd?"password":"text",hint:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("q-btn",{staticClass:"logon-btn bg-logon-card-input",staticStyle:{"font-size":"large"},attrs:{loading:t.loading,"text-color":"white",unelevated:"",label:""},on:{click:t.logon}},[t._v("登 录 系 统 ")]),s("div",{staticClass:"row justify-between",staticStyle:{"margin-bottom":"20px"}},[s("q-btn",{attrs:{flat:"",label:"忘记密码"}}),s("q-btn",{attrs:{outline:"",label:"我要注册"}})],1),s("p",{staticClass:"text-grey",attrs:{align:"left"}},[t._v("账号2 ：test 密码均为空")])],1)],1)],1)],1)])},i=[],o=s("0bf7"),a={name:"logon",data:function(){return{isPwd:!0,username:"admin",password:"",defaultOptions:{path:"https://assets9.lottiefiles.com/packages/lf20_vo0a1yca.json",loop:!0},loading:!1,percentage:0,isLottieF:!1}},components:{LottieWebCimo:o["a"]},methods:{logon:function(){var t=this;this.loading=!this.loading,"admin"===this.username||"test"===this.username?(sessionStorage.setItem("access_token",972784674),sessionStorage.setItem("user_role",this.username),setTimeout((function(){t.$router.push("/"),t.loading=!t.loading,t.$q.notify({icon:"insert_emoticon",message:"hi，cimo 欢迎回来",color:"green",position:"top",timeout:1500})}),3e3*Math.random()+1e3)):(this.loading=!this.loading,this.$q.notify({icon:"announcement",message:"账号错误",color:"red",position:"top",timeout:1500}))},handleFinish:function(t){this.isLottieF=t}}},c=a,r=(s("2784"),s("2877")),l=s("fe09"),u=Object(r["a"])(c,n,i,!1,null,"87d9c1f6",null);e["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QSkeleton:l["B"],QSeparator:l["A"],QCard:l["h"],QCardSection:l["j"],QInput:l["q"],QIcon:l["o"],QBtn:l["f"]})},2784:function(t,e,s){"use strict";var n=s("f360"),i=s.n(n);i.a},f360:function(t,e,s){}}]);