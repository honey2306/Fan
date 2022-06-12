<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getBlogDetail } from '../utils/api'
import { handle } from '../utils/request'
import { parseTime } from '../utils'
import store from '../store'

const route = useRoute()
const router = useRouter()
const { id } = route.params
const content = ref<any>({})
const topShow = ref(false)
const getDetail = () => {
  handle(getBlogDetail({ _id: id }), '获取文章详情', false).then((res: any) => {
    if (!res._id) {
      router.push('/')
    }
    content.value = res
    content.value.createTime = parseTime(new Date(content.value.createTime))
  })
}

const top = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  store.commit('setStyle', { backColor: '#ffffff', color: '#000000' })
  window.addEventListener('scroll', () => {
    topShow.value = document.documentElement.scrollTop > 1000
  })
  window.scrollTo(0, 0)
  getDetail()
})
</script>
<template>
  <div class="article-detail">
    <Nav
      back-color="#fff"
      color="#000"
    />
    <div class="main">
      <div class="title">
        {{ content.title }}
      </div>
      <div class="time">
        {{ content.createTime }}
      </div>
      <div class="content">
        <v-md-preview
          :text="content.content"
        />
      </div>

      <div class="overMsg">
        已经见底了哦，感谢您观看~
      </div>
    </div>
    <div
      v-if="topShow"
      class="top"
      @click="top"
    />
  </div>
</template>
<style>
</style>
