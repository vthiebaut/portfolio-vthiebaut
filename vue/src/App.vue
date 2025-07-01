<template>
  <div class="font-sans text-gray-800">
    <Navbar/>
    <router-view />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import Navbar from './components/Navbar.vue'

useHead({
  title: 'Portfolio Valentin Thiebaut',
  meta: [
    { name: 'description', content: 'Développeur fullstack VueJS, Symfony & React Native — création de sites vitrines, d’applications mobiles, etc.' },
    { name: 'keywords', content: 'Développeur web, portfolio, VueJS, Symfony, React Native, site vitrine, application mobile, Châteauroux' },
    { name: 'author', content: 'Valentin Thiebaut' }
  ]
})
</script>

<style>
</style>
