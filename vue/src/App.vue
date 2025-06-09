<template>
  <div class="font-sans text-gray-800">
    <Navbar v-if="!isBackoffice" />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()

// ✅ Réactif à 100% : s’actualise à chaque changement d’URL
const isBackoffice = computed(
  () => route.path.startsWith('/backoffice') || route.path === '/backoffice-login'
)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;800&display=swap');

.font-cursive {
  font-family: 'Great Vibes', cursive;
}
</style>
