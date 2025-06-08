<template>
  <nav
    :class="[
        'tw:fixed tw:top-0 tw:left-0 tw:w-full tw:z-50 tw:h-[100px] tw:flex tw:items-center tw:justify-between tw:px-6 tw:text-white tw:transition-colors tw:duration-300 tw:bg-black/70',
        isScrolled && !isMenuOpen ? 'tw:bg-black/70 tw:backdrop-blur-sm' : 'tw:bg-transparent'
    ]"

  >
    <!-- Bouton menu burger (mobile uniquement) -->
    <button class="burger-btn" @click="isMenuOpen = !isMenuOpen">
      <svg class="tw:w-8 tw:h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Liens de gauche (desktop) -->
    <div class="nav-desktop-left tw:hidden tw:gap-1 tw:text-sm tw:font-light tw:items-center">
      <button @click="goTo('/')" class="tw:px-3 tw:py-1 tw:border tw:border-white tw:rounded hover:tw:bg-white hover:tw:text-black tw:transition">Accueil</button>
      <button @click="goTo('/contact')" class="tw:px-3 tw:py-1 tw:border tw:border-white tw:rounded hover:tw:bg-white hover:tw:text-black tw:transition">Contact</button>
    </div>

    <!-- Logo centré cliquable sans bloquer les boutons -->
    <div
    class="tw:absolute tw:left-1/2 tw:transform tw:-translate-x-1/2 tw:z-0 tw:cursor-pointer"
    @click="goTo('/')"
    >
    <img
        src="@/assets/logo-cleaneuse-by-pauline.png"
        alt="Logo Cleaneuse"
        class="tw:h-[100px] tw:w-auto tw:object-contain"
    />
    </div>

    <!-- Liens de droite (desktop) -->
    <div class="nav-desktop-right tw:hidden tw:gap-1 tw:text-sm tw:font-light tw:items-center">
      <button @click="goTo('/about')" class="tw:px-3 tw:py-1 tw:border tw:border-white tw:rounded hover:tw:bg-white hover:tw:text-black tw:transition">À propos</button>
      <button @click="goTo('/menu')" class="tw:px-3 tw:py-1 tw:border tw:border-white tw:rounded hover:tw:bg-white hover:tw:text-black tw:transition">Menu</button>
    </div>

    <!-- Menu mobile slide-out -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="tw:fixed tw:top-0 tw:left-0 tw:h-full tw:w-50 tw:bg-black tw:bg-opacity-90 tw:flex tw:flex-col tw:items-start tw:p-6 tw:z-50"
      >
        <button class="tw:self-end tw:mb-4" @click="isMenuOpen = false">❌</button>

        <button @click="goTo('/')" class="tw:mb-2 tw:text-white">Accueil</button>
        <button @click="goTo('/contact')" class="tw:mb-2 tw:text-white">Contact</button>
        <button @click="goTo('/about')" class="tw:mb-2 tw:text-white">À propos</button>
        <button @click="goTo('/menu')" class="tw:mb-2 tw:text-white">Menu</button>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const goTo = (path: string) => {
  router.push(path)
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Hover blanc/noir sur tous les boutons */
button:hover {
  background-color: white !important;
  color: black !important;
}

/* Animation du slide mobile */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* ✅ Media query personnalisée pour passer en mode desktop à partir de 800px */
@media (min-width: 800px) {
  .burger-btn {
    display: none !important;
  }

  .nav-desktop-left,
  .nav-desktop-right {
    display: flex !important;
  }
}
</style>
