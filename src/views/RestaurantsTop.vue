<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">

        <div class="col-md-4">
          <router-link 
          :to="{name: 'restaurant', params: {id: restaurant.id}}"
          >
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              :to="{name: 'restaurant', params: {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorited(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorited(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  "restaurants": [
    {
      "id": 50,
      "name": "Delmer Heidenreich",
      "tel": "447.340.3498 x57332",
      "address": "1547 Ryan Landing",
      "opening_hours": "08:00",
      "description": "Ipsa accusantium id officiis repellendus vel digni",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.59355772057567",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Kiana Stiedemann",
      "tel": "971.573.1386 x95784",
      "address": "033 Duane Tunnel",
      "opening_hours": "08:00",
      "description": "Vel aliquam quia consequatur. Veritatis esse aliqu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.13960927203758",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Micah Koss",
      "tel": "657-018-8738 x3334",
      "address": "600 Estelle Plains",
      "opening_hours": "08:00",
      "description": "Iusto voluptatibus ut adipisci sint.\nQuia facere p",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.73356803497228",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Coty Wiza",
      "tel": "1-592-514-1897",
      "address": "40173 Alexander Overpass",
      "opening_hours": "08:00",
      "description": "Nihil voluptatum repudiandae architecto. Tempore d",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.37316190208264",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Araceli Yost",
      "tel": "1-476-002-6311",
      "address": "160 Lempi Center",
      "opening_hours": "08:00",
      "description": "quo",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.975170524861092",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Chesley Hand",
      "tel": "1-775-242-0148 x64920",
      "address": "615 Rickie Isle",
      "opening_hours": "08:00",
      "description": "Tempora possimus qui quo perferendis. Enim qui sae",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.92334621245237",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Kiley MacGyver",
      "tel": "038-884-3712 x28075",
      "address": "8033 Schroeder Loaf",
      "opening_hours": "08:00",
      "description": "ut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.42230569968463",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Julia Moore",
      "tel": "1-674-172-5156 x53440",
      "address": "894 Idella Dale",
      "opening_hours": "08:00",
      "description": "Adipisci facilis veniam reprehenderit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.691401014238856",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Karen Hyatt",
      "tel": "1-263-292-8442 x48154",
      "address": "39566 Shirley Cape",
      "opening_hours": "08:00",
      "description": "Fuga ut deserunt qui et voluptatem quia sequi volu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.5649012347134",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Mr. Aniya Nitzsche",
      "tel": "033-118-0386",
      "address": "85849 Vernie Camp",
      "opening_hours": "08:00",
      "description": "earum",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.478494487375706",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

export default {
  components: {
    NavTabs,
  },
  data () {
    return {
      restaurants: dummyData.restaurants
    }
  },
  methods: {
    addFavorited (restaurantId) {
      this.restaurants = this.restaurants.map( restaurant => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: true
          }
        } else {
          return {
            ...restaurant,
          }
        }
      })
    },
    deleteFavorited (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: false
          }
        } else {
          return {
            ...restaurant,
          }
        }
      })
    }
  }
}
</script>