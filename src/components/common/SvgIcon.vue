<script lang="ts" setup>
import { computed } from 'vue'
// interface Props
const props = defineProps<{
  iconClass: string
  className?: string
}>()
const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
const svgClass = computed(() => {
  return `svg-icon ${props.className}`
})
</script>
<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="iconName" />
  </svg>
</template>
<style lang="less">
.svg-icon {
  /* margin-right: 1em; */
  overflow: hidden;

  width: 1em;
  height: 1em;

  vertical-align: -0.18em;

  fill: currentColor !important;
}
</style>
