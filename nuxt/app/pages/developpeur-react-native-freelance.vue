<template>
  <AcquisitionPageFrame :h1="seo.h1" :intro="seo.intro" :faq-items="seo.faqItems">
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Ce que je peux développer en React Native</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Applications mobiles iOS & Android</h3>
            <p class="text-gray-600">Une base de code pour deux stores : app métier, outil interne, marketplace ou complément à un service web. Publication sur App Store et Google Play.</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">MVP et évolutions</h3>
            <p class="text-gray-600">De la conception à la mise en store : maquettes, développement, tests, soumission. Puis maintenance et évolutions selon vos priorités.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Pourquoi un freelance React Native ?</h2>
        <p class="text-gray-700 mb-4">Un seul interlocuteur du cahier des charges à la publication. Coûts maîtrisés par rapport à du natif double équipe, et livraisons itératives pour valider le produit.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Exemple : Prestago</h2>
        <p class="text-gray-700 mb-4">Prestago est une app mobile (Vue 3 + Capacitor) en production. J’ai aussi réalisé une app de relevé terrain en React Native. <NuxtLink to="/#projets" class="text-emerald-600 font-semibold hover:underline">Voir les projets</NuxtLink>.</p>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Disponibilité</h2>
        <p class="text-gray-700">Basé à Dax (Landes), missions remote France. Création d’application mobile freelance : devis gratuit.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Autres expertises</h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/creation-application-mobile" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Création application mobile</NuxtLink>
          <NuxtLink to="/developpeur-web-dax" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Développeur web Dax</NuxtLink>
          <NuxtLink to="/developpeur-fullstack-freelance" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Développeur full-stack freelance</NuxtLink>
        </div>
      </div>
    </section>
  </AcquisitionPageFrame>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl, personSchema } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/developpeur-react-native-freelance`

const seo = {
  h1: 'Développeur React Native freelance – Apps iOS & Android',
  intro: [
    'Vous cherchez un <strong>développeur React Native freelance</strong> pour créer ou faire évoluer une application mobile ? Je développe des apps iOS et Android avec une seule base de code : publication sur les stores, intégration API et maintenance.',
    'Basé à Dax et en remote partout en France, j’accompagne les porteurs de projet et les entreprises sur la <strong>création d’applications mobiles</strong> : MVP, outil métier, app grand public.'
  ],
  faqItems: [
    { question: 'Livrez-vous les apps sur les stores ?', answer: 'Oui. Je peux gérer la préparation des builds, les métadonnées et la soumission sur App Store et Google Play, ou vous accompagner pour le faire en interne.' },
    { question: 'React Native ou solution hybride (Capacitor) ?', answer: 'Je travaille avec React Native pour des apps mobiles dédiées. Pour des projets web-first, Capacitor (comme Prestago) permet de réutiliser du Vue/React et de publier en mobile.' },
    { question: 'Quelle zone d’intervention ?', answer: 'Dax (Landes), missions en remote en France. Premier échange gratuit pour cadrer votre projet.' }
  ]
}

useLocalSeoHead({
  url: pageUrl,
  title: 'Développeur React Native freelance – Apps mobile | V. Thiebaut',
  description: 'Développeur React Native freelance. Création d\'apps iOS et Android. Publication stores, API. Basé à Dax, remote France. Devis gratuit.',
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Développeur React Native freelance', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Développeur React Native freelance',
    description: 'Développeur React Native freelance. Apps iOS et Android. Dax, remote France.',
    pageUrl,
    knowsAbout: ['React Native', 'Applications mobiles', 'iOS', 'Android', 'Publication stores']
  })
})
</script>
