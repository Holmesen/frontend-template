import { defineStore } from 'pinia'

export const baseStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  actions: {
    accumulate() {
      this.count++
    },
  },
})
