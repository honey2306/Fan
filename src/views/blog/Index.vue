<script lang="ts" setup>
const title = '技术博客'
const desc = '我们从不生产BUG，我们只是BUG的搬运工'
const data = [{
  title: '这是一个标题',
  time: '2022-05-25',
  desc: '《奇葩说》辩题—“终其一生只是平凡的人，你后悔吗？”—转载于 思玄的读书笔记',
  img: 'https://ccc.res.netease.com/images/20220420/1650423895863_dde2550cbb.png'
}, {
  title: '这是一个标题',
  time: '2022-05-25',
  desc: '《奇葩说》辩题—“终其一生只是平凡的人，你后悔吗？”—转载于 思玄的读书笔记',
  img: 'https://ccc.res.netease.com/images/20220420/1650423895863_dde2550cbb.png'
}, {
  title: '这是一个标题',
  time: '2022-05-25',
  desc: '《奇葩说》辩题—“终其一生只是平凡的人，你后悔吗？”—转载于 思玄的读书笔记',
  img: 'https://ccc.res.netease.com/images/20220420/1650423895863_dde2550cbb.png'
}, {
  title: '这是一个标题',
  time: '2022-05-25',
  desc: '《奇葩说》辩题—“终其一生只是平凡的人，你后悔吗？”—转载于 思玄的读书笔记',
  img: 'https://ccc.res.netease.com/images/20220420/1650423895863_dde2550cbb.png'
}]

</script>

<template>
  <Nav back-color="#888888" />
  <div class="blog-index">
    <list-title
      :desc="desc"
      :title="title"
    />
    <article-list :data="data" />
  </div>
</template>
