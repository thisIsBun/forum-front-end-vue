<template>
  <div class="container py-5">
    <AdminRestaurantForm 
    :initialRestaurant="restaurant"
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
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: ''
      },
      isProcessing: false
    }
  },
  created () {
    const id = this.$route.params.id
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async fetchRestaurant (restaurantId) {

      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        const { id, name, CategoryId, tel, address, opening_hours , description, image} = data.restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryId: CategoryId,
          tel,
          address,
          openingHours: opening_hours,
          description,
          image
        }

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit(formData) {

      try {

        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.$router.push('/admin/restaurants')

      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }

      // TODO: 透過 api將表單內容傳到後端伺服器

      // formData直接讀取的資料比較複雜
      // 會先用 entries()，轉成 key-value pairs結構 --> [key, value]
      // 再用 for-of，及解構賦值方式，把值取出
      for (let [name, value] of formData.entries()) {
        console.log(name, ':', value)
      }
    }
  }
}
</script>
