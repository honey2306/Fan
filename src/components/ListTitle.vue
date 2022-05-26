<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="list-title-index">
    <div class="title">
      {{ props.title }}
    </div>
    <div class="desc">
      {{ props.desc }}
    </div>
  </div>
</template>
<style>
</style>
