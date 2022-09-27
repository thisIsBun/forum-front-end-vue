<template>
  <div class="container py-5">
    <NavTabs />

    <!-- Restaurant NavPills -->
    <RestaurantsNavPills 
    :categories="categories"
    />

    <!-- Restaurant Cards -->
    <div class="row">
      <RestaurantCards 
      v-for="restaurant in restaurants" 
      :key="restaurant.id" 
      :initial-restaurant="restaurant" 
      />
    </div>

    <!-- Restaurant Paginator -->
    <RestaurantsPagination 
    v-if="totalPage.length > 1"
    :current-page="currentPage"
    :total-page="totalPage"
    :previous-page="previousPage"
    :next-page="nextPage"
    :categoryId="categoryId"
    />

  </div>
</template>

<script>
  import NavTabs from '../components/NavTabs.vue'
  import RestaurantCards from '../components/RestaurantCard.vue'
  import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
  import RestaurantsPagination from '../components/RestaurantsPagination.vue'
  import restaurantsAPI from '../apis/restaurants'
  import { Toast } from '../utils/helpers'


  export default {
    components: {
      NavTabs,
      RestaurantCards,
      RestaurantsNavPills,
      RestaurantsPagination,
    },
    data () {
      return {
        restaurants: [],
        categories: [],
        categoryId: -1, //預設沒有值，所以用 -1
        currentPage: 1,
        totalPage: "",
        previousPage: -1,
        nextPage: -1,
      }
    },
    created () {

      // 解決當用戶點開一個已經有 queryString的網址時，畫面上資料跟 query string內容不一致的問題 --> 需要用路由資訊產出畫面
      // 動態路由 = this.$route.query.page or this.$route.query.categoryId

      // 將 ''指派給 page/categoryId是避免空值，空值的時候是 'undefined'字串
      const { page = '', categoryId =''} = this.$route.query

      this.fetchRestaurants({
        queryPage: page,
        queryCategoryId: categoryId
      })
    },
    beforeRouteUpdate (to, from, next) {

      // beforeRouteUpdate，解決網頁 created後，網址改變時，重新向伺服器取得資料

      // 因為要知道最後要 to去哪裡，所以只需要使用 to.query就好
      const { page = '', categoryId = '' } = to.query // 將 ''指派給 page/categoryId是避免空值，空值的時候是 'undefined'字串
      this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
      next() // next表示繼續往下
    },
    methods: {
      async fetchRestaurants ({queryPage, queryCategoryId}) {

        try {
          const response = await restaurantsAPI.getRestaurants({
            page: queryPage,
            categoryId: queryCategoryId,
          })

          const { restaurants, categories, categoryId, page, totalPage, prev, next } = response.data

          this.restaurants = restaurants
          this.categories = categories
          this.categoryId = categoryId
          this.currentPage = page
          this.totalPage = totalPage
          this.previousPage = prev
          this.nextPage = next

        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: '無法取得餐廳資料，請稍後再試'
          })
        }
      }
    }
  }
</script>