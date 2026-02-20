<template>
  <AcquisitionPageFrame :h1="seo.h1" :intro="seo.intro" :faq-items="seo.faqItems">
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Ce que je peux développer avec Vue.js</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">SPA et dashboards</h3>
            <p class="text-gray-600">Interfaces réactives, tableaux de bord, outils métier. Vue 3 (Composition API), Pinia, routing et intégration API.</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Sites vitrines et landing</h3>
            <p class="text-gray-600">Sites performants (Nuxt 3 ou Vite), SEO-friendly, avec ou sans back-office. Idéal pour marque ou produit.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Pourquoi un freelance Vue.js ?</h2>
        <p class="text-gray-700 mb-4">Un interlocuteur unique, des coûts maîtrisés et une stack moderne (Vue 3, TypeScript, Tailwind). Je livre du code maintenable et des interfaces UX soignées.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Exemple : Prestago</h2>
        <p class="text-gray-700 mb-4">Prestago (SaaS en production) utilise Vue 3 + Capacitor pour l’app mobile. <NuxtLink to="/#projets" class="text-emerald-600 font-semibold hover:underline">Voir le projet</NuxtLink>.</p>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Disponibilité</h2>
        <p class="text-gray-700">Basé à Dax (Landes), missions en remote partout en France. Devis gratuit.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Autres expertises</h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/developpeur-web-dax" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Développeur web Dax</NuxtLink>
          <NuxtLink to="/freelance-symfony-landes" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Freelance Symfony Landes</NuxtLink>
          <NuxtLink to="/developpeur-react-native-freelance" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">React Native freelance</NuxtLink>
        </div>
      </div>
    </section>
  </AcquisitionPageFrame>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl, personSchema } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/developpeur-vuejs-freelance`

const seo = {
  h1: 'Développeur Vue.js freelance – SPA, dashboards, sites',
  intro: [
    'Vous cherchez un <strong>développeur Vue.js freelance</strong> pour une SPA, un dashboard ou un site moderne ? Je conçois des interfaces réactives avec Vue 3 (Composition API), Nuxt 3 ou Vite, de la maquette au déploiement.',
    'Basé à Dax et en remote partout en France, j’accompagne startups et PME sur des projets front-end exigeants : UX soignée, performance et code maintenable.'
  ],
  faqItems: [
    { question: 'Travaillez-vous avec Vue 2 ou Vue 3 ?', answer: 'Je travaille en Vue 3 (Composition API, script setup). Pour des projets existants en Vue 2, je peux intervenir sur des évolutions ou accompagner une migration.' },
    { question: 'Proposez-vous du Nuxt 3 ?', answer: 'Oui. Nuxt 3 pour le SSR/SSG, le SEO et les sites ou applications full-stack. Ce portfolio est d’ailleurs en Nuxt 3.' },
    { question: 'Quelle est votre zone d’intervention ?', answer: 'Je suis à Dax (Landes). Missions principalement en remote en France. Déplacements possibles en Nouvelle-Aquitaine pour le cadrage.' }
  ]
}

useLocalSeoHead({
  url: pageUrl,
  title: 'Développeur Vue.js freelance – SPA, Nuxt | Valentin Thiebaut',
  description: 'Développeur Vue.js freelance. SPA, dashboards, sites Nuxt 3. Vue 3, TypeScript, Tailwind. Basé à Dax, remote France. Devis gratuit.',
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Développeur Vue.js freelance', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Développeur Vue.js freelance',
    description: 'Développeur Vue.js freelance. SPA, dashboards, Nuxt 3. Vue 3, TypeScript. Dax, remote France.',
    pageUrl,
    knowsAbout: ['Vue.js', 'Vue 3', 'Nuxt', 'SPA', 'Front-end', 'TypeScript']
  })
})
</script>
