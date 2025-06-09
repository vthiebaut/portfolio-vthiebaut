import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import axios from 'axios'

// Appliquer le token si présent
const token = localStorage.getItem('adminToken')
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

// ⚠️ Supprimer le token automatiquement si on quitte le backoffice
router.beforeEach((to, from, next) => {
  const isBackofficeRoute = to.path.startsWith('/backoffice') || to.path === '/backoffice-login'
  const wasBackofficeRoute = from.path.startsWith('/backoffice') || from.path === '/backoffice-login'

  if (!isBackofficeRoute && wasBackofficeRoute) {
    localStorage.removeItem('adminToken')
    delete axios.defaults.headers.common.Authorization
  }

  next()
})

// Lancer l'application
createApp(App).use(router).mount('#app')
