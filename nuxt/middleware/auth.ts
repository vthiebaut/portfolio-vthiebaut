export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      return navigateTo('/backoffice-login')
    }
  }
})

