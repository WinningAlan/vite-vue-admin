<script lang="ts" setup>
import { reactive } from 'vue'
interface objType {
  name: string
}
const obj = reactive<objType>({
  name: '历史',
})
obj.name
</script>
<template>
  <div class="app">
    <a-button type="primary">按钮</a-button>
  </div>
</template>
<style lang="less"></style>
