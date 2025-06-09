import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import BackofficeLogin from '../views/Backoffice/BackofficeLogin.vue'
import BackofficeUnavailabilities from '../views/Backoffice/BackofficeUnavailabilities.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },

  { path: '/backoffice-login', component: BackofficeLogin },
  {
    path: '/backoffice',
    component: BackofficeUnavailabilities,
    meta: { requiresAuth: true }
  },

  // Catch all (redirige vers home si route inconnue)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route guard
router.beforeEach((to, _from, next) => {
  const isAuth = !!localStorage.getItem('adminToken')

  if (to.meta.requiresAuth && !isAuth) {
    next('/backoffice-login')
  } else {
    next()
  }
})

export default router
