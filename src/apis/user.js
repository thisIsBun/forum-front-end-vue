// 加入最愛、移除最愛
// 後端會用 token找到使用者，再建立使用者跟餐廳的關聯

import { apiHelper } from "../utils/helpers";

export default {
  update({ userId, formData}) {
    return apiHelper.put(`/users/${userId}`, formData,)
  },
    // 只是要驗證該 user token，登入資訊
  getCurrentUser () {
    return apiHelper.get('/get_current_user',)
  },
  // 可以取得 user更詳細的資料
  get({ userId }) {
    return apiHelper.get(`users/${userId}`,)
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null,)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`,)
  },
  addLike({restaurantId}) {
    return apiHelper.post(`/like/${restaurantId}`, null,)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`,)
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null,)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`,)
  },
  getTopUsers () {
    return apiHelper.get('/users/top',)
  },
}
