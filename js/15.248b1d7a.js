(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"44ab":function(t,a,n){"use strict";var i=n("be61"),s=n.n(i);s.a},be61:function(t,a,n){},cea7:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"mediaControlsWrapper"}},[t._m(0),n("div",{attrs:{id:"transportButtonsWrapper"}},[n("ul",{attrs:{id:"transportButtonsList"}},[n("li",[n("button",{staticClass:"transport-button",attrs:{id:"playback-play",title:"Toggle Playback."},on:{click:function(a){t.playing=!t.playing}}},[n("i",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],staticClass:"fa fa-play",attrs:{disabled:""}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],staticClass:"fa fa-pause",attrs:{disabled:""}})])]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),n("li",[n("button",{staticClass:"transport-button",attrs:{id:"controls-toggle",title:"Video Settings.",onClick:"toggleVideoControls()"}},[n("q-icon",{attrs:{name:"mdi-cog"}})],1)])])])])},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"progressSliderWrapper"}},[n("div",{attrs:{id:"current-time"}},[t._v("0.00")]),n("div",{attrs:{id:"time-left"}}),n("div",{attrs:{id:"progressSlider"}},[n("div",{staticStyle:{display:"none"},attrs:{id:"loop-region"}}),n("div",{attrs:{id:"chapters-wrapper"}})])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{},[n("button",{staticClass:"transport-button",attrs:{id:"playback-beginning",onClick:"onButtonPlaybackRestart()",title:"Back to the beginning."}},[n("i",{staticClass:"fa fa-fast-backward"})])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{},[n("button",{staticClass:"transport-button",attrs:{id:"playback-rewind",onClick:"onButtonPlaybackRewind5()",title:"Rewind 5 Seconds."}},[n("i",{staticClass:"fa fa-backward"}),n("sup",[t._v("5")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{},[n("button",{staticClass:"transport-button",attrs:{id:"playback-forward",onClick:"onButtonPlaybackForward5()",title:"Forward 5 Seconds."}},[n("i",{staticClass:"fa fa-forward"}),n("sup",[t._v("5")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{},[n("button",{staticClass:"transport-button",attrs:{id:"looping-start",onClick:"onButtonSetLoopStart();",title:"Set loop starting point."}},[t._v("\r\n                [ A\r\n              ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{},[n("button",{staticClass:"transport-button",attrs:{id:"looping-stop",onClick:"onButtonSetLoopEnd();",title:"Set loop stopping point."}},[t._v("\r\n                B ]\r\n              ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",{},[n("button",{staticClass:"transport-button",attrs:{id:"looping-toggle",onClick:"onButtonToggleLooping()",title:"Begin/End Looping."}},[n("i",{staticClass:"fa fa-refresh"}),n("i",{staticClass:"fa fa-play"})])])}],e={name:"PlayerControls",props:["player"],data:()=>({playing:!1}),watch:{playing(t){return t?this.$emit("player-play"):this.$emit("player-pause")},mounted(){}}},r=e,o=(n("44ab"),n("2877")),l=n("0016"),c=n("eebe"),p=n.n(c),u=Object(o["a"])(r,i,s,!1,null,"3f5b6096",null);a["default"]=u.exports;p()(u,"components",{QIcon:l["a"]})}}]);