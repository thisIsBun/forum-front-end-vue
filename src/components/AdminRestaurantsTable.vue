<template>
  <table class="table">
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
</template>

<script>
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
      "viewCounts": 1,
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-17T05:57:19.000Z",
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
    },
    {
      "id": 11,
      "name": "Lazaro Runolfsdottir",
      "tel": "620-578-2958",
      "address": "2737 Smith Alley",
      "opening_hours": "08:00",
      "description": "Voluptatem dolor voluptate reprehenderit dolorem eveniet sint eum consequatur cum. Consectetur harum ut sit dignissimos blanditiis. Ratione tenetur cupiditate quibusdam. Officiis voluptatem amet consectetur cumque provident rem maiores qui. Ut et ex aut consectetur ut. Voluptas quo tempore.\n \rVoluptas vitae laudantium. Non quia voluptas. Cum quod et omnis sed est consequatur repudiandae est. Temporibus ut suscipit at. Tempore eveniet iure consequatur perspiciatis ut.\n \rVoluptas ea qui ipsam dolores aut non sint sint accusamus. Dolor autem enim maiores est rerum omnis. Architecto reprehenderit enim et aut alias sunt recusandae saepe dolor. Nemo nam nobis voluptatem reprehenderit quia vero sunt. Quia doloremque ut veritatis est dolores voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.337120879022734",
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
      "id": 12,
      "name": "Lorena Von",
      "tel": "468-749-3393 x7058",
      "address": "76703 Fiona Flats",
      "opening_hours": "08:00",
      "description": "Hic omnis fuga culpa explicabo ut. Accusamus placeat alias qui inventore nesciunt soluta iure voluptatem. Porro maxime distinctio non sint qui aspernatur aspernatur et. Beatae exercitationem animi nemo alias.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.7837550750027",
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
      "id": 13,
      "name": "Mrs. Nicholas O'Hara",
      "tel": "1-148-977-9530 x88589",
      "address": "1494 Rath Brook",
      "opening_hours": "08:00",
      "description": "Et repellat culpa et.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.86670518320892",
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
      "id": 14,
      "name": "Ms. Janie Sauer",
      "tel": "791.560.6073 x9877",
      "address": "45104 Hartmann Unions",
      "opening_hours": "08:00",
      "description": "Sed fugiat rerum corrupti voluptate ut quia aut excepturi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.54304167159553",
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
      "id": 15,
      "name": "Rodger Ledner",
      "tel": "(866) 170-4331",
      "address": "4998 Kirlin Fort",
      "opening_hours": "08:00",
      "description": "sit architecto dolores",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.082076593436035",
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
      "id": 16,
      "name": "Jennyfer Rodriguez",
      "tel": "(128) 203-9073 x6030",
      "address": "582 Waters Route",
      "opening_hours": "08:00",
      "description": "laboriosam",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.456782808804192",
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
      "id": 17,
      "name": "Jazmin Price",
      "tel": "1-514-515-8222 x4798",
      "address": "486 Dewitt Ways",
      "opening_hours": "08:00",
      "description": "quia",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.29900323886304",
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
      "id": 18,
      "name": "Jason Strosin",
      "tel": "(043) 266-0295 x59105",
      "address": "207 Dashawn Knolls",
      "opening_hours": "08:00",
      "description": "in",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.16914590199394",
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
      "id": 19,
      "name": "Cassie Feest",
      "tel": "1-519-559-5996",
      "address": "577 Leuschke Fall",
      "opening_hours": "08:00",
      "description": "Dolore quo doloremque non cumque molestiae autem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.90576587476135",
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
      "id": 20,
      "name": "Joshuah Sipes",
      "tel": "1-025-441-1709 x55463",
      "address": "8410 Tremaine Mews",
      "opening_hours": "08:00",
      "description": "Et sapiente laudantium mollitia nihil accusantium non et. Est tempora nihil non. Tempore deserunt dolorum sit. Cumque eaque molestias quia. Vel eum in voluptatem consequatur.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.3401732410174505",
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
      "id": 21,
      "name": "Dewayne Kris",
      "tel": "1-744-908-2138",
      "address": "90536 Von Lake",
      "opening_hours": "08:00",
      "description": "praesentium vel repudiandae",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.35733149610174",
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
      "id": 22,
      "name": "Verlie Flatley",
      "tel": "589-355-6506 x31636",
      "address": "48813 Felton Lock",
      "opening_hours": "08:00",
      "description": "Corporis alias accusantium doloremque provident eos rerum illum quo necessitatibus. Dolor voluptatem suscipit consequatur doloribus rerum rerum occaecati aliquam illum. Natus nisi dolore enim.\n \rUt modi eaque. Voluptatibus reprehenderit velit non quo quia eum praesentium aut. Hic reiciendis occaecati dolorem similique. Dicta eum quod saepe et.\n \rDicta reprehenderit beatae excepturi et. Suscipit maxime quasi tempore et molestias eum omnis dolores numquam. Eum error quos ut ut. Voluptate sed voluptatem perferendis aut qui molestiae cupiditate et doloremque. Aut voluptatibus commodi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.48364796760669",
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
      "id": 23,
      "name": "Tevin Wehner",
      "tel": "709.553.6975 x138",
      "address": "047 Geraldine Shoal",
      "opening_hours": "08:00",
      "description": "Exercitationem cupiditate vel quos omnis amet et sunt. Amet et et ea id atque. Tempore quisquam dolorem autem consectetur blanditiis alias magni natus et. Qui dolor accusamus debitis quod autem inventore odio velit in. Voluptatem ut possimus libero ex. Iste velit ut itaque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.081330392154218",
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
      "id": 24,
      "name": "Ms. Richard Brakus",
      "tel": "078-295-2575",
      "address": "779 Kimberly Flat",
      "opening_hours": "08:00",
      "description": "Quisquam eveniet a.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.343965434925904",
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
      "id": 25,
      "name": "River Sipes",
      "tel": "(211) 829-7681 x848",
      "address": "762 Maximilian Plain",
      "opening_hours": "08:00",
      "description": "Velit magni ab eveniet voluptate sit ut alias eaque. Velit deleniti corporis totam dolorem repellendus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.55819380067319",
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
      "id": 26,
      "name": "Mr. Royal Rowe",
      "tel": "(709) 627-7391 x46061",
      "address": "2520 Ola Path",
      "opening_hours": "08:00",
      "description": "Perferendis dolores est aut voluptas illum. Voluptate libero dolorem impedit sit voluptatibus. Ipsa ab eius sequi similique delectus modi. Eius qui quia. Rerum harum quaerat et vero aut laboriosam omnis non.\n \rVel ipsa laborum praesentium officia aut sed recusandae quis. Sequi tempora odit vitae et. Est sunt necessitatibus eaque repellendus voluptatem vel architecto. Assumenda temporibus sit.\n \rBeatae voluptatum maiores aliquam quia harum. Minima et sunt vel. Doloremque exercitationem aut est dolore eum qui. Explicabo sint in beatae sed. Et minima quam. Voluptatem quae eum cupiditate deserunt dolore rerum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.155433394985952",
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
      "id": 27,
      "name": "Gussie Reichel",
      "tel": "1-238-827-4281",
      "address": "56442 Will Unions",
      "opening_hours": "08:00",
      "description": "Adipisci et aut dolores natus dolorum et.\nQuod quia ea autem sed laboriosam rem.\nQui eius facilis.\nPorro doloremque soluta dolores mollitia similique est possimus illum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.7439370306396",
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
      "id": 28,
      "name": "Melyna Satterfield II",
      "tel": "437.430.7680 x39337",
      "address": "2783 Orville Skyway",
      "opening_hours": "08:00",
      "description": "Cupiditate aspernatur placeat eos ut ipsum. Quia aut qui. Qui molestiae placeat porro dicta ut. Laboriosam dolorem sequi voluptas qui saepe commodi qui a. Similique id earum nam provident.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.55319971831339",
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
      "id": 29,
      "name": "Sterling Halvorson",
      "tel": "(793) 662-3917 x32825",
      "address": "87986 Skiles Locks",
      "opening_hours": "08:00",
      "description": "Sapiente veritatis at inventore ad dolorem sed eos hic.\nItaque ducimus porro excepturi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.519831694911602",
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
      "id": 30,
      "name": "Elyse Sauer V",
      "tel": "652-602-5731 x06651",
      "address": "8895 Terrence Prairie",
      "opening_hours": "08:00",
      "description": "occaecati magnam pariatur",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.7543597975187",
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
      "id": 31,
      "name": "Suzanne Davis",
      "tel": "1-849-683-3737",
      "address": "2671 Flatley Forges",
      "opening_hours": "08:00",
      "description": "Quia pariatur aspernatur hic quidem vel aut. Laborum commodi maiores omnis itaque vitae quibusdam nam. Repudiandae id et rem quibusdam sit. A atque occaecati corporis aut.\n \rRerum fugit omnis velit doloribus. Molestiae necessitatibus accusantium quasi. Porro ea iste impedit voluptas commodi et modi amet. Distinctio est consequatur eaque odit. Et impedit recusandae repudiandae doloremque sunt nostrum sit.\n \rAut ducimus reiciendis quaerat ut vel aspernatur amet quo. Architecto in vero. Id culpa itaque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.11719265698441",
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
      "id": 32,
      "name": "D'angelo Greenfelder",
      "tel": "715.785.4184 x5790",
      "address": "9680 Elmira Highway",
      "opening_hours": "08:00",
      "description": "Maiores qui cum. Et aut dolor quia sed. Sequi repellendus voluptas suscipit sequi quisquam unde. Quae aut et minus in. Voluptas vero mollitia mollitia aut inventore.\n \rSed fugiat qui dolores est fugiat. Corrupti eligendi tempore qui eveniet reprehenderit rerum enim alias. Et vitae est illo dolor. Et omnis corrupti. Suscipit tenetur sed enim ducimus.\n \rQuia non ab. Fugiat ducimus quod quia rerum et repudiandae ut modi. Rem dolores ut. Enim iste quia architecto dolores odio vitae. Dolore et consequuntur deserunt magnam qui sed perspiciatis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.49529540043069",
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
      "id": 33,
      "name": "Jett Hintz",
      "tel": "1-236-700-3951",
      "address": "2367 Loma Corners",
      "opening_hours": "08:00",
      "description": "Et consequatur sed ipsa eum dolore aut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.27520369100984",
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
      "id": 34,
      "name": "Aglae Kirlin",
      "tel": "048-630-3946 x788",
      "address": "5176 Mills Camp",
      "opening_hours": "08:00",
      "description": "odit unde facere",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.00244702035928",
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
      "id": 35,
      "name": "Helga Ankunding",
      "tel": "353-031-0141",
      "address": "859 Tressa Station",
      "opening_hours": "08:00",
      "description": "Voluptatibus ut perspiciatis aut ut eum repellendus totam. Eos est eos minima sunt commodi. Iure ea autem repudiandae ab ipsa ut nihil ut consequatur.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.793029763078223",
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
      "id": 36,
      "name": "Mr. Erika Heathcote",
      "tel": "(505) 190-7178 x91467",
      "address": "738 Haven Drive",
      "opening_hours": "08:00",
      "description": "Alias error beatae sed quis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.6384587421441",
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
      "id": 37,
      "name": "Ali Nitzsche IV",
      "tel": "612-037-9051 x87943",
      "address": "7989 Avery Loop",
      "opening_hours": "08:00",
      "description": "Aut porro ipsa dignissimos officia accusamus ipsam. Rem maxime fugit illum. Ut quia nam assumenda in optio at est voluptas.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.96737300490617",
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
      "id": 38,
      "name": "Alessia Wiza",
      "tel": "(447) 169-9573",
      "address": "708 Hailee Island",
      "opening_hours": "08:00",
      "description": "Est officia et.\nRepellendus sed molestiae nam et repellendus eligendi quasi.\nBlanditiis assumenda molestias veritatis voluptate quod.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.097560400984733",
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
      "id": 39,
      "name": "Brett Cassin",
      "tel": "1-951-477-9782 x03388",
      "address": "0552 Dare Port",
      "opening_hours": "08:00",
      "description": "Exercitationem excepturi numquam eos omnis praesentium. Ipsa assumenda repellat. At eius aut est. Nihil eum a eligendi sunt eum illo.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.98565902964242",
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
      "id": 40,
      "name": "Marielle Powlowski",
      "tel": "1-515-254-3617",
      "address": "40618 Oberbrunner Vista",
      "opening_hours": "08:00",
      "description": "Doloremque aut sit sint occaecati commodi. Quia eveniet enim sint omnis. Voluptatem aut aut qui facilis reprehenderit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.88075498077866",
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
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      }
    },
    {
      "id": 42,
      "name": "Karen Hyatt",
      "tel": "1-263-292-8442 x48154",
      "address": "39566 Shirley Cape",
      "opening_hours": "08:00",
      "description": "Fuga ut deserunt qui et voluptatem quia sequi voluptatem molestias.\nQuis nulla maiores itaque vero doloremque soluta qui dolore.\nPossimus perferendis voluptatum ab.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.5649012347134",
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
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      }
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
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      }
    },
    {
      "id": 45,
      "name": "Chesley Hand",
      "tel": "1-775-242-0148 x64920",
      "address": "615 Rickie Isle",
      "opening_hours": "08:00",
      "description": "Tempora possimus qui quo perferendis. Enim qui saepe ut deserunt veniam libero sint nulla optio. Error excepturi cumque repellat laudantium dignissimos et cum animi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.92334621245237",
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
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-09-13T00:32:28.000Z",
        "updatedAt": "2022-09-13T00:32:28.000Z"
      }
    },
    {
      "id": 47,
      "name": "Coty Wiza",
      "tel": "1-592-514-1897",
      "address": "40173 Alexander Overpass",
      "opening_hours": "08:00",
      "description": "Nihil voluptatum repudiandae architecto. Tempore dolorum autem sint soluta repellat iusto et id consequatur. Qui sunt repudiandae velit. Autem iusto adipisci et omnis. Nesciunt animi fugiat non et praesentium.\n \rVel hic cumque quia culpa culpa. Amet voluptas esse. Natus qui voluptatem aut. Tenetur vel labore omnis et quos dolores vitae ipsa. Accusantium rerum aut. At corporis et totam.\n \rAut ut blanditiis enim aliquam quo. Est enim tenetur maxime. Atque reiciendis omnis facere odio.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.37316190208264",
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
      "id": 48,
      "name": "Micah Koss",
      "tel": "657-018-8738 x3334",
      "address": "600 Estelle Plains",
      "opening_hours": "08:00",
      "description": "Iusto voluptatibus ut adipisci sint.\nQuia facere porro quidem.\nEius dolorem ut qui dolorem officiis repellat recusandae sed.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.73356803497228",
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
      "id": 49,
      "name": "Kiana Stiedemann",
      "tel": "971.573.1386 x95784",
      "address": "033 Duane Tunnel",
      "opening_hours": "08:00",
      "description": "Vel aliquam quia consequatur. Veritatis esse aliquid voluptatem ut quia perferendis. Quod asperiores temporibus nisi tempora nihil. Fugiat laboriosam voluptatem quasi nihil consequuntur quaerat. Aperiam iure assumenda animi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.13960927203758",
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
      "id": 50,
      "name": "Delmer Heidenreich",
      "tel": "447.340.3498 x57332",
      "address": "1547 Ryan Landing",
      "opening_hours": "08:00",
      "description": "Ipsa accusantium id officiis repellendus vel dignissimos cum necessitatibus dolorem. Asperiores id dolores amet praesentium sint. Eveniet facere maiores repudiandae quas nisi sit temporibus inventore.\n \rEx aperiam eius ipsa natus et vero. Quis error autem non. Vitae ut ut architecto illum nihil. Et delectus iusto ut nam. Magni a quaerat est qui quo autem dolores recusandae aut.\n \rAdipisci id labore vel ex suscipit minima. Nobis blanditiis omnis repudiandae nihil aperiam enim cumque et quibusdam. Labore omnis autem ipsa quia fugit distinctio.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.59355772057567",
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
    }
  ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  }
}
</script>