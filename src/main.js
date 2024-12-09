import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

// 使用持久化插件
pinia.use(piniaPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
