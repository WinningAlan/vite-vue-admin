<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import SvgIcon from './components/common/SvgIcon.vue'
import usePublicStore from './store/public'
const oApp = ref<Element | null>(null)
const publicStore = usePublicStore()

onMounted(() => {
  const app = oApp.value
  app?.classList.add('dark')
})
const changeThem = () => {
  if (publicStore.theme === 'dark') {
    publicStore.setTheme('')
  } else {
    publicStore.setTheme('dark')
  }
}
</script>
<template>
  <a-button type="primary" @click="changeThem">主题</a-button>
  <div ref="oApp" class="app" :class="publicStore.theme">
    <div
      class="bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl h-full"
    >
      <div>
        <SvgIcon icon-class="add" class="text-lime-500 cursor-pointer" />
        <span
          class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Writes Upside-Down
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>
  </div>
</template>
<style lang="less">
.app {
  width: 100vw;
  height: 100vh;
}
</style>
