(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container py-5"},[t("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:e.user.name,required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?t("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200"}}):e._e(),t("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"資料更新中":"Submit")+" ")])])])},a=[],i=(s("d9e2"),s("2f62")),n=s("1602"),o=s("2fa3"),u={data(){return{user:{},isProcessing:!1}},computed:{...Object(i["b"])(["currentUser"])},created(){if(-1===this.currentUser.id)return;const{id:e}=this.$route.params;this.setUser(e)},beforeRouteUpdate(e,t,s){if(-1===this.currentUser.id)return;const{id:r}=e.params;this.setUser(r),s()},watch:{currentUser(e){this.user={...e}}},methods:{setUser(e){this.currentUser.id!==Number(e)&&this.$router.push({name:"not-found"}),this.user={...this.currentUser}},async handleSubmit(e){try{if(!this.user.name)return void o["a"].fire({icon:"warning",title:"請輸入名稱"});this.isProcessing=!0;const t=e.target,s=new FormData(t),r=await n["a"].update({userId:this.currentUser.id,formData:s});if(console.log(r),"error"===r.data.status)throw this.isProcessing=!1,new Error(r.data.message);this.$router.push({name:"user",params:{id:this.currentUser.id}})}catch(t){console.error(t.message),this.isProcessing=!1,o["a"].fire({icon:"error",title:"無法編輯資訊，請稍後再試"})}},handleFileChange(e){const t=e.target.files;if(0===t.length)this.user.image="";else{const e=window.URL.createObjectURL(t[0]);this.user.image=e}}}},c=u,m=s("2877"),l=Object(m["a"])(c,r,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d228901.71c576d0.js.map