import { defineStore } from 'pinia'

const usePublicStore = defineStore('public', {
  state: () => {
    return {
      theme: 'ligth',
    }
  },
  actions: {
    setTheme(data: string) {
      this.theme = data
    },
  },
})
export default usePublicStore
