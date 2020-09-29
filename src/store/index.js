import Vue from 'vue'
import Vuex from "vuex"
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    productsPicks:"",
    productsNews:"",
    signinChange: false,
    addCartClassic1:"",
    addCartNews1:"",
    shoppingProductsClassic1:"",
    shoppingProductsNew1:"",
  },
  mutations: {
    addCart1(state, id) {
      if (state.productsPicks[id].total >= state.productsPicks[id].num) {
        state.productsPicks[id].cart += state.productsPicks[id].num;
      };
      if (state.productsPicks[id].total >= state.productsPicks[id].num) {
        state.productsPicks[id].total -= state.productsPicks[id].num;
      };
      if (state.productsPicks[id].total == 0) {
        state.productsPicks[id].sale = "OUT OF STOCK";
      }
    },
    addCart2(state, id) {
      if (state.productsNews[id].total >= state.productsNews[id].num) {
        state.productsNews[id].cart += state.productsNews[id].num;
      };
      if (state.productsNews[id].total >= state.productsNews[id].num) {
        state.productsNews[id].total -= state.productsNews[id].num;
      };
      if (state.productsNews[id].total == 0) {
        state.productsNews[id].sale = "OUT OF STOCK";
      }
    },
    productsPicks(state, payload) {
      let newPayload=[];
      newPayload=payload.map((item)=>{
                  item.nums=1;
                  return item
                });
      state.productsPicks = newPayload;
    },
    productsNews(state, payload) {
      let newPayload=[];
      newPayload=payload.map((item)=>{
                  item.nums=1;
                  return item
                });
      state.productsNews = newPayload;
    },
    signinChange(state, payload){
      state.signinChange = payload;
    },
    addCartClassic1(state, payload){
      state.addCartClassic1 = payload;
    },
    addCartNews1(state, payload){
      state.addCartNews1 = payload;
    },
    shoppingProductsClassic1(state, payload){
      state.shoppingProductsClassic1 = payload;
    },
    shoppingProductsNew1(state, payload){
      state.shoppingProductsNew1 = payload;
    }
  },
  actions:{
    wineProductsPicks(context){
      axios.get("https://vue-course-api.hexschool.io/api/wine5/products").then((res)=>{
        context.commit("productsPicks",res.data.products);
      })
    },
    wineProductsNews(context){
      axios.get("https://vue-course-api.hexschool.io/api/wine52/products").then((res)=>{
        context.commit("productsNews",res.data.products);
      })
    },
    addCartClassic(context,payload){
      axios.post("https://vue-course-api.hexschool.io/api/wine5/cart",{data:payload}).then((res)=>{
        context.commit("addCartClassic1",res.data);
      })
    },
    addCartNews(context,payload){
      axios.post("https://vue-course-api.hexschool.io/api/wine52/cart",{data:payload}).then((res)=>{
        context.commit("addCartNews1",res.data.carts);
      })
    },
    shoppingProductsClassic(context){
      axios.get("https://vue-course-api.hexschool.io/api/wine5/cart").then((res)=>{
        context.commit("shoppingProductsClassic1",res.data.data.carts);
        console.log("12345",res.data.data.carts)
      })
    },
    shoppingProductsNew(context){
      axios.get("https://vue-course-api.hexschool.io/api/wine52/cart").then((res)=>{
        context.commit("shoppingProductsNew1",res.data.data.carts);
        console.log("54321",res.data.data.carts)
      })
    },
    delectProductsClassic(context,payload){
      axios.delete(`https://vue-course-api.hexschool.io/api/wine5/cart/${payload}`).then((res)=>{
        console.log(res);
        context.dispatch("shoppingProductsClassic");
      })
    },
    delectProductsNew(context,payload){
      axios.delete(`https://vue-course-api.hexschool.io/api/wine52/cart/${payload}`).then((res)=>{
        console.log(res);
        context.dispatch("shoppingProductsNew");
      })
    },
    signOutChange(context){
      axios.post("https://vue-course-api.hexschool.io/logout").then((result)=>{
        console.log(result);
        context.commit("signinChange",false);
      })
    }
  }
})