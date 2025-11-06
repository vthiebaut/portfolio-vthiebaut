import axios from 'axios'

export const useApi = () => {
  const config = useRuntimeConfig()
  
  const api = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000,
    withCredentials: false,
  })

  // Interceptor pour les erreurs
  api.interceptors.response.use(
    r => r,
    err => {
      console.error('[API ERROR]', err?.response?.data || err.message)
      throw err
    }
  )

  // Interceptor pour ajouter le token d'authentification
  api.interceptors.request.use((cfg) => {
    if (process.client) {
      const token = localStorage.getItem('adminToken')
      if (token) {
        cfg.headers.Authorization = `Bearer ${token}`
      }
    }
    return cfg
  })

  return { api }
}

