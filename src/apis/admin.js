import { apiHelper } from "../utils/helpers";

export default {
  users: {
    get () {
      return apiHelper.get('/admin/users',)
    },
    update ({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    },
  },
  categories: {
    get () {
      return apiHelper.get('/admin/categories')
    },
    // 只能用 name給伺服器
    create({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { categoryId, name })
    }
  },
  restaurants: {
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get () {
      return apiHelper.get('/admin/restaurants')
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update({restaurantId, formData}) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  }
}