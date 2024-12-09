// store/index.js
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// 註冊持久化插件
pinia.use(piniaPersistedState)

export default pinia
