<script lang="ts" setup>
import { ref } from 'vue'
import { moduleConfig } from './moduleConfig'

const itemLength = 5
const moverOut = ref([false, false, false, false])

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
        @mouseout="moverOut[item - 1] = true"
        @mouseover="moverOut[item - 1] = false"
      >
        <div class="img"></div>
        <div class="content">
          <div :class="['line-top', 'line', {'hoverOver': moverOut[item - 1]}]"></div>
          <div class="title">
            {{ moduleConfig[item - 2].label }}
          </div>
          <div :class="['line-bottom', 'line', {'hoverOver': moverOut[item - 1]}]"></div>
        </div>
      </div>
      <div
        v-else
        class="menu"
      >
        <div class="title">
          Fan
        </div>
        <div class="menu-wrap">
          <div
            v-for="(item1, index) in moduleConfig"
            :key="index"
            class="menu-item"
          >
            {{ item1.name }} / {{ item1.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
