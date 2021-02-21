webpackJsonp([1],{"0IeQ":function(t,e,s){t.exports=s.p+"static/img/introduction4.9091390.jpg"},"3mpG":function(t,e){},"9M+g":function(t,e){},BUvP:function(t,e,s){t.exports=s.p+"static/img/introduction1.93738a1.jpg"},F2Yc:function(t,e){},Jmt5:function(t,e){},KoX2:function(t,e,s){t.exports=s.p+"static/img/introduction2.1b70d77.jpg"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("NYxO"),r=s("mtWM"),i=s.n(r),c=s("Rf8U"),o=s.n(c);a.default.use(n.a),a.default.use(o.a,i.a);var u=new n.a.Store({state:{orgProductsClassic:[],orgProductsNews:[],checkSignIn:!1,addCartClassic:[],addCartNews:[],currentShoppingCartClassic:[],currentShoppingCartNew:[]},mutations:{getOrgProductsClassic:function(t,e){e.map(function(t){return t.productNum=1,t}),t.orgProductsClassic=e},getOrgProductsNews:function(t,e){e.map(function(t){return t.productNum=1,t}),t.orgProductsNews=e},checkSignIn:function(t,e){t.checkSignIn=e},addCartClassic:function(t,e){t.addCartClassic=e},addCartNews:function(t,e){t.addCartNews=e},getCurrentShoppingCartClassic:function(t,e){t.currentShoppingCartClassic=e},getCurrentShoppingCartNew:function(t,e){t.currentShoppingCartNew=e}},actions:{getOrgProductsClassic:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine5/products").then(function(e){t.commit("getOrgProductsClassic",e.data.products)})},getOrgProductsNews:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine52/products").then(function(e){t.commit("getOrgProductsNews",e.data.products)})},addCartClassic:function(t,e){var s=this;i.a.post("https://vue-course-api.hexschool.io/api/wine5/cart",{data:e}).then(function(e){s.dispatch("getCurrentShoppingCartClassic"),t.commit("addCartClassic",e.data)})},addCartNews:function(t,e){var s=this;i.a.post("https://vue-course-api.hexschool.io/api/wine52/cart",{data:e}).then(function(e){s.dispatch("getCurrentShoppingCartNew"),t.commit("addCartNews",e.data.data)})},getCurrentShoppingCartClassic:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine5/cart").then(function(e){t.commit("getCurrentShoppingCartClassic",e.data.data.carts)})},getCurrentShoppingCartNew:function(t){i.a.get("https://vue-course-api.hexschool.io/api/wine52/cart").then(function(e){t.commit("getCurrentShoppingCartNew",e.data.data.carts)})},deleteProductsClassic:function(t,e){var s=this;i.a.delete("https://vue-course-api.hexschool.io/api/wine5/cart/"+e).then(function(){return s.dispatch("getCurrentShoppingCartClassic")})},deleteProductsNew:function(t,e){var s=this;i.a.delete("https://vue-course-api.hexschool.io/api/wine52/cart/"+e).then(function(){return s.dispatch("getCurrentShoppingCartNew")})},signOutChange:function(t){i.a.post("https://vue-course-api.hexschool.io/logout").then(function(e){t.commit("checkSignIn",!1)})}}}),l=s("/ocq"),d=s("Dd8w"),p=s.n(d),v={name:"ShoppingCart",data:function(){return{classicProductData:[],newProductData:[],totalDataLength:""}},computed:p()({},Object(n.c)(["currentShoppingCartClassic","currentShoppingCartNew"]),{getClassicProducts:function(){return this.currentShoppingCartClassic},getNewProducts:function(){return this.currentShoppingCartNew},shoppingItemsLength:function(){return this.totalDataLength}}),watch:{currentShoppingCartClassic:function(){this.getShoppingCartClassic(),this.getTotalNumData()},currentShoppingCartNew:function(){this.getShoppingCartNew(),this.getTotalNumData()}},mounted:function(){this.getShoppingCartClassic(),this.getShoppingCartNew(),this.getTotalNumData()},methods:p()({},Object(n.b)(["getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{getTotalNumData:function(){this.totalDataLength=this.classicProductData.length+this.newProductData.length},getShoppingCartClassic:function(){this.classicProductData=this.currentShoppingCartClassic},getShoppingCartNew:function(){this.newProductData=this.currentShoppingCartNew},deleteClassicProduct:function(t){this.$store.dispatch("deleteProductsClassic",t)},deleteNewProduct:function(t){this.$store.dispatch("deleteProductsNew",t)}})},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopping_cart_root"},[s("b-dropdown",{attrs:{id:"dropdown-right",right:"",text:"Right align",size:"lg",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),s("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(t.shoppingItemsLength))])]},proxy:!0}])},[t._v(" "),s("p",{staticClass:"title"},[t._v("已選購 Classic 商品")]),t._v(" "),t._l(t.getClassicProducts,function(e,a){return s("b-dropdown-item",{key:"classicProduct"+a,staticClass:"content",attrs:{href:"#"}},[s("div",{staticClass:"content_item"},[s("span",[t._v(t._s(e.product.title))]),t._v(" "),s("span",[t._v(t._s(e.qty)+"瓶")]),t._v(" "),s("span",[t._v("$"+t._s(e.qty*e.product.price))]),t._v(" "),s("span",{staticClass:"deleteIcon",on:{click:function(s){return s.preventDefault(),t.deleteClassicProduct(e.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),s("hr")])}),t._v(" "),s("p",{staticClass:"title"},[t._v("已選購 New 商品")]),t._v(" "),t._l(t.getNewProducts,function(e,a){return s("b-dropdown-item",{key:"newProduct"+a,staticClass:"content",attrs:{href:"#"}},[s("div",{staticClass:"content_item"},[s("span",[t._v(t._s(e.product.title))]),t._v(" "),s("span",[t._v(t._s(e.qty)+"瓶")]),t._v(" "),s("span",[t._v("$"+t._s(e.qty*e.product.price))]),t._v(" "),s("span",{staticClass:"deleteIcon",on:{click:function(s){return s.preventDefault(),t.deleteNewProduct(e.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),s("hr")])})],2)],1)},staticRenderFns:[]};var g={name:"Navbar",components:{ShoppingCart:s("VU/8")(v,h,!1,function(t){s("iA3F")},"data-v-46e98a83",null).exports},data:function(){return{checkSignInData:!1}},computed:p()({},Object(n.c)(["checkSignIn"]),{checkLogIn:function(){return this.checkSignIn}}),methods:p()({},Object(n.b)(["signOutChange"]),{signOut:function(){this.signOutChange()}})},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"navabar_root",attrs:{toggleable:"lg"}},[s("b-navbar-brand",{staticClass:"brand_name"},[s("h1",[s("router-link",{attrs:{to:"/"}},[t._v("Wine Space")])],1)]),t._v(" "),s("b-navbar-toggle",{staticClass:"navigation_btn_rwd",attrs:{target:"nav-collapse"}},[s("i",{staticClass:"fas fa-bars"})]),t._v(" "),s("b-collapse",{staticClass:"navigation_content",attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto navigation_content_right"},[s("b-nav-item",{attrs:{right:""}},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),t._v(" "),s("b-nav-item",{attrs:{right:""}},[s("router-link",{attrs:{to:"/productsPage"}},[t._v("商品")])],1),t._v(" "),s("b-nav-item",{attrs:{right:""}},[!1===t.checkLogIn?s("router-link",{attrs:{to:"/login"}},[t._v("Login")]):s("p",{on:{click:t.signOut}},[t._v("Logout")])],1)],1)],1),t._v(" "),s("ShoppingCart")],1)},staticRenderFns:[]};var f=s("VU/8")(g,C,!1,function(t){s("gdYi")},"data-v-48eb7c16",null).exports,_={name:"carousel",data:function(){return{carouselContentData:[{id:1,img:"https://i.imgur.com/6x0J234.jpg"},{id:2,img:"https://i.imgur.com/TBHJmjv.jpg"},{id:3,img:"https://i.imgur.com/NCbpT18.jpg"}],currentCarouselContentId:1}},computed:{carouselContent:function(){var t=this;return this.carouselContentData.filter(function(e){return e.id===t.currentCarouselContentId})}},mounted:function(){this.timer()},methods:{timer:function(){var t=this;return setInterval(function(){t.getData()},3e3)},getData:function(){this.currentCarouselContentId!==this.carouselContentData.length?this.currentCarouselContentId+=1:this.currentCarouselContentId=1},changeTab:function(t){this.currentCarouselContentId=t}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.carouselContent,function(e,a){return s("div",{key:a,staticClass:"carousel_img"},[s("img",{staticClass:"carousel_img_content",attrs:{src:e.img,alt:"carousel_img"}}),t._v(" "),s("div",{staticClass:"carousel_alltabs"},t._l(t.carouselContentData.length,function(e){return s("i",{key:e,class:{fas:!0,"fa-circle":!0,fa_circle_style:t.currentCarouselContentId===e},on:{click:function(s){return t.changeTab(e)}}})}),0)])}),0)},staticRenderFns:[]};var w={name:"HeaderNavbarAndCarousel",components:{Navbar:f,Carousel:s("VU/8")(_,m,!1,function(t){s("lS9k")},"data-v-18941cde",null).exports}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("Navbar"),this._v(" "),e("Carousel")],1)},staticRenderFns:[]};var b=s("VU/8")(w,N,!1,function(t){s("F2Yc")},"data-v-77767670",null).exports,P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service"},[s("b-row",t._l(t.serviceContent,function(e,a){return s("b-col",{key:a,attrs:{cols:"12",lg:"4"}},[s("i",{class:e.style}),t._v(" "),s("div",{staticClass:"detail"},[s("h4",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.description))])])])}),1)],1)},staticRenderFns:[]};var y=s("VU/8")({name:"Service",data:function(){return{serviceContent:[{title:"酒品",description:"最棒的酒款",style:"fas fa-wine-glass-alt"},{title:"滿額",description:"購滿$2,000就可免運",style:"fas fa-comment-dollar"},{title:"寄送服務",description:"恆溫的寄送服務",style:"fas fa-truck"}]}}},P,!1,function(t){s("bSCx")},"data-v-6cbaeb7b",null).exports,S=s("BUvP"),D=s.n(S),k=s("KoX2"),x=s.n(k),A=s("cvXP"),$=s.n(A),I=s("0IeQ"),O=s.n(I),F={name:"DeliverInfo",data:function(){return{deliverContent:[{title:"Lorem",description:"恆溫的寄送服務",img:D.a},{title:"滿額",description:"購滿$2,000就可免運",img:x.a},{title:"寄送服務",description:"恆溫的寄送服務",img:$.a},{title:"寄送服務",description:"恆溫的寄送服務",img:O.a}]}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"deliver_info"},[s("b-row",t._l(t.deliverContent,function(e,a){return s("b-col",{key:a,staticClass:"content",attrs:{cols:"12 mb-5",xl:"3",md:"6 mb-0",sm:"12"}},[s("img",{attrs:{src:e.img,alt:"image"}}),t._v(" "),s("div",[s("h5",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.description))])])])}),1)],1)},staticRenderFns:[]};var j={name:"Introduction",components:{Service:y,DeliverInfo:s("VU/8")(F,R,!1,function(t){s("Ndb9")},"data-v-b6b6a7d6",null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introduction"},[e("Service"),this._v(" "),e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{cols:"5"}},[e("hr")])],1),this._v(" "),e("DeliverInfo")],1)},staticRenderFns:[]};var E=s("VU/8")(j,U,!1,function(t){s("3mpG")},"data-v-779e113a",null).exports,V={name:"Products",data:function(){return{currentClassicPage:1,currentNewPage:1,classicData:{},newData:{},classicAndNewData:[]}},computed:p()({},Object(n.c)(["orgProductsClassic","orgProductsNews"]),{categoryProducts:function(){return this.getCategoryProducts()}}),watch:{orgProductsClassic:function(){this.classicData.title="classic",this.classicData.data=this.orgProductsClassic.filter(function(t){return t.num<5}),this.classicAndNewData.push(this.classicData)},orgProductsNews:function(){this.newData.title="new",this.newData.data=this.orgProductsNews.filter(function(t){return t.num<5}),this.classicAndNewData.push(this.newData)},currentClassicPage:function(){switch(this.classicAndNewData=[],this.currentClassicPage){case 1:this.classicData.data=this.orgProductsClassic.filter(function(t){return t.num<5});break;case 2:this.classicData.data=this.orgProductsClassic.filter(function(t){return t.num>4&&t.num<9})}this.classicAndNewData.push(this.classicData),this.classicAndNewData.push(this.newData)},currentNewPage:function(){switch(this.classicAndNewData=[],this.currentNewPage){case 1:this.newData.data=this.orgProductsNews.filter(function(t){return t.num<5});break;case 2:this.newData.data=this.orgProductsNews.filter(function(t){return t.num>4&&t.num<9})}this.classicAndNewData.push(this.classicData),this.classicAndNewData.push(this.newData)}},mounted:function(){this.getOrgProductsClassic(),this.getOrgProductsNews(),this.getCurrentShoppingCartClassic(),this.getCurrentShoppingCartNew()},methods:p()({},Object(n.b)(["getOrgProductsClassic","getOrgProductsNews","getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{getPreviousPage:function(t){switch(t){case"classic":if(1===this.currentClassicPage)return;this.currentClassicPage-=1;break;case"new":if(1===this.currentNewPage)return;this.currentNewPage-=1}},getNextPage:function(t){switch(t){case"classic":if(2===this.currentClassicPage)return;this.currentClassicPage+=1;break;case"new":if(2===this.currentNewPage)return;this.currentNewPage+=1}},addCart:function(t,e,s){var a={product_id:e,qty:s};switch(t.split("")[0]){case"A":case"B":this.$store.dispatch("addCartClassic",a);break;case"V":this.$store.dispatch("addCartNews",a)}},getCategoryProducts:function(){return this.classicAndNewData}})},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"products_classic"},t._l(t.categoryProducts,function(e,a){return s("div",{key:a,staticClass:"products"},[s("b-row",{staticClass:"top"},[s("b-col",{attrs:{cols:"11"}},[s("h2",[t._v(t._s(e.title))])]),t._v(" "),s("b-col",{staticClass:"page justify-content-center mb-4",attrs:{cols:"1"}},[s("div",[s("i",{staticClass:"fas fa-angle-left",on:{click:function(s){return t.getPreviousPage(e.title)}}})]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-angle-right",on:{click:function(s){return t.getNextPage(e.title)}}})])])],1),t._v(" "),s("b-row",t._l(e.data,function(e,a){return s("b-col",{key:a,staticClass:"products",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[s("div",{staticClass:"wine"},[s("div",{staticClass:"introduction"},[s("div",{staticClass:"product_left"},[s("h5",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.category))]),t._v(" "),s("div",{staticClass:"year"},[s("div",{staticClass:"am"},[s("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),s("p",[t._v("85")])]),t._v(" "),s("div",{staticClass:"ws"},[s("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),s("p",[t._v("100")])])]),t._v(" "),s("div",{staticClass:"sale_price"},[s("div",{staticClass:"sale"},[t._v("＄"+t._s(e.price))]),t._v(" "),s("div",{staticClass:"price"},[t._v("＄"+t._s(e.origin_price))])])]),t._v(" "),s("div",{staticClass:"product_right"},[s("img",{attrs:{src:e.image,alt:"product"}})]),t._v(" "),s("div",{staticClass:"product_top_detail"},[s("div",{staticClass:"product_top_detail_inner"},[s("p",[t._v("經典")])])])]),t._v(" "),s("div",{staticClass:"product_bottom"},[s("div",{staticClass:"cart_num_out"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.productNum,expression:"product.productNum"}],staticClass:"cart_num",on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"productNum",s.target.multiple?a:a[0])}}},t._l(10,function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}),0),t._v(" "),s("button",{on:{click:function(s){return t.addCart(e.title,e.id,e.productNum)}}},[t._v("Add to cart")])])])])])}),1)],1)}),0)])},staticRenderFns:[]};var T=s("VU/8")(V,X,!1,function(t){s("iRgB")},"data-v-6bd84575",null).exports,H={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"content"},[s("div",{staticClass:"content_left"},[s("a",{attrs:{href:"##"}},[t._v("Wine Space")]),t._v(" "),s("p",{staticClass:"copyright"},[t._v("Copyright © 2020 Happy Wine")])]),t._v(" "),s("div",{staticClass:"content_right"},[s("p",[t._v("contact")]),t._v(" "),s("p",[t._v("Email : XXX@gmail.com")]),t._v(" "),s("p",[t._v("mobile : 09XX-XXX-XXX")])])])])}]};var L=s("VU/8")({name:"Footer"},H,!1,function(t){s("vwPB")},"data-v-903352f0",null).exports,B={name:"App",components:{HeaderNavbarAndCarousel:b,Introduction:E,Products:T,Footer:L}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("HeaderNavbarAndCarousel"),this._v(" "),e("main",[e("div",{staticClass:"container"},[e("Products"),this._v(" "),e("Introduction")],1)]),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var M=s("VU/8")(B,q,!1,function(t){s("h1MT")},"data-v-55f570d8",null).exports,W={name:"HeaderNavbar",components:{Navbar:f}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("Navbar")],1)},staticRenderFns:[]};var Y=s("VU/8")(W,J,!1,function(t){s("y4nF")},"data-v-1b0ea690",null).exports,z={name:"Login",components:{HeaderNavbar:Y},data:function(){return{user:{username:"",password:""},notSuccess:""}},methods:{signin:function(){var t=this;this.axios.post("https://vue-course-api.hexschool.io/signin",this.user).then(function(e){switch(e.data.success){case!0:t.$router.push("/"),t.$store.commit("checkSignIn",!0);break;case!1:t.notSuccess="沒有登入成功"}})}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"outer"},[s("HeaderNavbar"),t._v(" "),s("div",{staticClass:"form_outer"},[s("form",[s("div",[s("div",[s("label",{attrs:{for:"email"}},[t._v("登入信箱 ：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.username,expression:"user.username",modifiers:{trim:!0}}],attrs:{type:"text",id:"email",placeholder:"請輸入登入信箱"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("div",[s("label",{attrs:{for:"password"}},[t._v("密碼 :")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.password,expression:"user.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",placeholder:"請輸入密碼"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),s("div",[s("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("登入")]),t._v(" "),s("p",[t._v(t._s(t.notSuccess))])])])])])],1)},staticRenderFns:[]};var K=s("VU/8")(z,G,!1,function(t){s("sTso")},"data-v-3db15580",null).exports,Q={name:"ProductsPage",components:{HeaderNavbar:Y,Footer:L},data:function(){return{wineCategory:["New酒品","Classic酒品","全部酒品"],categoryRender:"New酒品",classicAndNewData:[]}},computed:p()({},Object(n.c)(["orgProductsClassic","orgProductsNews"]),{categoryProducts:function(){return this.getCategoryProducts()}}),watch:{orgProductsClassic:function(){var t={title:"classic"};t.data=this.orgProductsClassic,this.classicAndNewData.push(t)},orgProductsNews:function(){var t={title:"new"};t.data=this.orgProductsNews,this.classicAndNewData.push(t)}},mounted:function(){this.getOrgProductsClassic(),this.getOrgProductsNews(),this.getCurrentShoppingCartClassic(),this.getCurrentShoppingCartNew()},methods:p()({},Object(n.b)(["getOrgProductsClassic","getOrgProductsNews","getCurrentShoppingCartClassic","getCurrentShoppingCartNew"]),{addCart:function(t,e,s){var a={product_id:e,qty:s};switch(t.split("")[0]){case"A":case"B":this.$store.dispatch("addCartClassic",a);break;case"V":this.$store.dispatch("addCartNews",a)}},getCategory:function(t){switch(t){case"New酒品":this.categoryRender="New酒品";break;case"Classic酒品":this.categoryRender="Classic酒品";break;case"全部酒品":this.categoryRender="全部酒品"}},getCategoryProducts:function(){switch(this.categoryRender){case"New酒品":return this.classicAndNewData.filter(function(t){return"new"===t.title});case"Classic酒品":return this.classicAndNewData.filter(function(t){return"classic"===t.title});case"全部酒品":return this.classicAndNewData}}})},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeaderNavbar",{staticClass:"header_img"}),t._v(" "),s("main",{staticClass:"container"},[s("div",{staticClass:"filter"},[s("h5",{staticClass:"category"},[t._v("酒品分類")]),t._v(" "),t._l(t.wineCategory,function(e,a){return s("div",{key:a},[s("p",{class:{filter_category:t.categoryRender===e},on:{click:function(s){return t.getCategory(e)}}},[t._v(t._s(e))])])})],2),t._v(" "),s("div",{staticClass:"products_outer"},t._l(t.categoryProducts,function(e,a){return s("div",{key:a,staticClass:"products"},[s("b-row",{staticClass:"top"},[s("b-col",{attrs:{cols:"12"}},[s("h2",[t._v(t._s(e.title))])])],1),t._v(" "),s("b-row",t._l(e.data,function(e,a){return s("b-col",{key:a,staticClass:"product",attrs:{cols:"12 mb-5",md:"6",lg:"3"}},[s("div",{staticClass:"wine"},[s("div",{staticClass:"product_top"},[s("div",{staticClass:"product_left"},[s("h5",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.category))]),t._v(" "),s("div",{staticClass:"year"},[s("div",{staticClass:"am"},[s("p",{staticClass:"title"},[t._v("AM")]),t._v(" "),s("p",[t._v("85")])]),t._v(" "),s("div",{staticClass:"ws"},[s("p",{staticClass:"title"},[t._v("WS")]),t._v(" "),s("p",[t._v("100")])])]),t._v(" "),s("div",{staticClass:"sale_price"},[s("div",{staticClass:"sale"},[t._v("＄"+t._s(e.price))]),t._v(" "),s("div",{staticClass:"price"},[t._v("＄"+t._s(e.origin_price))])])]),t._v(" "),s("div",{staticClass:"product_right"},[s("img",{attrs:{src:e.image,alt:"product"}})])]),t._v(" "),s("div",{staticClass:"product_bottom"},[s("div",{staticClass:"cart_num_out"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.productNum,expression:"product.productNum"}],staticClass:"cart_num",on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"productNum",s.target.multiple?a:a[0])}}},t._l(10,function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}),0),t._v(" "),s("button",{on:{click:function(s){return t.addCart(e.title,e.id,e.productNum)}}},[t._v("Add to cart")])])])])])}),1)],1)}),0)]),t._v(" "),s("Footer")],1)},staticRenderFns:[]};var tt=s("VU/8")(Q,Z,!1,function(t){s("oikd")},"data-v-0c542235",null).exports;a.default.use(l.a);var et=new l.a({routes:[{path:"/",name:"App",component:M},{path:"/productsPage",name:"ProductsPage",component:tt},{path:"/login",name:"Login",component:K}]}),st=s("Tqaz");s("Jmt5"),s("9M+g");a.default.use(st.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:et,store:u,components:{App:M},template:"<router-view></router-view>"})},Ndb9:function(t,e){},bSCx:function(t,e){},cvXP:function(t,e,s){t.exports=s.p+"static/img/introduction3.8d90c87.jpg"},gdYi:function(t,e){},h1MT:function(t,e){},iA3F:function(t,e){},iRgB:function(t,e){},lS9k:function(t,e){},oikd:function(t,e){},sTso:function(t,e){},vwPB:function(t,e){},y4nF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.59aa2fee51b50c043580.js.map