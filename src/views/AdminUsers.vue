<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>

          <template v-if="user.id === currentUser.id">
            <td>admin</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                disabled
              >
                set as user
              </button>
            </td>
          </template>

          <template v-else>
            <td>{{ user.isAdmin ? 'admin' : 'user'}}</td>
            <td>
              <button
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
              >
                {{ user.isAdmin ? 'set as user' : 'set as admin'}}
              </button>
            </td>
        </template>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

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

// const dummyData = {
//   "users": [
//     {
//       "id": 1,
//       "name": "root",
//       "email": "root@example.com",
//       "password": "$2a$10$N.hlatXopaDRe.OYiEK/yOX3yDBWBFWMOYmdcRn/eOzlsu9DRJ.eG",
//       "isAdmin": true,
//       "image": null,
//       "createdAt": "2022-09-13T00:32:28.000Z",
//       "updatedAt": "2022-09-13T00:32:28.000Z"
//     },
//     {
//       "id": 2,
//       "name": "user1",
//       "email": "user1@example.com",
//       "password": "$2a$10$3GnvfbcNCrq6bBkZJpwvTOImo/FR5KR30RSApLIWJc4rrHRh/F5yS",
//       "isAdmin": false,
//       "image": null,
//       "createdAt": "2022-09-13T00:32:28.000Z",
//       "updatedAt": "2022-09-13T00:32:28.000Z"
//     },
//     {
//       "id": 3,
//       "name": "user2",
//       "email": "user2@example.com",
//       "password": "$2a$10$pWd3OtsbIVlXn9guqdUMDuheMQCGakX6EBGzzT1nNvBeu5Z.ST7xG",
//       "isAdmin": false,
//       "image": null,
//       "createdAt": "2022-09-13T00:32:28.000Z",
//       "updatedAt": "2022-09-13T00:32:28.000Z"
//     }
//   ]
// }

export default {
  components: {
    AdminNav,
  },
  data () {
    return {
      users: [],
      // currentUser: dummyUser.currentUser
    }
  },
  created () {
    this.fetchUsers()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUsers () {
      try {

        const { data } = await adminAPI.users.get()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = data.users

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資訊，請稍後再試'
        })
      }
      
    },
    async toggleUserRole({ userId, isAdmin }) {

      try {

        const { data } = await adminAPI.users.update({
          userId: userId,
          isAdmin: !isAdmin
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin
            }
          } else {
            return user
          }
        })

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資訊，請稍後再試'
        })
      }
    }
  }
}
</script>