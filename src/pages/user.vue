<script lang="ts" setup>
import { ref } from 'vue'
const str = ref<string>('木')
</script>
<template>
  <div class="user">user{{ str }}</div>
</template>
