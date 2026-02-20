<template>
  <AcquisitionPageFrame :h1="seo.h1" :intro="seo.intro" :faq-items="seo.faqItems">
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Ce que je peux créer pour vous</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Apps métier & outils internes</h3>
            <p class="text-gray-600">Applications de terrain, saisie, reporting, synchronisation avec votre back-end. React Native pour iOS et Android à partir d’une base unique.</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Apps grand public & MVP</h3>
            <p class="text-gray-600">De l’idée au store : conception, développement, tests et publication. Idéal pour valider un concept ou lancer un produit mobile.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Exemple : Prestago</h2>
        <p class="text-gray-700 mb-4">Prestago est une application mobile en production (planning, clients, sync cloud), développée avec Vue 3 + Capacitor. <NuxtLink to="/projet-prestago" class="text-emerald-600 font-semibold hover:underline">Lire l'étude de cas Prestago</NuxtLink>.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Disponibilité</h2>
        <p class="text-gray-700">Dax (Landes), remote France. Création d’application mobile freelance : de la conception à la publication. Devis gratuit.</p>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Autres expertises</h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/developpeur-web-dax" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Développeur web Dax</NuxtLink>
          <NuxtLink to="/developpeur-react-native-freelance" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Développeur React Native</NuxtLink>
          <NuxtLink to="/projet-prestago" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Étude de cas Prestago</NuxtLink>
          <NuxtLink to="/#contact" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Contact</NuxtLink>
        </div>
      </div>
    </section>
  </AcquisitionPageFrame>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl, personSchema } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/creation-application-mobile`

const seo = {
  h1: 'Création d’application mobile freelance – iOS & Android',
  intro: [
    'Vous voulez lancer une <strong>application mobile</strong> (iOS et Android) et cherchez un freelance pour la concevoir et la développer ? Je crée des applications mobiles sur mesure : React Native pour une base unique, ou solution hybride (Vue/React + Capacitor) selon le projet.',
    'Basé à Dax (Landes) et en remote partout en France, j’accompagne les porteurs de projet et les entreprises sur la <strong>création d’application mobile</strong> : MVP, publication sur les stores, intégration API et maintenance.'
  ],
  faqItems: [
    { question: 'Quelle technologie pour mon app mobile ?', answer: 'React Native pour des apps dédiées iOS/Android. Si vous avez déjà une app web (Vue/React), Capacitor permet de la packager en mobile (comme Prestago).' },
    { question: 'Pouvez-vous publier sur les stores ?', answer: 'Oui. Je peux préparer les builds, les métadonnées et la soumission sur App Store et Google Play, ou vous accompagner pour le faire.' },
    { question: 'Quelle zone d’intervention ?', answer: 'Dax (Landes), missions en remote en France. Premier échange gratuit pour cadrer votre projet.' }
  ]
}

useLocalSeoHead({
  url: pageUrl,
  title: 'Création application mobile freelance – iOS, Android',
  description: 'Création d\'application mobile freelance. React Native, iOS et Android. Publication stores. Basé à Dax, remote France. Devis gratuit.',
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Création application mobile', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Freelance création application mobile',
    description: 'Création d\'applications mobiles. React Native, iOS, Android. Dax, remote France.',
    pageUrl,
    knowsAbout: ['Application mobile', 'React Native', 'iOS', 'Android', 'Publication stores']
  })
})
</script>
