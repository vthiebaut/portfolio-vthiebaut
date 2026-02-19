<template>
  <main class="bg-slate-950 text-white min-h-screen">
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">
        Zones d’intervention – Dépannage informatique à Dax et dans les Landes
      </h1>
      <p class="text-lg text-slate-200 mb-4">
        Je propose du <strong>dépannage informatique à Dax</strong>, Saint-Paul-lès-Dax
        et dans plusieurs communes voisines des Landes. L’objectif&nbsp;: vous offrir
        un service de proximité, réactif et transparent.
      </p>
      <p class="text-slate-300 mb-6">
        Depuis Dax, j’interviens principalement dans un rayon d’environ 25 à 30 km.
        Certaines demandes plus éloignées peuvent être étudiées au cas par cas
        ou traitées à distance.
      </p>

      <section class="mt-10">
        <h2 class="text-2xl font-bold mb-3">Villes principales</h2>
        <ul class="list-disc list-inside text-slate-200 space-y-1">
          <li>
            <NuxtLink to="/depannage-informatique-dax" class="hover:text-emerald-400">
              Dépannage informatique à Dax
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/depannage-informatique-saint-paul-les-dax" class="hover:text-emerald-400">
              Dépannage informatique à Saint-Paul-lès-Dax
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/depannage-informatique-landes" class="hover:text-emerald-400">
              Dépannage informatique dans les Landes
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-3">Services informatiques par besoin</h2>
        <ul class="list-disc list-inside text-slate-200 space-y-1">
          <li>
            <NuxtLink to="/reparation-ordinateur-dax" class="hover:text-emerald-400">
              Réparation d’ordinateur à Dax
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/installation-ssd-dax" class="hover:text-emerald-400">
              Installation de SSD à Dax
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/nettoyage-virus-dax" class="hover:text-emerald-400">
              Nettoyage de virus à Dax
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/optimisation-pc-dax" class="hover:text-emerald-400">
              Optimisation de PC à Dax
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/reparation-pc-saint-paul-les-dax" class="hover:text-emerald-400">
              Réparation de PC à Saint-Paul-lès-Dax
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-3">Liste de communes desservies</h2>
        <p class="text-slate-300 mb-3">
          Interventions fréquentes dans les communes suivantes (liste non exhaustive)&nbsp;:
        </p>
        <ul class="flex flex-wrap gap-2 text-sm">
          <li
            v-for="city in areaServed"
            :key="city"
            class="px-3 py-1 rounded-full bg-slate-800 text-slate-100"
          >
            {{ city }}
          </li>
        </ul>
      </section>

      <section class="mt-10 text-center">
        <h2 class="text-2xl font-bold mb-4">
          Vous êtes un peu plus loin de Dax&nbsp;?
        </h2>
        <p class="text-slate-300 mb-6">
          Décrivez-moi votre situation, votre ville et votre besoin. Nous verrons ensemble
          si une intervention sur place ou à distance est possible.
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
            Envoyer une demande
          </NuxtLink>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'

const pageUrl = 'https://portfolio.vthiebaut.fr/zones-intervention'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Zones d’intervention – Dépannage informatique Dax et Landes'
const pageDescription =
  'Zones d’intervention pour le dépannage informatique autour de Dax et Saint-Paul-lès-Dax. Liste des villes desservies et services proposés dans les Landes.'

const areaServed = [
  'Dax',
  'Saint-Paul-lès-Dax',
  'Saint-Vincent-de-Paul',
  'Yzosse',
  'Mées',
  'Narrosse',
  'Tercis-les-Bains',
  'Saugnac-et-Cambran',
  'Herm',
  'Landes'
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
            name: 'Zones d’intervention',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>

