<script lang="ts" setup>
import { useStore } from 'vuex'

const store = useStore()
const { nav } = store.state
</script>
<template>
  <div class="inner-index">
    <router-view />
    <Nav
      :back-color="nav.backColor"
      :color="nav.color"
    />
  </div>
</template>
