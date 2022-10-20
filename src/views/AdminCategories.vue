<template>
  <div class="container py-5">

    <AdminNav />

    <Spinner v-if="isLoading" />

    <template v-else>
      <form
        class="my-4"
        @submit.stop.prevent="createCategory"
      >
        <div class="form-row">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              placeholder="新增餐廳類別..."
              v-model="newCategoryName"
            >
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="createCategory"
              :disabled="isProcessing"
            >
              新增
            </button>
          </div>
        </div>
      </form>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th
              scope="col"
              width="60"
            >
              #
            </th>
            <th scope="col">
              Category Name
            </th>
            <th
              scope="col"
              width="210"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="category in categories"
            :key="category.id"
          >
            <th scope="row">
              {{ category.id }}
            </th>
            <td class="position-relative">
              <div
                v-show="!category.isEditing"
                class="category-name"
              >
                {{ category.name }}
              </div>
              <input
                v-show="category.isEditing"
                v-model="category.name"
                type="text"
                class="form-control"
              >
              <span
                v-show="category.isEditing"
                class="cancel"
                @click.stop.prevent="handleCancel(category.id)"
              >
                ✕
              </span>
            </td>
            <td class="d-flex justify-content-between">
              <button
                v-show="!category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="toggleIsEditing(category.id)"
              >
                Edit
              </button>
              <button
                v-show="category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="updateCategory({categoryId: category.id, name: category.name})"
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="deleteCategory(category.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
// import { v4 as uuidv4 } from 'uuid'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
      isLoading: true
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {

        // response裡，data有 categories陣列，statusTex為伺服器回傳的狀態
        const { data, statusText } = await adminAPI.categories.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        // 用 map()方式，針對要放進 categories的資料做加工
        this.categories = data.categories.map( category => {
          return {
            ...category,
            isEditing: false, //判斷是否有在編輯
            nameCached: '' // edit後，會把 name原有的值 copy到這
          }
        })

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    async createCategory() {
      try {
        // 改 true把按鈕 disable
        this.isProcessing = true

        // 取得 response裡的 data, statusText資訊
        const { data, statusText } = await adminAPI.categories.create({ name: this.newCategoryName })

        if (statusText !== 'OK' || data.message === 'error') {
          this.isProcessing = false
          throw new Error(statusText)
        }
        // 伺服器成功建立好餐廳類別後，data裡會有 categoryId
        // 不用再放 isEditing, nameCached key，reload後 fetch時會補上
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
        })
        this.isProcessing = false
        this.newCategoryName = ''
      } catch (error) {
        console.log(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳類別，請稍後再試'
        })
      }
    },
    async deleteCategory (categoryId) {

      try {

        const { data } = await adminAPI.categories.delete({ categoryId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories = this.categories.filter(category => category.id !== categoryId)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試'
        })
      }
    },
    toggleIsEditing (categoryId) {

      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing, //用驚嘆號切換 true, false太帥了
            nameCached: category.name
          }
        } else {
          return category
        }
      })
    },
    async updateCategory({categoryId, name}) {

      try {

        // TODO: 透過 api向伺服器更新 category名稱
        // 編輯成功伺服器會在 data.status回傳 success
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.toggleIsEditing(categoryId)
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法編輯餐廳類別，請稍後再試'
        })
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          }
        } else {
          return category
        }
      })
      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>