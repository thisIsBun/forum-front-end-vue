<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followers.length}}</strong>followers (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{name: user, params: {id: follower.id}}"
      >
        <img
          :src="follower.image | emptyImage"
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
    followers: {
      type: Array,
      required: true
    }
  }
}
</script>