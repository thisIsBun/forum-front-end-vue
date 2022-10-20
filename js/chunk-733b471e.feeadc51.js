(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733b471e"],{5652:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("AdminNav"),t.isLoading?e("Spinner"):[e("form",{staticClass:"my-4",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory.apply(null,arguments)}}},[t._v(" 新增 ")])])])]),e("table",{staticClass:"table"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col",width:"60"}},[t._v(" # ")]),e("th",{attrs:{scope:"col"}},[t._v(" Category Name ")]),e("th",{attrs:{scope:"col",width:"210"}},[t._v(" Action ")])])]),e("tbody",t._l(t.categories,(function(a){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.id)+" ")]),e("td",{staticClass:"position-relative"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(" "+t._s(a.name)+" ")]),e("input",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:a.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleCancel(a.id)}}},[t._v(" ✕ ")])]),e("td",{staticClass:"d-flex justify-content-between"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!a.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleIsEditing(a.id)}}},[t._v(" Edit ")]),e("button",{directives:[{name:"show",rawName:"v-show",value:a.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.updateCategory({categoryId:a.id,name:a.name})}}},[t._v(" Save ")]),e("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCategory(a.id)}}},[t._v(" Delete ")])])])})),0)])]],2)},r=[],i=(a("d9e2"),a("e04c")),n=a("be6c"),o=a("2fa3"),c=a("2375"),d={components:{AdminNav:i["a"],Spinner:c["a"]},data(){return{categories:[],newCategoryName:"",isProcessing:!1,isLoading:!0}},created(){this.fetchCategories()},methods:{async fetchCategories(){try{const{data:t,statusText:e}=await n["a"].categories.get();if("OK"!==e)throw new Error(e);this.categories=t.categories.map(t=>({...t,isEditing:!1,nameCached:""})),this.isLoading=!1}catch(t){this.isLoading=!1,o["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"})}},async createCategory(){try{this.isProcessing=!0;const{data:t,statusText:e}=await n["a"].categories.create({name:this.newCategoryName});if("OK"!==e||"error"===t.message)throw this.isProcessing=!1,new Error(e);this.categories.push({id:t.categoryId,name:this.newCategoryName}),this.isProcessing=!1,this.newCategoryName=""}catch(t){console.log(t.message),this.isProcessing=!1,o["a"].fire({icon:"error",title:"無法新增餐廳類別，請稍後再試"})}},async deleteCategory(t){try{const{data:e}=await n["a"].categories.delete({categoryId:t});if("success"!==e.status)throw new Error(e.message);this.categories=this.categories.filter(e=>e.id!==t)}catch(e){o["a"].fire({icon:"error",title:"無法刪除餐廳類別，請稍後再試"})}},toggleIsEditing(t){this.categories=this.categories.map(e=>e.id===t?{...e,isEditing:!e.isEditing,nameCached:e.name}:e)},async updateCategory({categoryId:t,name:e}){try{const{data:a}=await n["a"].categories.update({categoryId:t,name:e});if("success"!==a.status)throw new Error(a.message);this.toggleIsEditing(t)}catch(a){o["a"].fire({icon:"error",title:"無法編輯餐廳類別，請稍後再試"})}},handleCancel(t){this.categories=this.categories.map(e=>e.id===t?{...e,name:e.nameCached}:e),this.toggleIsEditing(t)}}},u=d,g=(a("f2a5"),a("2877")),l=Object(g["a"])(u,s,r,!1,null,"7f700d49",null);e["default"]=l.exports},be6c:function(t,e,a){"use strict";var s=a("2fa3");e["a"]={users:{get(){return s["b"].get("/admin/users")},update({userId:t,isAdmin:e}){return s["b"].put("/admin/users/"+t,{isAdmin:e})}},categories:{get(){return s["b"].get("/admin/categories")},create({name:t}){return s["b"].post("/admin/categories",{name:t})},delete({categoryId:t}){return s["b"].delete("/admin/categories/"+t)},update({categoryId:t,name:e}){return s["b"].put("/admin/categories/"+t,{categoryId:t,name:e})}},restaurants:{create({formData:t}){return s["b"].post("/admin/restaurants",t)},get(){return s["b"].get("/admin/restaurants")},getDetail({restaurantId:t}){return s["b"].get("/admin/restaurants/"+t)},delete({restaurantId:t}){return s["b"].delete("/admin/restaurants/"+t)},update({restaurantId:t,formData:e}){return s["b"].put("/admin/restaurants/"+t,e)}}}},c67e:function(t,e,a){},e04c:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("h1",[t._v("餐廳後台")]),e("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),e("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},r=[],i=a("2877"),n={},o=Object(i["a"])(n,s,r,!1,null,null,null);e["a"]=o.exports},f2a5:function(t,e,a){"use strict";a("c67e")}}]);
//# sourceMappingURL=chunk-733b471e.feeadc51.js.map