(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330bf35e"],{be6c:function(t,a,e){"use strict";var s=e("2fa3");a["a"]={users:{get(){return s["b"].get("/admin/users")},update({userId:t,isAdmin:a}){return s["b"].put("/admin/users/"+t,{isAdmin:a})}},categories:{get(){return s["b"].get("/admin/categories")},create({name:t}){return s["b"].post("/admin/categories",{name:t})},delete({categoryId:t}){return s["b"].delete("/admin/categories/"+t)},update({categoryId:t,name:a}){return s["b"].put("/admin/categories/"+t,{categoryId:t,name:a})}},restaurants:{create({formData:t}){return s["b"].post("/admin/restaurants",t)},get(){return s["b"].get("/admin/restaurants")},getDetail({restaurantId:t}){return s["b"].get("/admin/restaurants/"+t)},delete({restaurantId:t}){return s["b"].delete("/admin/restaurants/"+t)},update({restaurantId:t,formData:a}){return s["b"].put("/admin/restaurants/"+t,a)}}}},f91c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),a("div",{staticClass:"well"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),a("li",[a("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),a("li",[a("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),a("div",{staticClass:"col-md-8"},[a("p",[t._v(t._s(t.restaurant.description))])])]),a("hr"),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.$router.back()}}},[t._v("回上一頁")])]],2)},r=[],n=e("ac0d"),i=e("be6c"),d=e("2fa3"),u=e("2375"),o={mixins:[n["a"]],components:{Spinner:u["a"]},data(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""},isLoading:!0}},created(){const t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate(t,a,e){const{id:s}=t.params;this.fetchRestaurant(s),e()},methods:{async fetchRestaurant(t){try{const{data:a}=await i["a"].restaurants.getDetail({restaurantId:t}),{restaurant:e}=a,{id:s,name:r,tel:n,address:d,opening_hours:u,description:o,image:c,Category:m}=e;this.restaurant={...this.restaurant,id:s,name:r,categoryName:m?m.name:"未分類",image:c,openingHours:u,tel:n,address:d,description:o},this.isLoading=!1}catch(a){this.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}}}},c=o,m=e("2877"),l=Object(m["a"])(c,s,r,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-330bf35e.7e45307c.js.map