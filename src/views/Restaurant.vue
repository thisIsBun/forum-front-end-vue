<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>

    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
    :restaurantComments="restaurantComments" 
    @after-delete-comment="afterDeleteComment"
    />

    <!-- 新增評論 CreateComment -->
    <CreateComment 
    :restaurantId="restaurant.id" 
    @after-create-comment="afterCreateComment"
    />


  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'


// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: '管理者',
//     email: 'root@example.com',
//     image: 'https://i.pravatar.cc/300',
//     isAdmin: true
//   },
//   isAuthenticated: true
// }

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      // currentUser: {} --> 要移除，currentUser資料都來自 Vuex
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant(restaurantId) {

      try {

        const { data } = await restaurantAPI.getRestaurant({ restaurantId })

        const { isFavorited, isLiked, restaurant } = data
        const { Category, Comments, address, description, id, image, name, opening_hours, tel } = restaurant

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours: opening_hours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        }
        this.restaurantComments = Comments

      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }

    },
    afterDeleteComment (commentId) {
      console.log('afterDeleteComment', commentId)

      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {

      // payload：要攜帶的資料
      const {commentId, restaurantId, text} = payload

      this.restaurantComments.push({
        id: commentId,
        text,
        RestaurantId: restaurantId,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        }
      })
    }
  }
 }
</script>
