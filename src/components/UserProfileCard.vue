<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">{{user.email}}</p>

          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{user.commentsLength}}</strong>
              " 已評論餐廳"
            </li>
            <li>
              <strong>{{user.favoritedRestaurantsLength}}</strong>
              " 收藏的餐廳"
            </li>
            <li>
              <strong>{{user.followingsLength}}</strong>
              " followings (追蹤者)"
            </li>
            <li>
              <strong>{{user.followersLength}}</strong>
              " followers (追蹤者)"
            </li>
          </ul>
          <p>
            
            <router-link
              v-if="isCurrentUser"
              :to="{name: 'user-edit', params: {id: user.id}}"
              class="btn btn-primary"
              role="button"
            >Edit</router-link>

            <button type="button" class="btn btn-danger" v-else-if="isFollowed" @click.stop.prevent="deleteFollowing">取消追蹤</button>

            <button type="button" class="btn btn-primary" v-else @click.stop.prevent="addFollowing">追蹤</button>

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixin.js'
import usersAPI from '../apis/user'
import { Toast } from '../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  watch: {
    initialIsFollowed: {
      handler (newData) {
        this.isFollowed = newData
      }
    }
  },
  methods: {
    async addFollowing() {
      try {
        const { data } = await usersAPI.addFollowing({ userId: this.user.id })
        console.log(data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.isFollowed = true

      } catch (error) {
        Toast({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing() {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId: this.user.id })
        console.log(data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.isFollowed = false

      } catch (error) {
        Toast({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
    // addFollow() {
    //   this.isFollowed = true
    // },
    // deleteFollow() {
    //   this.isFollowed = false
    // }
  }
}
</script>