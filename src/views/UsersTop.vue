<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{name: 'user', params: {id: user.id}}">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollow(user)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="addFollow(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$N.hlatXopaDRe.OYiEK/yOX3yDBWBFWMOYmdcRn/eOzlsu9DRJ.eG",
      "isAdmin": true,
      "image": 'https://i.imgur.com/XAU6dFm.jpg',
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$3GnvfbcNCrq6bBkZJpwvTOImo/FR5KR30RSApLIWJc4rrHRh/F5yS",
      "isAdmin": false,
      "image": 'https://i.imgur.com/yIicJS8.jpg',
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$pWd3OtsbIVlXn9guqdUMDuheMQCGakX6EBGzzT1nNvBeu5Z.ST7xG",
      "isAdmin": false,
      "image": 'https://i.imgur.com/Gim8nXf.jpg',
      "createdAt": "2022-09-13T00:32:28.000Z",
      "updatedAt": "2022-09-13T00:32:28.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    }
  ]
}

export default {
  components: {
    NavTabs,
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers () {
      this.users = dummyData.users
    },
    addFollow (user) {
      this.users = this.users.map(function (origin_user) {
        if (origin_user.id === user.id) {
          return {
            ...origin_user,
            isFollowed: true
          } 
        } else {
          return { ...origin_user }
        }
      }) 
    },
    deleteFollow (user) {
      this.users = this.users.map(function (origin_user) {
        if (origin_user.id === user.id) {
          return {
            ...origin_user,
            isFollowed: false
          }
        } else {
          return { ...origin_user }
        }
      }) 
    }
  }
}
</script>