(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{1498:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.showCurrent?"padding-top: 66px":""},[r("span",{staticClass:"text-h6"},[t._v(t._s(t.title))]),t._t("header-pages"),r("q-list",t._l(this.resultList,(function(e){return r("q-intersection",{key:e.id,attrs:{transition:"slide-right"}},[r("q-card",{staticClass:"q-mb-xs",attrs:{bordered:"",flat:""}},[r("q-item",{staticClass:"browser-result-wrapper"},[r("q-item-section",{attrs:{avatar:""},on:{hover:t.toggler},model:{value:e.avatar,callback:function(r){t.$set(e,"avatar",r)},expression:"entry.avatar"}},[r("q-btn",{staticClass:"browser-result-fav-wrapper q-ml-lg",attrs:{color:t.isFavorite(e)?"negative":"primary",icon:"favorite",title:"Toggle Favorite",round:"",push:""},on:{click:function(r){return t.toggleFavorite(e)}}})],1),r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{width:"100%"},attrs:{to:"/watch/"+e.id,clickable:""}},[r("q-item-section",{attrs:{avatar:""}},[r("q-img",{staticClass:"browser-result-image img",attrs:{src:e.avatar,contain:"",ratio:""}})],1),r("q-item-section",{staticClass:"browser-result-text-wrapper",attrs:{side:""}},[r("q-item-label",{staticClass:"text-weight-bolder text-body2 browser-result-title",attrs:{"text-color":"secondary"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),r("q-item-label",{staticClass:"text-thin browser-result-description",attrs:{color:"secondary"}},[t._v("\n                "+t._s(e.subtitle)+"\n              ")]),r("div",{staticClass:"browser-result-meta",domProps:{innerHTML:t._s(e.data)}})],1)],1)],1)],1)],1)})),1),t._t("footer-pages"),t.showCurrent?r("q-page-sticky",{attrs:{position:"top-right",expand:"",offset:[18,10]}},[r("current-search")],1):t._e()],2)},s=[],i=(r("e6cf"),r("ded3")),o=r.n(i),n=r("2f62"),l={props:{resultList:Array,title:String,hideCurrent:{type:Boolean,default:()=>!1}},computed:o()({showCurrent(){return this.$store.state.browser.searching&&!this.hideCurrent}},Object(n["d"])("default",["isFavorite"])),components:{CurrentSearch:()=>Promise.all([r.e(0),r.e(12)]).then(r.bind(null,"1926"))},methods:o()({toggler(t){console.log(t.currentTarget)}},Object(n["c"])("default",["toggleFavorite"]))},c=l,d=(r("3cb8"),r("2877")),u=r("1c1c"),p=r("ad56"),b=r("f09f"),g=r("66e5"),m=r("4074"),v=r("9c40"),f=r("cb32"),h=r("068f"),w=r("0170"),C=r("de5e"),q=r("c294"),_=r("72db"),y=r("714f"),Q=r("eebe"),x=r.n(Q),k=Object(d["a"])(c,a,s,!1,null,"752028d1",null);e["default"]=k.exports;x()(k,"components",{QList:u["a"],QIntersection:p["a"],QCard:b["a"],QItem:g["a"],QItemSection:m["a"],QBtn:v["a"],QAvatar:f["a"],QImg:h["a"],QItemLabel:w["a"],QPageSticky:C["a"],QFab:q["a"],QFabAction:_["a"]}),x()(k,"directives",{Ripple:y["a"]})},"3cb8":function(t,e,r){"use strict";var a=r("f087"),s=r.n(a);s.a},f087:function(t,e,r){}}]);