webpackJsonp([1],{"8loE":function(e,t){},GyYc:function(e,t,n){e.exports=n.p+"static/img/landing.4404de5.jpg"},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null).exports,o=n("/ocq"),s=n("4ywN"),l=n("GyYc"),u=n.n(l),d={name:"App",data:function(){return{dura:1e4}},mounted:function(){var e=this,t=new Image;t.onload=function(){console.log("image loaded"),document.getElementById("scroll").style.backgroundImage="url("+this.src+")",e.afterLoad()},t.src=u.a},methods:{afterLoad:function(){var e="linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))";console.log(e),Object(s.a)({targets:"#cover",background:[e,"linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"],duration:1e3,easing:"easeInOutSine"}),Object(s.a)({targets:"#scroll",delay:300,backgroundPosition:["100%","0%"],duration:this.dura,easing:"easeInOutSine"}),setTimeout(function(){document.getElementById("cover").style.display="none",document.getElementById("coverhover").style.display="block",document.getElementById("title").style.display="block"},this.dura)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"scroll"}},[n("div",{attrs:{id:"cover"}}),e._v(" "),n("div",{attrs:{id:"coverhover"}},[n("div",{attrs:{id:"title"}},[n("p",[e._v("百鳥朝鳳")]),e._v(" "),e._m(0),e._v(" "),n("p",{attrs:{id:"desc"}},[e._v("\n          The history of Chinese art is very detailed about the loong, but the\n          Fenghuang does not seem to be depicted as much or as important.\n          Therefore, this project hopes to show how the Fenghuang has been\n          portrayed in Chinese art history, and how it has changed. We hope to\n          illustrate the image of the Fenghuang and its changes through\n          multiple latitudes such as time, politics, and religion.\n        ")]),e._v(" "),n("router-link",{staticClass:"button",attrs:{to:"/exhibition"}},[e._v("Enter Exhibition")]),e._v(" "),e._m(1)],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{attrs:{id:"en_title"}},[this._v("\n          All Birds Pay Homage"),t("br"),this._v("\n          to the Fenghuang\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"footer"}},[this._v("\n          Curated by Sky Lyu, Catherine Liu, Richard Zheng,"),t("br"),this._v(" Monica Xie, Yijian Liu"),t("hr"),this._v("\n          Background: Hundreds of Birds Paying Homage to the Fenghuang"),t("br"),this._v("Shen Quan, Qing Dynasty")])}]};var h=n("VU/8")(d,c,!1,function(e){n("8loE")},null,null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-link",{attrs:{to:"/"}},[this._v("hello")])],1)},staticRenderFns:[]},v=n("VU/8")({},g,!1,null,null,null).exports;i.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"Phoenix",component:h},{path:"/exhibition",component:v}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:a},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.4a9bb54474b2bfbb6634.js.map