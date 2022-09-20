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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  "profile": {
    "id": 1,
    "name": "root",
    "image": null,
  },
}

export default {
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      }
    }
  },
  mounted () {
    const id = this.$route.id
    this.fetchUser(id)
  },
  methods: {
    fetchUser () {
      const {profile} = dummyUser
      const {id, name, image} = profile

      this.user = {
        ...this.user,
        id,
        name,
        image
      }
    },
    handleFileChange (event) {
      const files = event.target.files

      if (files.length === 0) {
        this.user.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    },
    handleSubmit (event) {

      const form = event.target

      const formData = new FormData(form)
      for (let [name, value] of formData.entries()) {
        // TODO: 用 api把 form資料傳到後端伺服器
        console.log(name, ':', value)
      }
    }
  }
}
</script>