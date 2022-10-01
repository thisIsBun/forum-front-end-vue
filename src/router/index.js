import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from '../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next({ name: 'not-found' })
    return
  }
  next()
}

const routes = [
  {
    // 設定根目錄的轉址
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    // 若使用者原本就註冊了，就不需要載入 signup頁面的檔案。所以這裡用動態載入資料的方式，減少流量
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/restaurants',
    exact: true, //exact屬性，是設定必須完全一樣的網址
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

// 用 router變數來存放 VueRouter實例，才可以把 beforeEach放入 VueRouter裡
const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

// 同 beforeRouteUpdate，只要 route有改變，就可以產出 to, from 物件
// 但這裡不用取 to, from的值

// 是每次 route改變時，就可以用 dispatch()方式，去指派 action裡 fetchCurrentUser
// fetchCurrentUser裡，會打 getCurrentUser api，成功的話 response.data裡會有 user資訊
// 在用 commit的方式，去 invoke mutations裡的 setCurrentUser，讓 state取得 user資訊
router.beforeEach( async (to, from, next) => {

  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 當有 token，且 token 跟 local storage 不一樣，才要打 api取得使用者資訊
  // 會從 api是否有成功取得，改變 isAuthenticated值
  if (tokenInStore && tokenInStore !== token) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  // 不需要驗證的頁面，用 to.name當值
  const pathsWithoutAuthentication = ['sign-in', 'sign-up']

  // 轉址，要避免無窮迴圈
  // 如果驗證失敗，且想要去 signin/signup以外的網址 --> 轉到 signin頁面
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果驗證成功，想要去 signin/signup的網址 --> 轉到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  
  next()
})

export default router
