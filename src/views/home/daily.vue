<script lang="ts" setup>
import { ref } from 'vue'
import { handle } from '../../utils/request'
import { getDailyPic } from '../../utils/api'

const indexInfo = ref<any>({})
handle(getDailyPic(), '获取每日图片', false, true).then((res: any) => {
  indexInfo.value = {
    img: res.data.src,
    text: res.data.text
  }
})
</script>

<template>
  <div class="daily-index">
    <img
      v-if="indexInfo.img"
      :src="indexInfo.img"
      alt="每日图片"
      class="daily-img"
    >
    <div class="text-wrap">
      <span>{{ indexInfo.text }}</span>
    </div>
  </div>
</template>
