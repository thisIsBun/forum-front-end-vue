<template>
  <div class="card">
    <div class="card-header">
      <strong>{{favoritedRestaurants.length}}</strong>(收藏的餐廳)
    </div>
    <div class="card-body">
      <router-link
        v-for="favoritedRestaurant in favoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{name: 'restaurant', params: {id: favoritedRestaurant.Favorite.RestaurantId}}"
      >
        <img
          :src="favoritedRestaurant.image | emptyImage"
          width="60px"
          height="60px"
          class="mr-1"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixin.js'

export default {
  mixins: [emptyImageFilter],
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>