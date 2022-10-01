<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        class="form-control"
        rows="3"
        name="text"
        v-model="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
// import { v4 as uuidv4 } from 'uuid'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async handleSubmit () {

      try {

        // 回傳值 response.data物件裡有：RestaurantId、commentId、message、status
        const { data } = await restaurantAPI.postComment({
          restaurantId: this.restaurantId,
          text: this.text
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 用 $emit，向父層發射資料更新
        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })
        this.text = ''


      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }

    }
  }
}
</script>