<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category ? restaurant.Category.name : '未分類' }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>

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
    "updatedAt": "2022-09-17T05:57:19.000Z",
    "CategoryId": 5,
    "Category": {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z"
    },
    "Comments": [
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
      }
    ]
  }
}

export default {
  data () {
    return {
      restaurant: dummyData.restaurant
    }
  }
}
</script>