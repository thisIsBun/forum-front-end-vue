// 定義 signin, signup會使用到的 API
// signIn 登入時，把資料給伺服器驗證後，取得 token，再放到 local storage
// signUp 建立新帳號時，把資料給伺服器建立

import { apiHelper } from "../utils/helpers";

export default {
  // 帶入需要的參數
  signIn ({email, password}) {
    // 會 return一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  // signUp ( data ) {
  //   return apiHelper.post('signup', {
  //     ...data
  //   })
  // }
  signUp ({formData}) {
    return apiHelper.post('/signup', {formData})
  }
}