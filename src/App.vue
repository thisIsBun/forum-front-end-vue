<template>
  <div id="restaurant-forum">
    <Navbar /> //使用 use Navbar
    <main class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue' //定義 define Navbar

export default {
  components: {
    Navbar: Navbar, //登記 registed Navbar，到 components屬性裡
  }
}
</script>