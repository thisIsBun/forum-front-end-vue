import { apiHelper } from './../utils/helpers' // apiHelper變數裡面放 axios設定
const getToken = () => localStorage.getItem('token')


export default {
  getDashboard ({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  postComment ({restaurantId, text}) {
    return apiHelper.post('/comments', { restaurantId, text }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteComment ({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurant ({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurants ({page, categoryId}) {

    // 網址要攜帶 query string
    const searchParams = new URLSearchParams({page: page, categoryId: categoryId})

    // 發出 get 請求
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {

      // HTTP Header攜帶 token
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds', {
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
  getTopRestaurants () {
    // 向 axios.get()發送請求，因為 axios已經用 apiHelper變數放了，改用 apiHelp.get()
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  }
}