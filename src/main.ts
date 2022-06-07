import { createApp } from 'vue'
import App from './App.vue'

import AioThemeButton from '@pkg/index'
console.log(AioThemeButton)
const app = createApp(App)
app.use(AioThemeButton)
app.mount('#app')
