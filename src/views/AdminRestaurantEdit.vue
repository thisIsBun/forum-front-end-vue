<template>
  <div class="container py-5">
    <AdminRestaurantForm 
    :initialRestaurant="restaurant"
    @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

const dummyData = {
  'restaurant': {
    'id': 1,
    'name': 'Laurence Reynolds',
    'tel': '1-657-067-3756 x9782',
    'address': '187 Kirlin Squares',
    'opening_hours': '08:00',
    'description': 'sit est mollitia',
    'image': 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
    'viewCounts': 1,
    'createdAt': '2019-07-30T16:24:55.432Z',
    'updatedAt': '2019-07-30T17:26:43.260Z',
    'CategoryId': 3,
    'Category': {
      'id': 3,
      'name': '義大利料理',
      'createdAt': '2019-07-30T16:24:55.429Z',
      'updatedAt': '2019-07-30T16:24:55.429Z'
    }
  }
}

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
      }
    }
  },
  created () {
    const id = this.$route.params.id
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant (restaurantId) {

      console.log(restaurantId)
      
      const { restaurant } = dummyData
      const { id, name, CategoryId, tel, address, opening_hours , description, image} = restaurant

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
    },
    handleAfterSubmit(formData) {

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
