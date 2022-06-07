<template>
  <button class="aio-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts" st>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AioThemeButton'
})
</script>

<style lang="scss"></style>
