import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{ 
    state: () => ({
    name: '',
    email: ''
  }),
  persist: {
    paths: ['user.name'],  // 只持久化 'name' 屬性，'email' 不會持久化
  },
})
