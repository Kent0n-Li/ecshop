(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-integralgoods-main"],{"01c0":function(t,a,i){"use strict";var e=i("8a94"),s=i.n(e);s.a},"042a":function(t,a,i){"use strict";i.r(a);var e=i("ca74"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=s.a},"8a94":function(t,a,i){var e=i("a823");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("50e4a080",e,!0,{sourceMap:!1,shadowMode:!1})},"9b17":function(t,a,i){"use strict";i.r(a);var e=i("e40b"),s=i("042a");for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);i("01c0");var o,c=i("f0c5"),r=Object(c["a"])(s["default"],e["b"],e["c"],!1,null,"9803760a",null,!1,e["a"],o);a["default"]=r.exports},a823:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.newgoods .sortnav[data-v-9803760a]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;width:100%;height:%?78?%;line-height:%?78?%}.newgoods .sortnav div[data-v-9803760a]{width:%?250?%;height:100%;text-align:center}.newgoods .sortnav .active[data-v-9803760a]{color:#b4282d}.newgoods .sortnav .price[data-v-9803760a]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/no.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.newgoods .sortnav .active.desc[data-v-9803760a]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/down.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.newgoods .sortnav .active.asc[data-v-9803760a]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/up.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.newgoods .sortlist[data-v-9803760a]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.newgoods .sortlist .item[data-v-9803760a]{width:%?372.5?%;margin-bottom:%?5?%;text-align:center;background:#fff;padding:%?15?% 0}.newgoods .sortlist .item img[data-v-9803760a]{display:block;width:%?302?%;height:%?302?%;margin:0 auto}.newgoods .sortlist .item .name[data-v-9803760a]{margin:%?15?% 0 %?22?% 0;text-align:center;padding:0 %?20?%;font-size:%?24?%}.newgoods .sortlist .item .price[data-v-9803760a]{text-align:center;font-size:%?30?%;color:#b4282d}',""]),t.exports=a},ca74:function(t,a,i){"use strict";var e=i("ee27");i("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("96cf");var s=e(i("c964")),n=i("5b49"),o={onReachBottom:function(){if(this.page=this.page+1,this.page>this.pagetotal)return!1;this.getlistData()},created:function(){},onLoad:function(t){this.isHot=t.isHot,this.isNew=t.isNew,this.id=t.id},mounted:function(){this.isHot&&(this.isHot=this.isHot),this.isNew&&(this.isNew=this.isNew),this.id=this.id,void 0===this.id&&(this.id=""),this.getlistData(!0)},data:function(){return{id:"",page:1,order:"",isHot:"",isNew:"",nowIndex:0,navData:["综合","价格","分类"],listData:[],activeClass:""}},components:{},methods:{getlistData:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,n.integralgoodsGoodsListApi)({page:t.page});case 2:i=a.sent,1==t.page&&(t.listData=i.data.info),t.pagetotal=i.data.pagetotal,t.page>1&&(t.listData=t.listData.concat(i.data.info));case 6:case"end":return a.stop()}}),a)})))()},changeTab:function(t){this.nowIndex=t,1==t?(this.order="asc"==this.order?"desc":"asc",this.isHot="",this.page=1,this.activeClass,this.activeClass=this.order+" active"):2==t&&(this.isHot="asc"==this.isHot?"desc":"asc",this.order="",this.page=1,this.activeClass=this.isHot+" active"),this.getlistData(!0)},goodsDetail:function(t){uni.navigateTo({url:"/apiShop/goods/main?id="+t+"&ral=true"})}},computed:{}};a.default=o},e40b:function(t,a,i){"use strict";var e,s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("积分商品列表")])],2),i("div",{staticClass:"newgoods"},[i("div",{staticClass:"sortlist"},t._l(t.listData,(function(a,e){return i("div",{key:e,staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsDetail(a.goods_id)}}},[i("img",{attrs:{src:a.list_pic_url,alt:""}}),i("p",{staticClass:"name"},[t._v(t._s(a.goods_name))]),i("p",{staticClass:"price"},[t._v(t._s(a.exchange_integral)+"积分")])])})),0)])],1)},n=[];i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}))}}]);