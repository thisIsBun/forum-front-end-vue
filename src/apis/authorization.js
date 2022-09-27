// 定義 signin, signup會使用到的 API

import { apiHelper } from "../utils/helpers";

export default {
  // 帶入需要的參數
  signIn ({email, password}) {
    // 會 return一個 Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}