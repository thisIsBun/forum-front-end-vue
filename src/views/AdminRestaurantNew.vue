<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
    @after-submit="handleAfterSubmit"
    />
    
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {

      // TODO: 透過 api將表格內容傳到伺服器

      // formData直接讀取的資料比較複雜
      // 會先用 entries()，轉成 key-value pairs結構 --> [key, value]
      // 再用 for-of，及解構賦值方式，把值取出
      for (let [name, value] of formData.entries()) {
        console.log(name, ':' , value)
      }
    }
  }
}
</script>