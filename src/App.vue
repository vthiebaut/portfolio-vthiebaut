<template>
  <div class="font-sans text-gray-800">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;800&display=swap');

.font-cursive {
  font-family: 'Great Vibes', cursive;
}
</style>