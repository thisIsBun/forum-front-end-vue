(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.Category?t.restaurant.Category.name:"未分類")+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.commentsCount)+" ")]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts)+" ")])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.$router.back()}}},[t._v(" 回上一頁 ")])]],2)},e=[],r=n("c4c3"),i=n("2fa3"),o=n("2375"),c={components:{Spinner:o["a"]},data(){return{restaurant:{},commentsCount:"",isLoading:!0}},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},beforeRouteUpdate(t,a,n){const{id:s}=t.params;this.fetchRestaurant(s),n()},methods:{async fetchRestaurant(t){try{const{data:a}=await r["a"].getDashboard({restaurantId:t});this.restaurant=a.restaurant,this.commentsCount=a.restaurant.Comments.length,this.isLoading=!1}catch(a){this.isLoading=!1,i["a"].fire({icon:"error",title:"無法取得餐廳資訊，請稍後再試"})}}}},u=c,d=n("2877"),h=Object(d["a"])(u,s,e,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.b8fdd932.js.map