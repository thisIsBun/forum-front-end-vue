<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />

    <template v-else>
      <h1 class="mt-5">
        美食達人
      </h1>
      <hr>
      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <router-link :to="{name: 'user', params: {id: user.id}}">
            <img
              :src="user.image | emptyImage"
              width="140px"
              height="140px"
            >
          </router-link>
          <h2>{{user.name}}</h2>
          <span class="badge badge-secondary">追蹤人數：{{user.followerCount}}</span>
          <p class="mt-3">
            <button
              type="button"
              class="btn btn-danger"
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from '../utils/mixin.js'
import usersAPI from '../apis/user'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers () {

      try {

        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.map(function(user) {
          return {
            id: user.id,
            name: user.name,
            image: user.image,
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed,
          }
        })

        this.isLoading = false

      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    async addFollowing (userId) {
      try {
        const { data } = await usersAPI.addFollowing({userId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(function (origin_user) {
          if (origin_user.id === userId) {
            return {
              ...origin_user,
              isFollowed: true
            }
          } else {
            return { ...origin_user }
          }
        }) 

      } catch (error) {
        Toast({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({userId})

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users = this.users.map(function (origin_user) {
          if (origin_user.id === userId) {
            return {
              ...origin_user,
              isFollowed: false
            }
          } else {
            return { ...origin_user }
          }
        }) 

      } catch (error) {
        Toast({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  }
}
</script>