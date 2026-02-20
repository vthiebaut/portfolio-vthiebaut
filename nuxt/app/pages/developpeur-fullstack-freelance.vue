<template>
  <AcquisitionPageFrame :h1="seo.h1" :intro="seo.intro" :faq-items="seo.faqItems">
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Ce que je peux développer en full-stack</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Web : front + back</h3>
            <p class="text-gray-600">Vue.js ou React en front, Symfony ou Node en back. APIs, auth, base de données. De la maquette à la mise en production.</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Web + mobile</h3>
            <p class="text-gray-600">Application web (dashboard, back-office) + app mobile React Native ou hybride. Une vision cohérente du produit sur tous les canaux.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Pourquoi un freelance full-stack ?</h2>
        <p class="text-gray-700">Un seul interlocuteur pour toute la chaîne (conception, front, back, déploiement). Moins de coordination, des décisions techniques alignées et un coût maîtrisé.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Exemple : Prestago</h2>
        <p class="text-gray-700 mb-4">Prestago est un SaaS complet : app mobile (Vue 3 + Capacitor) + back-end Symfony 7. <NuxtLink to="/#projets" class="text-emerald-600 font-semibold hover:underline">Voir le projet</NuxtLink>.</p>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Disponibilité</h2>
        <p class="text-gray-700">Dax (Landes), remote France. Missions full-stack en forfait ou régie. Devis gratuit.</p>
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
const pageUrl = `${baseUrl}/developpeur-fullstack-freelance`

const seo = {
  h1: 'Développeur full-stack freelance – Web, mobile, APIs',
  intro: [
    'Vous avez besoin d’un <strong>développeur full-stack freelance</strong> pour porter un projet de A à Z (front, back, API, voire mobile) ? Je conçois et développe des applications complètes avec Vue.js, Symfony et React Native.',
    'Basé à Dax (Landes) et en remote partout en France, j’assure la cohérence technique du produit et la livraison de bout en bout : de la conception à la mise en production et au suivi.'
  ],
  faqItems: [
    { question: 'Qu’entendez-vous par full-stack ?', answer: 'Front-end (Vue.js, React), back-end (Symfony, APIs), base de données, déploiement. Et si le projet le demande : application mobile (React Native ou hybride).' },
    { question: 'Proposez-vous des missions longues ?', answer: 'Oui. Forfait pour un périmètre défini ou régie pour de l’accompagnement au long cours. On adapte selon votre projet.' },
    { question: 'Où intervenez-vous ?', answer: 'Dax (Landes). Missions principalement en remote en France. Déplacements possibles en Nouvelle-Aquitaine.' }
  ]
}

useLocalSeoHead({
  url: pageUrl,
  title: 'Développeur full-stack freelance – Vue, Symfony | V. Thiebaut',
  description: 'Développeur full-stack freelance. Vue.js, Symfony, React Native. Web et mobile. Basé à Dax, remote France. Devis gratuit.',
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Développeur full-stack freelance', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Développeur full-stack freelance',
    description: 'Développeur full-stack freelance. Vue.js, Symfony, React Native. Dax, remote France.',
    pageUrl,
    knowsAbout: ['Développement full-stack', 'Vue.js', 'Symfony', 'React Native', 'APIs', 'Applications web et mobile']
  })
})
</script>
