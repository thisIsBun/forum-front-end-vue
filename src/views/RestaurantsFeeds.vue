<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />

    <template v-else>
      <h1 class="mt-5">
        最新動態
      </h1>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <NewestRestaurants :restaurants="restaurants" />
          <!-- 最新餐廳 NewestRestaurants -->
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds () {
      try {
        const response = await restaurantsAPI.getFeeds()

        const { restaurants, comments } = response.data
        this.restaurants = restaurants
        this.comments = comments.filter(comment => comment.Restaurant && comment.text) //過濾餐廳/評論 null
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
      }
    }
  }
}
</script>