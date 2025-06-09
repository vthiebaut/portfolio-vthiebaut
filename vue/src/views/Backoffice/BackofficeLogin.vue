<template>
  <div
    class="tw:min-h-screen tw:flex tw:items-center tw:justify-center tw:bg-gradient-to-br tw:from-gray-100 tw:to-gray-300 tw:p-4"
  >
    <div class="tw:bg-white tw:rounded-2xl tw:shadow-xl tw:p-8 tw:w-full tw:max-w-md tw:relative">
      <div class="tw:flex tw:flex-col tw:items-center tw:mb-6">
        <h1 class="tw:text-2xl tw:font-bold tw:text-gray-800">Connexion administrateur</h1>
      </div>

      <form @submit.prevent="login" class="tw:space-y-4">
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="Adresse e-mail"
            class="tw:w-full tw:p-3 tw:border tw:border-gray-300 tw:rounded-xl tw:outline-none focus:tw:ring-2 focus:tw:ring-blue-400"
          />
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Mot de passe"
            class="tw:w-full tw:p-3 tw:border tw:border-gray-300 tw:rounded-xl tw:outline-none focus:tw:ring-2 focus:tw:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="tw:w-full tw:bg-blue-600 tw:text-white tw:py-3 tw:rounded-xl hover:tw:bg-blue-700 tw:transition"
        >
          Se connecter
        </button>

        <p v-if="error" class="tw:text-red-600 tw:text-sm tw:text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

async function login() {
  try {
    const res = await axios.post('http://localhost:8081/api/login', {
      email: email.value,
      password: password.value
    })

    localStorage.setItem('adminToken', res.data.token)
    axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`

    router.push('/backoffice')
  } catch (err) {
    error.value = 'Email ou mot de passe incorrect'
  }
}
</script>
