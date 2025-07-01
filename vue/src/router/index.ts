import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },

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
