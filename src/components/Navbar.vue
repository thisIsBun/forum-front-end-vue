// ./src/components/Navbar.vue

<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="/admin/"
          class="text-white mr-3"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link
            :to="{name: 'user', params: {id: currentUser.id}}"
            class="text-white mr-3"
          >
            {{currentUser.name || '使用者'}} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
            @click="logout"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

// 串 api之前，先用這假資料模擬
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: '管理者',
//     email: 'root@example.com',
//     image: 'https://i.pravatar.cc/300',
//     isAdmin: true
//   },
//   isAuthenticated: true
// }

export default {
  computed: {
    // 用 mapState方法，選擇要把 state裡哪些資料帶進來這元件
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  }
  // data() {
  //   return {
  //     // 未登入的情況下，系統預設的使用者資料
  //     currentUser: {
  //       id: -1,
  //       name: '',
  //       email: '',
  //       image: '',
  //       isAdmin: false
  //     },
  //     isAuthenticated: false,
  //   }
  // },
  // created() {
  //   // 當 Vue載入時，就會觸發 fetchUser，currentUser資料會被 dummyUser蓋過去
  //   this.fetchUser()
  // },
  // methods: {
  //   fetchUser() {
  //     this.currentUser = {
  //       ...this.currentUser,
  //       ...dummyUser.currentUser
  //     },
  //       this.isAuthenticated = dummyUser.isAuthenticated
  //   }
  // },
}
</script>

<style scoped>
.navbar-toggler {
  min-width: 70px;
  margin-right: 0;
}

nav.bg-dark {
  padding: 14px 16px;
  background-color: #bd2333 !important;
}

.navbar-brand {
  font-size: 19px;
  padding: 0;
}
</style>