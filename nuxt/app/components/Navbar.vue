<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 h-[100px] bg-black/70 transition-colors duration-300',
      isScrolled && !isMenuOpen ? 'backdrop-blur-sm' : ''
    ]"
  >
    <div class="max-w-[60%] mx-auto flex items-center justify-between h-full">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-white cursor-pointer">
        VALENTIN THIEBAUT
      </NuxtLink>

      <!-- Bouton burger -->
      <button class="burger-btn text-white md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu desktop -->
      <div class="nav-desktop-right hidden md:flex gap-6 text-white items-center">
        <button @click="goTo('a-propos')" class="transition hover:text-[#fe007b]">À propos</button>
        <button @click="goTo('services')" class="transition hover:text-[#fe007b]">Services</button>
        <button @click="goTo('projets')" class="transition hover:text-[#fe007b]">Portfolio</button>
        <button @click="goTo('competences')" class="transition hover:text-[#fe007b]">Compétences</button>
        <button @click="goTo('parcours')" class="transition hover:text-[#fe007b]">Formations</button>
        <NuxtLink to="/developpeur-web-dax" class="transition hover:text-[#fe007b]">
          Développement freelance
        </NuxtLink>
        <NuxtLink to="/depannage-informatique-dax" class="transition hover:text-[#fe007b]">
          Dépannage Dax
        </NuxtLink>
        <NuxtLink to="/zones-intervention" class="transition hover:text-[#fe007b]">
          Zones d'intervention
        </NuxtLink>
        <button @click="goTo('contact')" class="transition hover:text-[#fe007b]">Contact</button>
      </div>
    </div>

    <!-- Menu mobile -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed top-0 left-0 h-full w-56 bg-black bg-opacity-90 flex flex-col items-start p-6 z-50"
      >
        <button class="self-end mb-4 text-white" @click="isMenuOpen = false">❌</button>
        <button @click="goTo('a-propos')" class="mb-2 text-white">À propos</button>
        <button @click="goTo('services')" class="mb-2 text-white">Services</button>
        <button @click="goTo('projets')" class="mb-2 text-white">Portfolio</button>
        <button @click="goTo('competences')" class="mb-2 text-white">Compétences</button>
        <button @click="goTo('parcours')" class="mb-2 text-white">Formations</button>
        <NuxtLink
          to="/developpeur-web-dax"
          class="mb-2 text-white"
          @click="isMenuOpen = false"
        >
          Développement freelance
        </NuxtLink>
        <NuxtLink
          to="/depannage-informatique-dax"
          class="mb-2 text-white"
          @click="isMenuOpen = false"
        >
          Dépannage Dax
        </NuxtLink>
        <NuxtLink
          to="/zones-intervention"
          class="mb-2 text-white"
          @click="isMenuOpen = false"
        >
          Zones d'intervention
        </NuxtLink>
        <button @click="goTo('contact')" class="mb-2 text-white">Contact</button>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  if (process.client) {
    isScrolled.value = window.scrollY > 50
  }
}

const goTo = (anchor: string) => {
  if (process.client) {
    const el = document.getElementById(anchor.replace('#', ''))
    if (el) {
      const yOffset = -100
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
  isMenuOpen.value = false
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

