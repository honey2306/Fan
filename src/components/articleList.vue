<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

</script>
<template>
  <div class="article-list-index">
    <div
      v-for="(item, index) in props.data"
      :key="index"
      class="list-item"
    >
      <img
        :src="item.img"
        alt="封面"
      >
      <div class="content">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="desc">
          {{ item.desc }}
        </div>
        <div class="time">
          {{ item.time }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
