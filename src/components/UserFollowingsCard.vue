<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followings.length}}</strong>followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link 
      v-for="following in followings" 
      :key="following.id"
      :to="{name: 'user', params: {id: following.id}}"
      >
        <img
          :src="following.image | emptyImage"
          width="60px"
          height="60px"
          class="mr-1"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixin.js'

export default {
  mixins: [emptyImageFilter],
  props: {
    followings: {
      type: Array,
      required: true
    }
  }
}
</script>