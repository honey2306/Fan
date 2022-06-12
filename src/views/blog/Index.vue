<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { handle } from '../../utils/request'
import { getBlogList } from '../../utils/api'
import { parseTime } from '../../utils'
import store from '../../store'

const title = '技术博客'
const desc = '我们从不生产BUG，我们只是BUG的搬运工'
const data = ref<any>([])
const listQuery = ref<any>({
  page: 1,
  pageSize: 3
})

const hasData = ref(false)

const getList = () => {
  handle(getBlogList(listQuery.value), '获取文章列表', false).then((res: any) => {
    hasData.value = listQuery.value.page * listQuery.value.pageSize < res.total
    const tmpData = res.data
    tmpData.forEach((item: any, index: number) => {
      tmpData[index].createTime = parseTime(new Date(tmpData[index].createTime))
      data.value.push(item)
    })
  })
}

const getMore = () => {
  listQuery.value.page += 1
  getList()
}

onMounted(() => {
  getList()
  store.commit('setStyle', { backColor: '#888888', color: '#ffffff' })
})

</script>

<template>
  <div class="blog-index">
    <list-title
      :desc="desc"
      :title="title"
    />
    <article-list
      :data="data"
      :has-data="hasData"
      route="blog"
      @getMore="getMore"
    />
  </div>
</template>
