<script lang="ts" setup>
import { ref } from 'vue'
import { handle } from '../../utils/request'
import { getDailyPic } from '../../utils/api'

const url = ref<string>('')
handle(getDailyPic(), '获取每日图片', false, true).then((res: any) => {
  url.value = res.data.url
})
</script>

<template>
  <div class="home-index">
    <img
      :src="url"
      alt="每日图片"
    >
  </div>
</template>
