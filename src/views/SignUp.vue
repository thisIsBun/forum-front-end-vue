<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          v-model="passwordCheck"
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
  import authorizationAPI from '../apis/authorization'
  import { Toast } from '../utils/helpers.js'

  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',
        passwordCheck: ''
      }
    },
    methods: {
      async handleSubmit () {

        // 試用 formDate資料格式打 api
        // try {
        //   const form = event.target
        //   const formData = new FormData(form)

        //   const response = await authorizationAPI.signUp({formData})
        //   console.log(response)

        // } catch (error) {
        //   Toast.fire({
        //     icon: 'error',
        //     title: `無法註冊 ${error.message}`
        //   })
        // }
        try {

          // 擋掉使用者拿掉 input required
          if (!this.name || !this.email || !this.password || !this.passwordCheck) {
            Toast.fire({
              icon: 'warning',
              title: '請確認已填寫所有欄位'
            })
            return
          }

          // 擋掉 密碼輸入不同
          if (this.password !== this.passwordCheck) {
            Toast.fire({
              icon: 'warning',
              title: '兩次輸入的密碼不同'
            })
            // 密碼清掉再 return
            this.passwordCheck = ''
            return
          }

          // 把新帳號資訊給伺服器
          const { data } = await authorizationAPI.signUp({
            name: this.name,
            email: this.email,
            password: this.password,
            passwordCheck: this.passwordCheck
          })

          console.log(data)

          // IF帳號申請失敗，拋出錯誤訊息
          if (data.status !== 'success') {
            Toast.fire({
              icon: 'warning',
              title: data.message
            })
            throw new Error(data.message)
          }

          // IF帳號申請成功，路由轉到 sign in 畫面，且 Toast 帳號申請成功畫面
          this.$router.push('/signin')
          Toast.fire({
            icon:'success',
            title: data.message
          })

        } catch (error) {
          Toast.fire({
            icon: 'error',
            title: `無法註冊 ${error.message}`
          })
        }
      },
    },
  }
</script>