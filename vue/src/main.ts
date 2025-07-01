import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { createHead } from '@vueuse/head'

const head = createHead()
const app = createApp(App)

app.use(head)
app.use(router).mount('#app')