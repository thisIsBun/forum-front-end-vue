import { apiHelper } from './../utils/helpers' // apiHelper變數裡面放 axios設定

export default {
  getDashboard ({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`)
  },
  postComment ({restaurantId, text}) {
    return apiHelper.post('/comments', { restaurantId, text })
  },
  deleteComment ({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
  getRestaurant ({restaurantId}) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants ({page, categoryId}) {

    // 網址要攜帶 query string
    const searchParams = new URLSearchParams({page: page, categoryId: categoryId})

    // 發出 get 請求
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants () {
    // 向 axios.get()發送請求，因為 axios已經用 apiHelper變數放了，改用 apiHelp.get()
    return apiHelper.get('/restaurants/top')
  }
}