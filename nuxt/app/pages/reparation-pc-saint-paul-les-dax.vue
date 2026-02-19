<template>
  <main class="bg-slate-950 text-white min-h-screen">
    <!-- Hero -->
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">
        Réparation PC à Saint-Paul-lès-Dax – portable et fixe
      </h1>
      <p class="text-lg text-slate-200 mb-4">
        Votre ordinateur à <strong>Saint-Paul-lès-Dax</strong> ne démarre plus, se fige ou fait
        un bruit inquiétant&nbsp;? Je propose la <strong>réparation de PC à Saint-Paul-lès-Dax</strong>
        et Dax, pour les particuliers et petites structures locales.
      </p>
      <p class="text-slate-300 mb-6">
        Basé à Dax, je me déplace à Saint-Paul-lès-Dax pour diagnostiquer la panne, proposer
        les réparations possibles et vous accompagner dans la remise en service de votre PC.
      </p>
      <div class="flex flex-col sm:flex-row items-start gap-4">
        <a
          :href="`tel:${phone}`"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold shadow-lg hover:bg-emerald-400 transition"
        >
          Appeler maintenant – {{ phoneDisplay }}
        </a>
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-600 text-slate-100 hover:bg-slate-800 transition"
        >
          Demander une réparation à Saint-Paul-lès-Dax
        </NuxtLink>
      </div>
      <p class="text-xs text-slate-400 mt-3">
        Intervention à domicile sur Saint-Paul-lès-Dax, Dax et communes voisines.
      </p>
    </section>

    <!-- Contenu simplifié (similaire aux autres pages, angle réparation) -->
    <section class="bg-slate-900 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Réparation d’ordinateur à Saint-Paul-lès-Dax et Dax
        </h2>
        <p class="text-slate-200 mb-4">
          Je prends en charge la plupart des pannes classiques&nbsp;: écran noir, messages d’erreur,
          PC très lent, bruit mécanique inhabituel, coupures soudaines, mises à jour bloquées, etc.
        </p>
        <p class="text-slate-300">
          L’objectif est de réparer lorsque c’est pertinent, de sécuriser vos données
          et de vous expliquer clairement les options possibles avant toute décision.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-slate-900 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          FAQ – Réparation PC à Saint-Paul-lès-Dax
        </h2>
        <div class="space-y-4">
          <details
            v-for="item in faqItems"
            :key="item.question"
            class="bg-slate-800 rounded-xl p-4 border border-slate-700"
          >
            <summary class="cursor-pointer font-semibold">
              {{ item.question }}
            </summary>
            <p class="text-slate-300 mt-2">
              {{ item.answer }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">
          Votre PC est en panne à Saint-Paul-lès-Dax&nbsp;?
        </h2>
        <p class="text-slate-300 mb-6">
          Contactez-moi pour décrire la situation. Nous verrons ensemble si une réparation
          est adaptée et dans quels délais elle peut être réalisée.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a
            :href="`tel:${phone}`"
            class="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold shadow-lg hover:bg-emerald-400 transition"
          >
            Appeler le {{ phoneDisplay }}
          </a>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-slate-600 text-slate-100 hover:bg-slate-800 transition"
          >
            Envoyer une demande de réparation
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Bouton sticky mobile -->
    <a
      :href="`tel:${phone}`"
      class="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-500 text-slate-950 font-semibold rounded-full shadow-xl z-50 block md:hidden"
    >
      Appeler – {{ phoneDisplay }}
    </a>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'

const pageUrl = 'https://portfolio.vthiebaut.fr/reparation-pc-saint-paul-les-dax'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Réparation PC Saint-Paul-lès-Dax – Portable et fixe'
const pageDescription =
  'Réparation de PC à Saint-Paul-lès-Dax et Dax. Diagnostic, remplacement de pièces et remise en service de votre ordinateur dans les Landes.'

const faqItems = [
  {
    question: 'Intervenez-vous à domicile pour réparer les PC à Saint-Paul-lès-Dax ?',
    answer:
      'Oui, je peux me déplacer à domicile sur Saint-Paul-lès-Dax, Dax et les communes proches pour diagnostiquer et réparer votre ordinateur.'
  },
  {
    question: 'Réparez-vous aussi les PC portables ?',
    answer:
      'Oui, j’interviens sur PC portables et fixes, dans la limite de ce qui est réparable raisonnablement sur place ou en atelier léger.'
  }
]

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: pageUrl,
  ogLocale: 'fr_FR',
  twitterCard: 'summary',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Réparation PC Saint-Paul-lès-Dax - Valentin Thiebaut',
        '@id': `${pageUrl}#localbusiness`,
        url: pageUrl,
        telephone: phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Saint-Paul-lès-Dax',
          postalCode: '40990',
          addressLocality: 'Saint-Paul-lès-Dax',
          addressRegion: 'Nouvelle-Aquitaine',
          addressCountry: 'FR'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: 'https://portfolio.vthiebaut.fr/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Réparation PC Saint-Paul-lès-Dax',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>

