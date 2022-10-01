// 加入最愛、移除最愛
// 後端會用 token找到使用者，再建立使用者跟餐廳的關聯

import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  update({ userId, formData}) {
    return apiHelper.put(`/users/${userId}`, { userId, formData }, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
    // 只是要驗證該 user token，登入資訊
  getCurrentUser () {
    return apiHelper.get('/get_current_user', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  // 可以取得 user更詳細的資料
  get({ userId }) {
    return apiHelper.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}`
      }
    })
  },
  addLike({restaurantId}) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopUsers () {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
}
