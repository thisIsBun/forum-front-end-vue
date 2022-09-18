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

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Dr. Chloe Stroman",
    "tel": "314.863.0863",
    "address": "313 Renee Shores",
    "opening_hours": "08:00",
    "description": "Fugiat assumenda quo quas. Ut aut nostrum distinctio tenetur debitis. Est aut et est magni itaque pariatur laborum cupiditate distinctio. Occaecati et pariatur aut est. Quam est ipsa harum omnis saepe delectus repellat mollitia. Quod quasi similique officiis.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.560792367453104",
    "viewCounts": 1,
    "createdAt": "2022-09-13T00:32:28.000Z",
    "updatedAt": "2022-09-17T05:57:19.439Z",
    "CategoryId": 5,
    "Category": {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 101,
        "text": "Incidunt eaque tempora earum quasi.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$N.hlatXopaDRe.OYiEK/yOX3yDBWBFWMOYmdcRn/eOzlsu9DRJ.eG",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-09-13T00:32:28.000Z",
          "updatedAt": "2022-09-13T00:32:28.000Z"
        }
      },
      {
        "id": 51,
        "text": "Labore aut sit quam architecto doloribus saepe aut.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$pWd3OtsbIVlXn9guqdUMDuheMQCGakX6EBGzzT1nNvBeu5Z.ST7xG",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-09-13T00:32:28.000Z",
          "updatedAt": "2022-09-13T00:32:28.000Z"
        }
      },
      {
        "id": 1,
        "text": "Atque odit soluta itaque ut consequatur qui earum.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$pWd3OtsbIVlXn9guqdUMDuheMQCGakX6EBGzzT1nNvBeu5Z.ST7xG",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-09-13T00:32:28.000Z",
          "updatedAt": "2022-09-13T00:32:28.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

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
      currentUser: {}
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {

      console.log('restaurantId', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category ? dummyData.restaurant.Category.name : '未分類',
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      }

      this.restaurantComments = dummyData.restaurant.Comments
      this.currentUser = dummyUser.currentUser
    },
    afterDeleteComment (commentId) {
      console.log('afterDeleteComment', commentId)

      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
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
