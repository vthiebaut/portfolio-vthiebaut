<template>
  <header
    class="relative w-full overflow-hidden bg-gray-900"
    role="banner"
  >
    <!-- Dégradé + overlay léger (même ADN que la home, sans particules) -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-100"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 bg-black/40 pointer-events-none"
      aria-hidden="true"
    />

    <div class="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-20 md:px-8">
      <div
        :class="[
          'flex flex-col gap-6',
          align === 'center' ? 'items-center text-center' : 'items-start text-left'
        ]"
      >
        <!-- Kicker -->
        <p
          v-if="kicker"
          class="text-sm font-medium text-white/80 tracking-wide uppercase"
        >
          {{ kicker }}
        </p>

        <!-- H1 (SEO : un seul par page) -->
        <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p
          v-if="subtitle"
          class="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
        >
          {{ subtitle }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
          <template v-if="primaryCtaLabel && primaryCtaHref">
            <NuxtLink
              v-if="isInternal(primaryCtaHref)"
              :to="primaryCtaHref"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-lg hover:bg-[#fe007b] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {{ primaryCtaLabel }}
            </NuxtLink>
            <a
              v-else
              :href="primaryCtaHref"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold shadow-lg hover:bg-[#fe007b] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              :target="isExternal(primaryCtaHref) ? '_blank' : undefined"
              :rel="isExternal(primaryCtaHref) ? 'noopener' : undefined"
            >
              {{ primaryCtaLabel }}
            </a>
          </template>
          <template v-if="secondaryCtaLabel && secondaryCtaHref">
            <NuxtLink
              v-if="isInternal(secondaryCtaHref)"
              :to="secondaryCtaHref"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/80 text-white font-semibold hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {{ secondaryCtaLabel }}
            </NuxtLink>
            <a
              v-else
              :href="secondaryCtaHref"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/80 text-white font-semibold hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              :target="isExternal(secondaryCtaHref) ? '_blank' : undefined"
              :rel="isExternal(secondaryCtaHref) ? 'noopener' : undefined"
            >
              {{ secondaryCtaLabel }}
            </a>
          </template>
        </div>

        <!-- Badges -->
        <div
          v-if="badges && badges.length"
          class="flex flex-wrap gap-2 mt-2"
        >
          <span
            v-for="(badge, i) in badges"
            :key="i"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/15 text-white/95"
          >
            {{ badge }}
          </span>
        </div>

        <!-- Note -->
        <p
          v-if="note"
          class="text-sm text-white/70 mt-1"
        >
          {{ note }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    kicker?: string
    primaryCtaLabel?: string
    primaryCtaHref?: string
    secondaryCtaLabel?: string
    secondaryCtaHref?: string
    badges?: string[]
    note?: string
    align?: 'left' | 'center'
  }>(),
  { align: 'center' }
)

function isInternal(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//')
}

function isExternal(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}
</script>
