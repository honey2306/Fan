<script lang="ts" setup>

import { ref } from 'vue'

const contentShow = ref(false)
const showDetail = () => {
  contentShow.value = !contentShow.value
}
</script>
<template>
  <div class="nav-index">
    <div class="title">
      Fan
    </div>
    <div
      :class="['menu-control', {'active': contentShow}]"
      @click="showDetail"
    >
      <span />
      <span />
      <span />
    </div>
  </div>
  <div :class="['nav-content', {'show': contentShow}]"></div>
</template>
<style>
</style>
