<script lang="ts" setup>
import { ref } from 'vue'
import { moduleConfig } from './moduleConfig'
import Nav from '../../components/Nav.vue'

const itemLength = 5
const moverOut = ref([false, false, false, false])
const menuActiveIndex = ref(-1)
const itemMoveChange = (item: number, status: string) => {
  moverOut.value[item] = status !== 'over'
  menuActiveIndex.value = status === 'over' ? item : -1
}

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
        :class="['item', {'active': menuActiveIndex === item - 2}]"
        @mouseout="itemMoveChange(item - 2, 'out')"
        @mouseover="itemMoveChange(item - 2, 'over')"
      >
        <div class="img"></div>
        <div class="content">
          <div :class="['line-top', 'line', {'hoverOver': moverOut[item - 2]}]"></div>
          <div class="title">
            {{ moduleConfig[item - 2].label }}
          </div>
          <div :class="['line-bottom', 'line', {'hoverOver': moverOut[item - 2]}]"></div>
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
            :class="['menu-item', {'active': menuActiveIndex === index}]"
            @mouseout="itemMoveChange(index, 'out')"
            @mouseover="itemMoveChange(index, 'over')"
          >
            {{ item1.name }} / {{ item1.label }}
          </div>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
