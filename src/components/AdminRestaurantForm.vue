<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
        v-model="restaurant.name"
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
        v-model="restaurant.categoryId"
      >
        <option
          value=""
          selected
          disabled
        >
          --請選擇--
        </option>

        <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
        >
          {{category.name}}
        </option>

      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
        v-model="restaurant.tel"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
        v-model="restaurant.address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
        v-model="restaurant.openingHours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
        v-model="restaurant.description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
      v-if="restaurant.image"
      :src="restaurant.image"
      class="d-block img-thumbnail mb-3"
      width="200px"
      height="200px"
      >
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
    >
      送出
    </button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}

export default {

  props: {
    initialRestaurant: {
      type: Object,
      default: () => {
        return {
          name: '',
          categoryId: '',
          tel: '',
          address: '',
          openingHours: '',
          description: '',
          image: ''
        }
      }
    }
  },
  data () {
    return {
      categories: [],
      restaurant: {
        name:'',
        categoryId:'',
        tel:'',
        address: '',
        openingHours: '',
        description: '',
        image: ''
      }
    }
  },
  created () {
    this.fetchCategories()

    this.restaurant = {
      ...this.restaurant, //先用 data裡 restaurant資料當預設值
      ...this.initialRestaurant //若 edit有傳資料到 props的話，再使用 props資料覆蓋
    }

  },
  methods: {
    fetchCategories () {
      this.categories = dummyData.categories
    },
    handleFileChange (event) {

      // console.log(event.target.files)

      // 取出 files屬性的值
      const files = event.target.files

      if ( files.length === 0 ) {
        this.restaurant.image = ""
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit (event) {

      const form = event.target //取得 submit的 form
      const formData = new FormData (form) //透過 new FormData產生物件實例，並存在 變數裡
      this.$emit('after-submit', formData) //透過 $emit方式，把 變數傳到父層
    }
  }
}
</script>