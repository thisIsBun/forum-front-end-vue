<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <!-- v-show：當 previousPage = 0 時是 false，就會整個元件 display none -->
      <li 
      :class="['page-item', { disabled: previousPage === 1 }]" 
      v-show="previousPage" 
      >
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{name: 'restaurants', query: {categoryId: categoryId, page: previousPage}}"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li :class="['page-item', {active: currentPage === page}]" v-for="page in totalPage" :key="page">
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: {page: page, categoryId: categoryId}}"
        >
          {{page}}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li 
      :class="['page-item', { disabled: nextPage === totalPage.length }]"
      v-show="nextPage"
      >
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{name: 'restaurants', query: {categoryId: categoryId, page: nextPage}}"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Array,
      required: true
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    },
    categoryId: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>
ul.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #bd2333;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
  z-index: 1;
}

.page-item span {
  color: #bd2333;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
}
</style>