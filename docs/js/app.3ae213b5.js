(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)r=o[u],a[r]&&f.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0793":function(e,t,n){e.exports=n.p+"img/jquery-soup.b7d7f0b0.png"},"0f9c":function(e,t,n){},2856:function(e,t,n){},"4ef6":function(e,t,n){e.exports=n.p+"img/evan-you.a6844628.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"app"},l=o,c=(n("5c0b"),n("2877")),d=Object(c["a"])(l,i,r,!1,null,null,null);d.options.__file="App.vue";var u=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontpage"},[n("div",{staticClass:"content"},[e._m(0),n("h2",[e._v("Made with Eagle.js")]),n("div",{staticClass:"thumbnails"},e._l(e.slideshows,function(t){return n("div",{key:t,staticClass:"box-card"},[n("router-link",{attrs:{to:t.infos.path},nativeOn:{click:function(t){return e.click(t)}}},[n("div",{staticClass:"embedded-slideshow-container"},[n(t,{tag:"component",attrs:{embedded:!0,keyboardNavigation:!1,mouseNavigation:!1}})],1)]),n("div",{staticClass:"caption"},[n("h3",[e._v(e._s(t.infos.title))]),n("p",{staticClass:"thumbnail-description"},[e._v(e._s(t.infos.description))])])],1)}))])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("span",{staticClass:"logo"}),n("span",[e._v("Presentations")])])}],v={list:[n("a36b").default,n("dbaf").default]},p={data:function(){return{slideshows:v.list}},mounted:function(){document.currentSlide={}},methods:{click:function(e){e.stopPropagation()}}},g=p,_=(n("bde9"),Object(c["a"])(g,f,h,!1,null,"5854de04",null));_.options.__file="Home.vue";var b=_.exports,m=n("d973"),w=(n("b159"),n("1487")),y=n.n(w);s["a"].use(m["b"]),s["a"].use(a["a"]),s["a"].config.productionTip=!1,m["a"].hljs=y.a;var I=[];v.list.forEach(function(e){I.push({path:"/"+e.infos.path,component:e})}),I.push({path:"*",component:b});var O=new a["a"]({routes:I});new s["a"]({el:"#app",router:O,render:function(e){return e("App")},components:{App:u}})},"5c0b":function(e,t,n){"use strict";var s=n("2856"),a=n.n(s);a.a},"5c29":function(e,t,n){"use strict";var s=n("bd94"),a=n.n(s);a.a},"8f21":function(e,t,n){e.exports=n.p+"img/angular.84c42cef.png"},a36b:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ThemesSlideshow"}},[n("div",{staticClass:"eg-slideshow"},[n("slide",{staticClass:"local-eg-theme-artic",attrs:{enter:"fadeIn",leave:"fadeOut"}},[n("h1",[e._v("Themes"),n("br"),e._v("Slideshow")])]),n("slide",{staticClass:"local-eg-theme-foreword",attrs:{enter:"fadeIn",leave:"fadeOut"}},[n("eg-transition",{attrs:{enter:"fadeInDown"}},[n("p",[e._v("FOREWORD "),n("br"),e._v('\nThe next slides can also be seen in "Introducing Eagle",\nwhere they are programmatically inserted.\n')])])],1),n("slide",{staticClass:"local-eg-theme-bretagne",attrs:{enter:"fadeIn",leave:"none"}},[n("eg-transition",{attrs:{enter:"fadeInDown"}},[n("h3",[e._v("About Themes")])])],1),n("slide",{staticClass:"local-eg-theme-forest-road",attrs:{enter:"fadeIn",leave:"none"}},[n("eg-transition",{attrs:{enter:"fadeInLeft"}},[n("h3",[e._v("You can change everything")])])],1),n("slide",{staticClass:"local-eg-theme-spark",attrs:{enter:"fadeIn",leave:"none"}},[n("eg-transition",{attrs:{enter:"fadeInUp"}},[n("h3",[e._v("Enjoy the versatility"),n("br"),e._v("of the CSS Technology"),n("sup",[e._v("TM")])])])],1),n("slide",{staticClass:"local-eg-theme-city",attrs:{enter:"fadeIn",leave:"none"}},[n("eg-transition",{attrs:{enter:"flipInX"}},[n("eg-code-block",{attrs:{lang:"html"}},[e._v("//- Use CSS classes to theme the slideshow or just one slide\n\n#MySlideshow.eg-theme-dark //- General theme for the slideshow\n  .eg-slideshow\n    slide\n      h1 I am the darkness !\n    slide.eg-theme-light //- slide-specific theme\n      h1 Sometimes I am the light too\n      slide.local-eg-theme-bretagne\n")])],1)],1),n("slide",{staticClass:"local-eg-theme-space",attrs:{enter:"fadeIn",leave:"fadeOut"}},[n("eg-transition",{attrs:{enter:"zoomIn"}},[n("h3",[e._v("Your bad taste is the limit")])])],1)],1)])},a=[],i=(n("cadf"),n("551c"),n("097d"),n("d973")),r={mixins:[i["b"].slideshow],infos:{title:"Themes Slideshows",description:"You can change everything !",path:"themes-slidehow"}},o=r,l=(n("5c29"),n("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null);c.options.__file="ThemesSlideshow.vue";t["default"]=c.exports},a527:function(e,t,n){},abae:function(e,t,n){e.exports=n.p+"img/iconfinder_JQuery_logo_282806.64dd08ca.png"},ae88:function(e,t,n){e.exports=n.p+"img/declarative.1b3224c5.png"},b667:function(e,t,n){e.exports=n.p+"img/new-vue.5b017b05.png"},bd94:function(e,t,n){},bde9:function(e,t,n){"use strict";var s=n("a527"),a=n.n(s);a.a},be32:function(e,t,n){e.exports=n.p+"img/vue-logo.ee5fb47d.png"},c9d9:function(e,t,n){e.exports=n.p+"img/react-logo.f5cd0069.png"},dbaf:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"MyFirstSlideshow"}},[s("div",{staticClass:"eg-slideshow"},[s("slide",{attrs:{enter:"animated fadeInDown"}},[s("h1",[e._v("Vue for the New")]),s("img",{attrs:{src:n("be32"),alt:"Vue.js logo"}})]),s("slide",{attrs:{steps:4,enter:"bounceInRight",leave:"bounceOutDown"}},[s("h3",[e._v("The Progressive Javascript Framework")]),s("div",{staticClass:"center"},[s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=2?s("h4",[e._v("Reactivity")]):e._e()]),s("eg-transition",{attrs:{enter:"bounceInRight",leave:"bounceOutRight"}},[e.step>=3?s("h4",[e._v("Composability")]):e._e()]),s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=4?s("h4",[e._v("Ecosystem")]):e._e()])],1)]),s("slide",{attrs:{enter:"animated fadeInDown"}},[s("h1",[e._v("Evan You")]),s("img",{attrs:{src:n("4ef6"),alt:"Vue.js logo"}})]),s("slide",{attrs:{steps:3,enter:"bounceInRight",leave:"bounceOutDown"}},[s("h4",[e._v("What Came Before...")]),s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"none"}},[2==e.step?s("img",{attrs:{src:n("abae"),alt:"Vue.js logo"}}):e._e()]),s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"none"}},[3==e.step?s("img",{attrs:{src:n("0793"),alt:"Vue.js logo"}}):e._e()])],1),s("slide",{attrs:{steps:2,enter:"bounceInRight",leave:"bounceOutDown"}},[s("h3",[e._v("The Enterprise Alternative")]),s("div",{staticClass:"center"},[s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=2?s("img",{attrs:{src:n("8f21"),alt:"Vue.js logo"}}):e._e()]),s("eg-transition",{attrs:{enter:"bounceInRight",leave:"bounceOutRight"}},[e.step>=3?s("img",{attrs:{src:n("c9d9"),alt:"Vue.js logo"}}):e._e()])],1)]),s("slide",{attrs:{steps:2,enter:"bounceInRight",leave:"bounceOutDown"}},[s("h3",[e._v("The Facebook Frontrunner")]),s("div",{staticClass:"center"},[s("eg-transition",{attrs:{enter:"bounceInRight",leave:"bounceOutRight"}},[e.step>=2?s("img",{attrs:{src:n("c9d9"),alt:"Vue.js logo"}}):e._e()])],1)]),s("slide",{attrs:{enter:"animated fadeInDown"}},[s("h4",[e._v("new Vue();")]),s("img",{attrs:{src:n("ae88"),alt:"simple vue example"}})]),s("slide",{attrs:{steps:4,enter:"bounceInRight",leave:"bounceOutDown"}},[s("h3",[e._v("Declarative Rendering")]),s("div",{staticClass:"center"},[s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=2?s("h4",[e._v('"Mustache" Template syntax')]):e._e()]),s("eg-transition",{attrs:{enter:"bounceInRight",leave:"bounceOutRight"}},[e.step>=3?s("h4",[e._v("Data Binding")]):e._e()]),s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"bounceOutLeft"}},[e.step>=4?s("h4",[e._v("Reactivity")]):e._e()])],1)]),s("slide",{attrs:{enter:"animated fadeInDown"}},[s("img",{attrs:{src:n("b667"),alt:"simple vue example"}})]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Conditionals and Loops")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("v-on and v-bind")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Vue Instance")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Data, Methods")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Vue Lifecycle")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Components")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Syntax")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Templating")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Shorthand")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("JS in Templates")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Computed vs Methods")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("function")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Props")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Emitting Events")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Slots")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Transitions")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Single File Components")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Ecosystem")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Unit Testing")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Typescript")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Don't use classes")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Hooks")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Vue Router")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Vuex")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Vuepress")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Nuxt")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Gridsome")])]),s("slide",{attrs:{enter:"fade in"}},[s("h1",[e._v("Nativescript Vue")])])],1)])},a=[],i=(n("cadf"),n("551c"),n("097d"),n("d973")),r={mixins:[i["b"].slideshow],infos:{title:"Vue for the New",description:"A boilerplate to get you started",path:"vue-for-the-new"}},o=r,l=(n("e660"),n("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null);c.options.__file="VueForTheNew.vue";t["default"]=c.exports},e660:function(e,t,n){"use strict";var s=n("0f9c"),a=n.n(s);a.a}});
//# sourceMappingURL=app.3ae213b5.js.map