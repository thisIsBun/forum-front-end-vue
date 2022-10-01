<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          :placeholder="user.name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="user.image"
        :src="user.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        {{isProcessing ? '資料更新中' :'Submit'}}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '../apis/user'
import { Toast } from '../utils/helpers'

// const dummyUser = {
//   "profile": {
//     "id": 1,
//     "name": "root",
//     "image": null,
//   },
// }

export default {
  data () {
    return {
      user: {},
      isProcessing: false
      // user: {
      //   id: -1,
      //   name: '',
      //   image: ''
      // }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    // this.fetchUser(id)

    if (this.currentUser.id === -1) {
      return
    }

    const { id } = this.$route.params
    this.setUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    
    if (this.currentUser.id === -1) {
      return
    }

    const { id } = to.params
    this.setUser(id)
    next()
  },
  watch: {
    currentUser(newData) {
      this.user = { ...newData }
    }
  },
  methods: {
    setUser (routeId) {

      // 判斷 currentUser.id 跟 router.id是否相同 (routeId 是 string)
      // 不同的話轉到 404
      if (this.currentUser.id !== Number(routeId)) {
        this.$router.push({ name: 'not-found' })
      }

      this.user = {...this.currentUser}

    },
    async handleSubmit(event) {

      try {

        if (!this.user.name) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入名稱'
          })
          return
        }
        this.isProcessing = true
        
        const form = event.target
        const formData = new FormData(form)

        const response = await usersAPI.update({
          userId: this.currentUser.id, 
          formData
        })

        console.log(response)

        if (response.data.status === 'error') {
          this.isProcessing = false
          throw new Error(response.data.message)
        }

        this.$router.push({ name: 'user', params: {id: this.currentUser.id} })

      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法編輯資訊，請稍後再試'
        })
      }
      // for (let [name, value] of formData.entries()) {
      //   // TODO: 用 api把 form資料傳到後端伺服器
      //   console.log(name, ':', value)
      // }
    },
    handleFileChange (event) {
      const files = event.target.files

      if (files.length === 0) {
        this.user.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    }
    // fetchUser () {
    //   const {profile} = dummyUser
    //   const {id, name, image} = profile

    //   this.user = {
    //     ...this.user,
    //     id,
    //     name,
    //     image
    //   }
    // },
  }
}
</script>