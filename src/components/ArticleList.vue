<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  hasData: {
    type: Boolean,
    required: true
  },
  route: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['getMore'])

const getMore = () => {
  emits('getMore')
}

const router = useRouter()
const goDetail = (item: any) => {
  router.push(`/${props.route}/detail/${item._id}`)
}

</script>
<template>
  <div class="article-list-index">
    <div
      v-for="(item, index) in props.data"
      :key="index"
      class="list-item"
      @click="goDetail(item)"
    >
      <img
        :src="item.img"
        alt="封面"
      >
      <div class="content">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="time">
          {{ item.createTime }}
        </div>
        <div class="desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
    <div
      class="more"
      @click="getMore"
    >
      {{ hasData ? '查看更多...' : '已经到底啦~' }}
    </div>
  </div>
</template>
<style>
</style>
