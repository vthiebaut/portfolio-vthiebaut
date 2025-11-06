<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4"
  >
    <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
      <div class="flex flex-col items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">Connexion administrateur</h1>
      </div>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Adresse e-mail"
            class="w-full p-3 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Mot de passe"
            class="w-full p-3 border text-black border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Se connecter
        </button>

        <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const { api } = useApi()
const email = ref('')
const password = ref('')
const error = ref('')

async function login() {
  try {
    const res = await api.post('/login', {
      email: email.value,
      password: password.value,
    })

    const token = res.data.token
    if (process.client) {
      localStorage.setItem('adminToken', token)
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    await router.push('/backoffice')
  } catch (err: any) {
    console.error('Erreur connexion', err?.response?.data || err.message)
    error.value = 'Email ou mot de passe incorrect'
  }
}
</script>

