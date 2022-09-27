<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link 
          :to="{name: 'restaurant', params: {id: restaurant.id}}"
          >
            {{restaurant.name}}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category ? restaurant.Category.name : '未分類'}}</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixin.js'
import usersAPI from '../apis/user'
import { Toast} from '../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite (restaurantId) {

      try {
        const response = await usersAPI.addFavorite({restaurantId})

        // response.data是一個物件，會有 status, message兩個 key
        // 如果 restaurantId後端判斷正確，會回傳 status success
        const { data } = response

        // 如果判斷不正確，拋出錯誤訊息
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 如果判斷正確，修改 restaurant data
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {

      try {

        const response = await usersAPI.deleteFavorite({restaurantId})
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
    async addLike(restaurantId) {

      try {

        const response = await usersAPI.addLike({restaurantId})
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳按讚，請稍後再試'
        })
      }
    },
    async deleteLike(restaurantId) {

      try {
        const response = await usersAPI.deleteLike({ restaurantId })
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳取消讚，請稍後再試'
        })
      }


    }
  }
}
</script>
