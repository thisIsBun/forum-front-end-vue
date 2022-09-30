import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false,
    },
    isAuthenticated: false, //是否成功登入
  },
  getters: {
  },
  // commit 來修改 state資料
  mutations: {
    // state：上方的 state物件
    // currentUser：Vue components傳進來的物件，會以想要更新的 state屬性命名
    setCurrentUser (state, currentUser) { 
      state.currentUser = {
        ...state.currentUser, //先用原本 state的設定值
        ...currentUser //再用 api取得的 currentUser覆蓋
      }
      state.isAuthenticated = true //改成成功登入
    }
  },
  // dispatch 來取得 api資料
  actions: {
    // 每次 route改變時，用 getCurrentUser api確認使用者登入資訊
    async fetchCurrentUser ({ commit }) {
      try {

        // response.data裡，會有 user資訊
        const { data } = await userAPI.getCurrentUser()
        const { id, name, email, image, isAdmin} = data

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // commit帶進參數後，可以用 commit方式 invole mutations裡的 setCurrentUser方式。讓 每次
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

      } catch (error) {
        console.log(error)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
