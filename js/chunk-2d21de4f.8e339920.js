(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de4f"],{d2f1:function(t,a,r){"use strict";r.r(a);var c=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("main",{staticClass:"main"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb c-breadcrumb-bg"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"Shop"}}},[t._v("首頁")])],1),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("影片介紹")])])]),r("div",{staticClass:"container mt-4"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-6"},[r("img",{staticClass:"c-img-fit",attrs:{src:t.product.imageUrl,alt:t.product.title}})]),r("div",{staticClass:"col-md-6 my-4"},[r("h1",{staticClass:"h2"},[t._v(t._s(t.product.title))]),r("hr"),r("span",{staticClass:"badge badge-info"},[t._v(" "+t._s(t.product.category)+" ")]),r("p",{staticClass:"mt-2"},[t._v(t._s(t.product.description))]),t.product.price?r("div",{staticClass:"my-3"},[r("del",{staticClass:"c-origin-price"},[t._v(t._s(t._f("currency")(t.product.origin_price)))]),r("p",{staticClass:"h4 c-price"},[t._v(" "+t._s(t._f("currency")(t.product.price))+" ")])]):t._e(),r("div",{staticClass:"input-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control",attrs:{name:""},on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?r:r[0])}}},t._l(10,(function(a){return r("option",{key:a,domProps:{value:a}},[t._v(" 訂閱 "+t._s(a)+" "+t._s(t.product.unit)+" ")])})),0)]),r("div",{staticClass:"col-6"},[r("button",{staticClass:"btn btn-warning btn-block",on:{click:function(a){return a.preventDefault(),t.addtoCart(t.product.num)}}},[r("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 加入購物車 ")])])])])])]),r("div",{staticClass:"row justify-content-center my-4"},[r("div",{staticClass:"col-md-10"},[r("h2",{staticClass:"text-center"},[t._v("劇情簡介")]),r("p",[t._v(t._s(t.product.content))]),r("div",{staticClass:"my-4"},["經典日劇"==t.product.category?r("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"JapanTv"}}},[t._v(" << 回經典日劇 ")]):r("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"KoreaTv"}}},[t._v(" << 回口碑韓劇 ")])],1)])])])])},s=[],e=(r("99af"),r("4de4"),r("5530")),i=r("2f62"),n={name:"Product",props:["productId"],data:function(){return{num:0}},created:function(){this.$store.dispatch("getProduct",this.productId)},computed:Object(e["a"])({},Object(i["c"])(["product","cartData"])),methods:{addtoCart:function(t){var a=this,r=a.cartData.carts.filter((function(t){return t.product_id===a.productId}));r.length>0?(a.num=t+r[0].qty,a.removeCartItem(r[0],a.addtoCartService)):(a.num=t,a.addtoCartService())},removeCartItem:function(t,a){var r="".concat("https://vue-course-api.hexschool.io","/api/").concat("alvin","/cart/").concat(t.id);this.axios.delete(r).then((function(){a()}))},addtoCartService:function(){var t=this,a=t.productId,r=t.num;t.$store.dispatch("addtoCart",{id:a,nums:r})}}},o=n,u=r("2877"),d=Object(u["a"])(o,c,s,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21de4f.8e339920.js.map