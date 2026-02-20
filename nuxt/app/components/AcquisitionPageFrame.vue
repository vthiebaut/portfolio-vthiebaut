<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <!-- Hero : H1 + intro + CTA -->
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
        {{ h1 }}
      </h1>
      <div class="prose prose-lg text-gray-700 max-w-none mb-6">
        <p v-for="(p, i) in introParagraphs" :key="i" class="mb-4">
          <span v-html="p" />
        </p>
      </div>
      <div class="flex flex-col sm:flex-row items-start gap-4">
        <NuxtLink
          :to="contactAnchor"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition"
        >
          Discutons de votre projet
        </NuxtLink>
        <a
          :href="`mailto:${contactEmail}`"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
        >
          {{ contactEmail }}
        </a>
      </div>
      <p class="text-xs text-gray-500 mt-3">
        Basé à Dax (Landes), missions en remote partout en France.
      </p>
      <p class="text-sm text-emerald-700 font-medium mt-1">
        Réponse sous 24h.
      </p>
    </section>

    <!-- Contenu principal (sections spécifiques à la page) -->
    <div class="contents">
      <slot />
    </div>

    <!-- FAQ -->
    <section
      v-if="faqItems && faqItems.length"
      class="bg-white py-12 px-4 md:px-8 border-t border-gray-200"
    >
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Questions fréquentes
        </h2>
        <div class="space-y-4">
          <details
            v-for="(item, i) in faqItems"
            :key="i"
            class="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
          >
            <summary class="font-semibold cursor-pointer text-gray-900">
              {{ item.question }}
            </summary>
            <p class="mt-2 text-gray-600">{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="bg-gray-50 py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Prêt à avancer sur votre projet ?
        </h2>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Un échange rapide pour cadrer votre besoin, votre budget et vos délais. Devis gratuit et sans engagement.
        </p>
        <NuxtLink
          :to="contactAnchor"
          class="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
        >
          Demander un devis
        </NuxtLink>
      </div>
    </section>

    <!-- Bouton sticky -->
    <NuxtLink
      :to="contactAnchor"
      class="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-xl z-50 block md:hidden hover:bg-emerald-700"
    >
      Discutons de votre projet
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
type FaqItem = { question: string; answer: string }

const props = withDefaults(
  defineProps<{
    h1: string
    intro: string | string[]
    faqItems?: FaqItem[]
  }>(),
  { faqItems: () => [] }
)

const { contactEmail, contactAnchor } = useAcquisitionSeo()

const introParagraphs = computed(() =>
  Array.isArray(props.intro) ? props.intro : [props.intro]
)
</script>
