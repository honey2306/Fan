<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { moduleConfig } from '../views/home/moduleConfig'

const props = defineProps({
  backColor: {
    type: String,
    default: '#000000'
  },
  color: {
    type: String,
    default: '#fff'
  }
})

const backColor = ref('')
const color = ref('')

const contentShow = ref(false)
const showDetail = () => {
  contentShow.value = !contentShow.value
  setTimeout(() => {
    backColor.value = contentShow.value ? '#4C4C4C' : ''
    color.value = contentShow.value ? '#fff' : ''
  }, contentShow.value ? 100 : 490)
}
</script>
<template>
  <div
    :style="{backgroundColor: backColor || props.backColor}"
    class="nav-index"
  >
    <div
      :style="{color: color || props.color}"
      class="title"
    >
      Fan
    </div>
    <div
      :class="['menu-control', {'active': contentShow}]"
      @click="showDetail"
    >
      <span
        v-for="(item) in 3"
        :key="item"
        :style="{backgroundColor: color || props.color}"
      />
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
