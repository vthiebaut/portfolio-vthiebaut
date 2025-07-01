<template>
  <nav
    :class="[
      'tw:fixed tw:top-0 tw:left-0 tw:w-full tw:z-50 tw:h-[100px] tw:bg-black/70 tw:transition-colors tw:duration-300',
      isScrolled && !isMenuOpen ? 'tw:backdrop-blur-sm' : ''
    ]"
  >
    <div class="tw:max-w-[60%] tw:mx-auto tw:flex tw:items-center tw:justify-between tw:h-full">
      <!-- Logo -->
      <div class="tw:text-2xl tw:font-bold tw:text-white tw:cursor-pointer" @click="goTo('accueil')">
        VALENTIN THIEBAUT
      </div>

      <!-- Bouton burger -->
      <button class="burger-btn tw:text-white" @click="isMenuOpen = !isMenuOpen">
        <svg
          class="tw:w-8 tw:h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu desktop -->
      <div class="nav-desktop-right tw:hidden tw:gap-6 tw:text-white tw:items-center">
        <button @click="goTo('a-propos')" class="tw:transition hover:tw:text-[#fe007b]">À propos</button>
        <button @click="goTo('services')" class="tw:transition hover:tw:text-[#fe007b]">Services</button>
        <button @click="goTo('projets')" class="tw:transition hover:tw:text-[#fe007b]">Portfolio</button>
        <button @click="goTo('competences')" class="tw:transition hover:tw:text-[#fe007b]">Compétences</button>
        <button @click="goTo('parcours')" class="tw:transition hover:tw:text-[#fe007b]">Formations</button>
        <button @click="goTo('contact')" class="tw:transition hover:tw:text-[#fe007b]">Contact</button>
      </div>
    </div>

    <!-- Menu mobile -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="tw:fixed tw:top-0 tw:left-0 tw:h-full tw:w-56 tw:bg-black tw:bg-opacity-90 tw:flex tw:flex-col tw:items-start tw:p-6 tw:z-50"
      >
        <button class="tw:self-end tw:mb-4 tw:text-white" @click="isMenuOpen = false">❌</button>
        <button @click="goTo('a-propos')" class="tw:mb-2 tw:text-white">À propos</button>
        <button @click="goTo('services')" class="tw:mb-2 tw:text-white">Services</button>
        <button @click="goTo('projets')" class="tw:mb-2 tw:text-white">Portfolio</button>
        <button @click="goTo('competences')" class="tw:mb-2 tw:text-white">Compétences</button>
        <button @click="goTo('parcours')" class="tw:mb-2 tw:text-white">Formations</button>
        <button @click="goTo('contact')" class="tw:mb-2 tw:text-white">Contact</button>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const goTo = (anchor: string) => {
  const el = document.getElementById(anchor.replace('#', ''))
  if (el) {
    const yOffset = -100
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  } else {
    console.warn(`Élément non trouvé pour l'ancre : ${anchor}`)
  }
  isMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

@media (min-width: 800px) {
  .burger-btn {
    display: none !important;
  }

  .nav-desktop-right {
    display: flex !important;
  }
}
</style>
