(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1e5b":function(e,t,a){},"2da0":function(e,t,a){"use strict";var r=a("1e5b"),n=a.n(r);n.a},"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{staticClass:"shadow-2 rounded-borders",staticStyle:{height:"100vh"},attrs:{view:"hHh Lpr lff",container:""}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[e.$auth.isAuthenticated?a("drawer-toggle",{on:{"toggle-drawer":function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}):e._e(),a("q-toolbar-title",{staticClass:"text-h6 text-bold"},[a("span",{attrs:{color:"secondary"}},[e._v("ProPlayer v8")])]),e.$auth.isAuthenticated?a("q-btn",{attrs:{size:"25px",color:"secondary",to:"/browser",icon:"mdi-magnify",split:"",flat:""}}):e._e(),a("auth-button")],1)],1),e.$auth.isAuthenticated?a("q-drawer",{attrs:{"show-if-above":"",bordered:"",width:350,breakpoint:500},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("dynamic-tab",{attrs:{tabList:e.sidebarTabs}})],1):e._e(),a("q-page-container",[a("transition",{attrs:{mode:"out-in"}},[a("router-view",{on:{"toggle-drawer":function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}})],1)],1)],1)},n=[],o=(a("e6cf"),a("ded3")),i=a.n(o),l=a("2f62");const{mapState:s,mapActions:d}=Object(l["a"])("default");var c={name:"MainLayout",components:{DynamicTab:()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"3c48")),DrawerToggle:()=>a.e(19).then(a.bind(null,"9c41")),AuthButton:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"ad8b"))},data:()=>({leftDrawerOpen:!1}),computed:i()({},s(["sidebarTabs"])),mounted(){this.resetSideBar()},methods:i()({},d(["resetSideBar"]))},u=c,b=(a("2da0"),a("2877")),p=a("4d5a"),w=a("e359"),f=a("65c6"),h=a("6ac5"),m=a("9c40"),g=a("9404"),v=a("09e3"),D=a("eebe"),y=a.n(D),O=Object(b["a"])(u,r,n,!1,null,null,null);t["default"]=O.exports;y()(O,"components",{QLayout:p["a"],QHeader:w["a"],QToolbar:f["a"],QToolbarTitle:h["a"],QBtn:m["a"],QDrawer:g["a"],QPageContainer:v["a"]})}}]);