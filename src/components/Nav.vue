<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { moduleConfig } from '../views/home/moduleConfig'

const props = defineProps({
  backColor: {
    type: String,
    default: '#000000'
  }
})

const contentShow = ref(false)
const showDetail = () => {
  contentShow.value = !contentShow.value
}
</script>
<template>
  <div
    :style="{backgroundColor: props.backColor}"
    class="nav-index"
  >
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
  <div :class="['nav-content', {'show': contentShow}]">
    <div
      v-for="(item, index) in moduleConfig"
      :key="index"
      class="menu-item"
    >
      {{ item.name }} / {{ item.label }}
    </div>
  </div>
</template>
<style>
</style>
