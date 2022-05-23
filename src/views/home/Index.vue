<script lang="ts" setup>
import { moduleConfig } from './moduleConfig'

const itemLength = 5

console.log(moduleConfig[0].name)

</script>

<template>
  <div class="home-index">
    <div
      v-for="item in itemLength"
      :key="item"
      class="main-wrap"
    >
      <div
        v-if="item !== 1"
        class="item"
      >
        <div class="img"></div>
        <div class="title">
          {{ moduleConfig[item - 2].label }}
        </div>
      </div>
      <div
        v-else
        class="menu"
      ></div>
    </div>
  </div>
</template>
