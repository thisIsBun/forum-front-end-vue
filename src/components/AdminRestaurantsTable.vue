<template>
  <div>
    <Spinner v-if="isLoading" />
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Category
          </th>
          <th scope="col">
            Name
          </th>
          <th
            scope="col"
            width="300"
          >
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="restaurant in restaurants"
          :key="restaurant.id"
        >
          <td scope="row">{{ restaurant.id }}</td>
          <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
          <td>{{ restaurant.name }}</td>
          <td class="d-flex justify-content-between">
            <router-link
              :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
              class="btn btn-link"
            >Show</router-link>

            <router-link
              :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id}}"
              class="btn btn-link"
            >Edit</router-link>

            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="deleteRestaurant(restaurant.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants () {
      try {
        const response = await adminAPI.restaurants.get()
        this.restaurants = response.data.restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳清單，請稍後再試'
        })
      }   
    },
    async deleteRestaurant (restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.delete({restaurantId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>