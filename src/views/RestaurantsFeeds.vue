<template>
  <div class="container py-5">
    <NavTabs />

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
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'

const dummyData = {
  "restaurants": [
    {
      "id": 1,
      "name": "Dr. Chloe Stroman",
      "tel": "314.863.0863",
      "address": "313 Renee Shores",
      "opening_hours": "08:00",
      "description": "Fugiat assumenda quo quas. Ut aut nostrum distinctio tenetur debitis. Est aut et est magni itaque pariatur laborum cupiditate distinctio. Occaecati et pariatur aut est. Quam est ipsa harum omnis saepe delectus repellat mollitia. Quod quasi similique officiis.",
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
      }
    },
    {
      "id": 2,
      "name": "Una Hodkiewicz",
      "tel": "1-518-754-7910 x99951",
      "address": "4043 Carmel Harbor",
      "opening_hours": "08:00",
      "description": "Voluptatem voluptas quas architecto. Sed sed fugiat mollitia quia. Cumque sit sequi. Id voluptas aperiam.",
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
      }
    },
    {
      "id": 3,
      "name": "Jonas Carroll",
      "tel": "(544) 298-2857 x1086",
      "address": "901 Laurel Meadow",
      "opening_hours": "08:00",
      "description": "Molestiae sint in sint iste mollitia sequi soluta. Id quia sed aut incidunt temporibus ex eligendi. Ex et et eum quo esse explicabo iure. Enim non vel iste alias eos culpa quas mollitia. Aut esse aliquid accusantium.",
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
      }
    },
    {
      "id": 4,
      "name": "Laurie Kunde",
      "tel": "1-664-632-0458 x7084",
      "address": "4520 Earlene Inlet",
      "opening_hours": "08:00",
      "description": "Dolorem laudantium omnis omnis non facere expedita in. Quidem voluptas aut delectus earum enim aperiam eligendi. Qui dignissimos culpa atque rerum quas minima doloremque. Architecto eveniet et ratione consectetur qui sit expedita.\n \rVeritatis libero eius doloremque. Vero non quo sunt. Qui voluptatibus quo eaque qui. Exercitationem aliquam blanditiis. Dolorem est amet et similique eum unde voluptatem ipsam. Praesentium ut earum hic.\n \rAdipisci alias est rerum accusamus. Est cumque sed est accusamus soluta. Et labore aut et et illum iusto optio. Quod eligendi pariatur. Similique et est molestiae corporis quos fugiat. Nam aliquam ex id est incidunt natus.",
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
      }
    },
    {
      "id": 5,
      "name": "Briana Stark",
      "tel": "337-616-7070 x648",
      "address": "42954 Joanne Turnpike",
      "opening_hours": "08:00",
      "description": "Ut sed incidunt autem quia qui. Quos vero minima odio porro maxime nemo numquam molestiae distinctio. Eum vel alias perspiciatis recusandae recusandae quia sint id quibusdam.",
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
      }
    },
    {
      "id": 6,
      "name": "Matt Smitham",
      "tel": "1-726-687-1352 x74483",
      "address": "734 Vernie Rue",
      "opening_hours": "08:00",
      "description": "Aliquid et nemo eum quae et totam. Repellat aut quia quas odio hic et fuga quo deserunt. Ipsa sit assumenda rerum voluptas.",
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
      }
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
      }
    },
    {
      "id": 8,
      "name": "Dawn Willms",
      "tel": "635.784.6054",
      "address": "1381 Sarah Prairie",
      "opening_hours": "08:00",
      "description": "Deleniti quos nihil omnis ipsa consequatur ut quis. Eius molestiae ut illum. Accusantium mollitia cumque eum.",
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
      }
    },
    {
      "id": 9,
      "name": "Elyse Renner",
      "tel": "(334) 551-1624 x994",
      "address": "3757 Maudie Drives",
      "opening_hours": "08:00",
      "description": "Saepe dignissimos ut corporis ab.\nVoluptatibus minus impedit hic mollitia facilis quia.\nOptio nihil perspiciatis.\nRerum est tenetur.\nAutem est ea fugiat consequatur porro amet.",
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
      }
    },
    {
      "id": 10,
      "name": "Maribel Reichel",
      "tel": "1-765-700-3023",
      "address": "941 Schmeler Keys",
      "opening_hours": "08:00",
      "description": "Totam quae sequi. Praesentium et accusantium nobis dolorum. Aliquam id veniam eaque sunt quo consequatur et est. Consequuntur dolor soluta commodi qui nemo autem praesentium assumenda.",
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
      }
    }
  ],
  "comments": [
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
      },
      "Restaurant": {
        "id": 1,
        "name": "Dr. Chloe Stroman",
        "tel": "314.863.0863",
        "address": "313 Renee Shores",
        "opening_hours": "08:00",
        "description": "Fugiat assumenda quo quas. Ut aut nostrum distinctio tenetur debitis. Est aut et est magni itaque pariatur laborum cupiditate distinctio. Occaecati et pariatur aut est. Quam est ipsa harum omnis saepe delectus repellat mollitia. Quod quasi similique officiis.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.560792367453104",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 2,
      "text": "Natus facilis architecto quo dolor molestiae quia ea.",
      "UserId": 1,
      "RestaurantId": 2,
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
      },
      "Restaurant": {
        "id": 2,
        "name": "Una Hodkiewicz",
        "tel": "1-518-754-7910 x99951",
        "address": "4043 Carmel Harbor",
        "opening_hours": "08:00",
        "description": "Voluptatem voluptas quas architecto. Sed sed fugiat mollitia quia. Cumque sit sequi. Id voluptas aperiam.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.07936788677363",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 3,
      "text": "Quae vel fugiat atque.",
      "UserId": 2,
      "RestaurantId": 3,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$3GnvfbcNCrq6bBkZJpwvTOImo/FR5KR30RSApLIWJc4rrHRh/F5yS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "Restaurant": {
        "id": 3,
        "name": "Jonas Carroll",
        "tel": "(544) 298-2857 x1086",
        "address": "901 Laurel Meadow",
        "opening_hours": "08:00",
        "description": "Molestiae sint in sint iste mollitia sequi soluta. Id quia sed aut incidunt temporibus ex eligendi. Ex et et eum quo esse explicabo iure. Enim non vel iste alias eos culpa quas mollitia. Aut esse aliquid accusantium.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.76394841430083",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 4,
      "text": "Quam dicta voluptates quaerat ratione sunt voluptas labore necessitatibus.",
      "UserId": 1,
      "RestaurantId": 4,
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
      },
      "Restaurant": {
        "id": 4,
        "name": "Laurie Kunde",
        "tel": "1-664-632-0458 x7084",
        "address": "4520 Earlene Inlet",
        "opening_hours": "08:00",
        "description": "Dolorem laudantium omnis omnis non facere expedita in. Quidem voluptas aut delectus earum enim aperiam eligendi. Qui dignissimos culpa atque rerum quas minima doloremque. Architecto eveniet et ratione consectetur qui sit expedita.\n \rVeritatis libero eius doloremque. Vero non quo sunt. Qui voluptatibus quo eaque qui. Exercitationem aliquam blanditiis. Dolorem est amet et similique eum unde voluptatem ipsam. Praesentium ut earum hic.\n \rAdipisci alias est rerum accusamus. Est cumque sed est accusamus soluta. Et labore aut et et illum iusto optio. Quod eligendi pariatur. Similique et est molestiae corporis quos fugiat. Nam aliquam ex id est incidunt natus.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.63614288348699",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 5,
      "text": "Deserunt vitae et.",
      "UserId": 2,
      "RestaurantId": 5,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$3GnvfbcNCrq6bBkZJpwvTOImo/FR5KR30RSApLIWJc4rrHRh/F5yS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "Restaurant": {
        "id": 5,
        "name": "Briana Stark",
        "tel": "337-616-7070 x648",
        "address": "42954 Joanne Turnpike",
        "opening_hours": "08:00",
        "description": "Ut sed incidunt autem quia qui. Quos vero minima odio porro maxime nemo numquam molestiae distinctio. Eum vel alias perspiciatis recusandae recusandae quia sint id quibusdam.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.350903315206814",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 6,
      "text": "Blanditiis quia ratione sint ducimus corporis.",
      "UserId": 2,
      "RestaurantId": 6,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$3GnvfbcNCrq6bBkZJpwvTOImo/FR5KR30RSApLIWJc4rrHRh/F5yS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "Restaurant": {
        "id": 6,
        "name": "Matt Smitham",
        "tel": "1-726-687-1352 x74483",
        "address": "734 Vernie Rue",
        "opening_hours": "08:00",
        "description": "Aliquid et nemo eum quae et totam. Repellat aut quia quas odio hic et fuga quo deserunt. Ipsa sit assumenda rerum voluptas.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.286550202231915",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 7,
      "text": "Iste odit quia quo maxime expedita est.",
      "UserId": 3,
      "RestaurantId": 7,
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
      },
      "Restaurant": {
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
        "CategoryId": 4
      }
    },
    {
      "id": 8,
      "text": "Unde nisi totam dicta explicabo nemo et laudantium ducimus.",
      "UserId": 3,
      "RestaurantId": 8,
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
      },
      "Restaurant": {
        "id": 8,
        "name": "Dawn Willms",
        "tel": "635.784.6054",
        "address": "1381 Sarah Prairie",
        "opening_hours": "08:00",
        "description": "Deleniti quos nihil omnis ipsa consequatur ut quis. Eius molestiae ut illum. Accusantium mollitia cumque eum.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.19566823065438",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 9,
      "text": "Possimus rerum dicta rerum saepe quam.",
      "UserId": 2,
      "RestaurantId": 9,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$3GnvfbcNCrq6bBkZJpwvTOImo/FR5KR30RSApLIWJc4rrHRh/F5yS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      },
      "Restaurant": {
        "id": 9,
        "name": "Elyse Renner",
        "tel": "(334) 551-1624 x994",
        "address": "3757 Maudie Drives",
        "opening_hours": "08:00",
        "description": "Saepe dignissimos ut corporis ab.\nVoluptatibus minus impedit hic mollitia facilis quia.\nOptio nihil perspiciatis.\nRerum est tenetur.\nAutem est ea fugiat consequatur porro amet.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=94.43837840219449",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 10,
      "text": "Aperiam deleniti non enim iusto odit nemo.",
      "UserId": 3,
      "RestaurantId": 10,
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
      },
      "Restaurant": {
        "id": 10,
        "name": "Maribel Reichel",
        "tel": "1-765-700-3023",
        "address": "941 Schmeler Keys",
        "opening_hours": "08:00",
        "description": "Totam quae sequi. Praesentium et accusantium nobis dolorum. Aliquam id veniam eaque sunt quo consequatur et est. Consequuntur dolor soluta commodi qui nemo autem praesentium assumenda.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.520549457376",
        "viewCounts": 0,
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z",
        "CategoryId": 3
      }
    }
  ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      const {restaurants, comments} = dummyData //用解構賦值的方式把 dummyData裡的兩個物件指派給 restaurants, comments變數
      this.restaurants = restaurants //再把變數指派到 data
      this.comments = comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
}
</script>