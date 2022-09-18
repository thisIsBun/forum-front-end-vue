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
          <a href="#">
            {{comment.User.name}}
          </a>
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

const dummyUser =  {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "isAdmin": true
  },
  isAuthenticated: true
}

export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    handleDeleteButtonClick (commentId) {
      console.log('handleDeleteButtonClick', commentId)

      // TODO: 透過 api 向伺服器 請求 刪除該 id的 comment

      // 觸發父層事件 $emit('事件名稱', 傳遞的資料)
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>