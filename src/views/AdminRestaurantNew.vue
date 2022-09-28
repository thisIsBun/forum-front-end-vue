<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
    @after-submit="handleAfterSubmit"
    :isProcessing="isProcessing"
    />
    
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  components: {
    AdminRestaurantForm,
  },
  data () {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {

        // 當 server再建立餐廳時，避免用戶連擊，用 isProcessing true disable按鈕
        this.isProcessing = true

        const { data } = await adminAPI.restaurants.create({ formData })      
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // server確認這筆新餐廳有加到清單後，路由改到後台餐廳清單
        this.$router.push('/admin/restaurants')

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }

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