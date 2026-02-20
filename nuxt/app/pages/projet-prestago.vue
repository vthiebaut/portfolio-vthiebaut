<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <p class="text-sm text-gray-500 mb-2">
        <NuxtLink to="/" class="hover:underline">Portfolio</NuxtLink>
        <span class="mx-2">/</span>
        Projet Prestago
      </p>
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
        Prestago – SaaS de planification pour intervenants à domicile
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        <strong>Prestago</strong> est un projet que j’ai conçu, développé et mis en production. C’est une application mobile (iOS & Android) destinée aux intervenants à domicile (CESU, auto-entrepreneurs, auxiliaires de vie) pour planifier leurs journées, gérer leurs clients et suivre leurs interventions.
      </p>
      <p class="text-gray-600 mb-6">
        Ce projet illustre ce que je peux livrer en tant que <strong>développeur freelance</strong> : de la conception au déploiement sur les stores, en passant par le back-office et la maintenance. Stack : Vue 3, Capacitor, Symfony 7.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
        >
          Discutons de votre projet
        </NuxtLink>
        <a
          href="https://play.google.com/store/apps/details?id=com.vthiebaut.prestago&hl=fr"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
        >
          Voir sur le Google Play Store
        </a>
      </div>
    </section>

    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Fonctionnalités principales</h2>
        <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Vue mensuelle et hebdomadaire du planning</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Gestion des clients avec couleurs et historique</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Interventions récurrentes</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Absences et indisponibilités</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Calcul des distances entre rendez-vous</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Synchronisation cloud multi-appareils</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Authentification sécurisée</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Export mensuel et statistiques (version premium)</li>
        </ul>
      </div>
    </section>

    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Stack technique</h2>
        <p class="text-gray-700 mb-4">
          Front mobile : <strong>Vue 3</strong> (Composition API) + <strong>Capacitor</strong> pour le packaging iOS/Android. Back-end : <strong>Symfony 7</strong> (API REST, authentification, base de données). L’ensemble est en production et maintenu régulièrement.
        </p>
      </div>
    </section>

    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Vous avez un projet similaire ?</h2>
        <p class="text-gray-600 mb-4">
          Application métier, SaaS, outil de planification ou application mobile sur mesure : je peux vous accompagner de la conception à la mise en production.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/developpeur-web-dax" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">Développeur web Dax</NuxtLink>
          <NuxtLink to="/creation-application-mobile" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">Création application mobile</NuxtLink>
          <NuxtLink to="/freelance-symfony-landes" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition">Freelance Symfony Landes</NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto text-center">
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
        >
          Demander un devis
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/projet-prestago`

useLocalSeoHead({
  url: pageUrl,
  title: 'Projet Prestago – SaaS planification | Valentin Thiebaut',
  description: 'Prestago : application mobile de planification pour intervenants à domicile. Projet réalisé en Vue 3, Capacitor et Symfony 7. Développeur freelance à Dax.',
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Projet Prestago', item: pageUrl }
  ]
})
</script>
