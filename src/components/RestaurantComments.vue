<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link 
          :to="{name: 'user', params: {id: comment.User.id}}"
          >
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
import { fromNowFilter } from '../utils/mixin.js'
import { mapState } from 'vuex'
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

// const dummyUser =  {
//   currentUser: {
//     "id": 1,
//     "name": "root",
//     "email": "root@example.com",
//     "isAdmin": true
//   },
//   isAuthenticated: true
// }

export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  data () {
    return {
      // currentUser: dummyUser.currentUser
    }
  },
  methods: {
    async handleDeleteButtonClick (commentId) {
      
      try {

        // response.data裡有：RestaurantId、message、status
        // status.message : "comment is removed "
        const { data } = await restaurantAPI.deleteComment({commentId})

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 觸發父層事件 $emit('事件名稱', 傳遞的資料)
        this.$emit('after-delete-comment', commentId)
        
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      }
    }
  }
}
</script>