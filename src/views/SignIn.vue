// ./src/views/SignIn.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>

        <!-- required會去要求這個欄位是必填的，type="email"會檢查是否有符合 email格式 -->
        <input 
        id="email" 
        v-model="email" 
        name="email" 
        type="email" 
        class="form-control" 
        placeholder="email" 
        autocomplete="username"
        required
        autofocus>

      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" v-model="password" name="password" type="password" class="form-control" placeholder="Password"
          autocomplete="current-password" required>
      </div>

      <button 
      class="btn btn-lg btn-primary btn-block mb-3" 
      type="submit"
      :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>

  // 把 signin API串接進來
  import authorizationAPI from '../apis/authorization'
  import { Toast } from '../utils/helpers.js'

  export default {
    data () {
      return {
        email: '',
        password: '',
        isProcessing: false
      }
    },
    methods: {
      async handleSubmit () {

        // 因為需要處理 error，所以用 try..catch方式
        try {

          // 預防用戶到 devtool拿掉 input裡的 required，先用 JS判斷帳密是否有填寫，沒有的話跳 Toast
          if (!this.email || !this.password) {
            Toast.fire({
              icon: 'warning',
              title: '請填入 email 和 password'
            })
            return
          }

          //改為 true, 避免用戶連續點擊
          this.isProcessing = true 

          // 提供帳密，向後端 server請求驗證
          const response = await authorizationAPI.signIn({
            email: this.email,
            password: this.password
          })

          // 成功登入後
          const {data} = response

          // 1：用 IF判斷，當 HTTP response status code = 200，但系統不等於 success的值
          if (data.status !== 'success') {
            // 用 throw，拋出錯誤
            throw new Error(data.message)
          }

          // 2：處理有正常登入的用戶
          // 2-1：取得 API請求後的資料，並將 token通行證存到 local storage
          localStorage.setItem('token', data.token)

          // 2-2：轉址到 /restaurants
          this.$router.push('/restaurants')
          

        // 登入失敗時，用 catch處理錯誤
        } catch (error) {
          // 1：清空填寫的帳號
          this.password = ''

          // 2：只有登入失敗，才改回 false
          this.isProcessing = false 

          // 3：跳出 Toast提示用戶
          Toast.fire({
            icon: 'warning',
            title: '請確認您輸入了正確的帳號密碼'
          })
        }
      },
    }
  }
</script>