(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"unset":"Unset start-date."},"de":{"unset":"Start-Datum leeren."}}'),delete t.options._Ctor}},262:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("b0027bba",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(262)},273:function(t,e,n){var o=n(81)(!1);o.push([t.i,".settings__actions{position:fixed;left:0;right:0;bottom:30vh;text-align:center}.settings__actions button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:transparent;color:red;padding:1rem;font-size:4vmin}",""]),t.exports=o},274:function(t,e,n){"use strict";var o=n(259),r=n.n(o);e.default=r.a},278:function(t,e,n){"use strict";n.r(e);var o={name:"Settings",data:function(){return{date:""}},watch:{date:function(t){window.localStorage.setItem("date",t)}},mounted:function(){var t=window.localStorage.getItem("date");this.date=null!=t?t:""},methods:{unset:function(){this.date="",window.localStorage.removeItem("date")}}},r=(n(272),n(63)),c=n(274),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),n("div",{staticClass:"settings__actions"},[t.date?n("button",{attrs:{title:t.$t("unset")},on:{click:t.unset}},[n("FontAwesomeIcon",{attrs:{icon:"trash"}})],1):t._e()])])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports}}]);