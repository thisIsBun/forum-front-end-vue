import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')


export default {
  getRestaurants ({page, categoryId}) {

    // 網址要攜帶 query string
    const searchParams = new URLSearchParams({page: page, categoryId: categoryId})

    // 發出 get 請求
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {

      // HTTP Header攜帶 token
      headers: {Authorization: `Bearer ${getToken()}`}
    })
  },
}