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

const dummyData = {
  "restaurants": [
    {
      "id": 1,
      "name": "Dr. Chloe Stroman",
      "tel": "314.863.0863",
      "address": "313 Renee Shores",
      "opening_hours": "08:00",
      "description": "Fugiat assumenda quo quas. Ut aut nostrum distinct",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.560792367453104",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 2,
      "name": "Una Hodkiewicz",
      "tel": "1-518-754-7910 x99951",
      "address": "4043 Carmel Harbor",
      "opening_hours": "08:00",
      "description": "Voluptatem voluptas quas architecto. Sed sed fugia",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.07936788677363",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 3,
      "name": "Jonas Carroll",
      "tel": "(544) 298-2857 x1086",
      "address": "901 Laurel Meadow",
      "opening_hours": "08:00",
      "description": "Molestiae sint in sint iste mollitia sequi soluta.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.76394841430083",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 4,
      "name": "Laurie Kunde",
      "tel": "1-664-632-0458 x7084",
      "address": "4520 Earlene Inlet",
      "opening_hours": "08:00",
      "description": "Dolorem laudantium omnis omnis non facere expedita",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.63614288348699",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 5,
      "name": "Briana Stark",
      "tel": "337-616-7070 x648",
      "address": "42954 Joanne Turnpike",
      "opening_hours": "08:00",
      "description": "Ut sed incidunt autem quia qui. Quos vero minima o",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.350903315206814",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 6,
      "name": "Matt Smitham",
      "tel": "1-726-687-1352 x74483",
      "address": "734 Vernie Rue",
      "opening_hours": "08:00",
      "description": "Aliquid et nemo eum quae et totam. Repellat aut qu",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.286550202231915",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 7,
      "name": "Harrison Vandervort Jr.",
      "tel": "424-119-1301 x426",
      "address": "56176 Stracke Road",
      "opening_hours": "08:00",
      "description": "aut ipsa minus",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.7502337208619",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 8,
      "name": "Dawn Willms",
      "tel": "635.784.6054",
      "address": "1381 Sarah Prairie",
      "opening_hours": "08:00",
      "description": "Deleniti quos nihil omnis ipsa consequatur ut quis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.19566823065438",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 9,
      "name": "Elyse Renner",
      "tel": "(334) 551-1624 x994",
      "address": "3757 Maudie Drives",
      "opening_hours": "08:00",
      "description": "Saepe dignissimos ut corporis ab.\nVoluptatibus min",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.43837840219449",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 10,
      "name": "Maribel Reichel",
      "tel": "1-765-700-3023",
      "address": "941 Schmeler Keys",
      "opening_hours": "08:00",
      "description": "Totam quae sequi. Praesentium et accusantium nobis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.520549457376",
      "viewCounts": 0,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    {
      "id": 6,
      "name": "美式料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    {
      "id": 7,
      "name": "複合式料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
    1,
    2,
    3,
    4,
    5
  ],
  "prev": 1,
  "next": 2
}
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
      this.fetchRestaurants()
    },
    methods: {
      fetchRestaurants () {
        const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData

        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next

      }
    }
  }
</script>