<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <!-- Hero -->
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">
        Dépannage informatique dans les Landes – technicien proche de Dax
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        Basé à Dax, j’interviens pour le <strong>dépannage informatique dans les Landes</strong>
        auprès des particuliers et petites entreprises du secteur, avec un focus sur le Grand Dax
        et les communes alentour.
      </p>
      <p class="text-gray-600 mb-6">
        Que vous soyez à Dax, Saint-Paul-lès-Dax ou dans une commune landaise voisine,
        je vous accompagne pour résoudre vos problèmes informatiques, installer votre matériel
        et vous conseiller dans vos usages numériques.
      </p>
      <div class="flex flex-col sm:flex-row items-start gap-4">
        <a
          :href="`tel:${phone}`"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg hover:bg-emerald-600 transition"
        >
          Appeler maintenant – {{ phoneDisplay }}
        </a>
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
        >
          Demander un dépannage dans les Landes
        </NuxtLink>
      </div>
      <p class="text-xs text-gray-500 mt-3">
        Intervention principalement autour de Dax et Saint-Paul-lès-Dax, selon la distance
        et le type de demande.
      </p>
    </section>

    <!-- Intervention rapide -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Intervention de proximité dans les Landes
        </h2>
        <p class="text-gray-700 mb-4">
          Les Landes sont un territoire étendu, avec des zones rurales et urbaines.
          Depuis Dax, j’interviens en priorité dans un rayon raisonnable pour garantir
          des interventions efficaces et réalistes en termes de déplacement.
        </p>
        <p class="text-gray-600">
          Si vous êtes un peu plus éloigné, certaines demandes peuvent être traitées
          à distance (configuration, conseils, aide à la prise en main, etc.).
          N’hésitez pas à me décrire votre situation.
        </p>
      </div>
    </section>

    <!-- Pourquoi un technicien local -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Pourquoi choisir un dépanneur informatique landais&nbsp;?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 class="font-semibold mb-2">Connaissance du terrain</h3>
            <p class="text-gray-600">
              Vivre et travailler dans les Landes permet de mieux comprendre les réalités
              locales&nbsp;: connexion internet, opérateurs, besoins des habitants
              et professionnels du territoire.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Suivi proche de chez vous</h3>
            <p class="text-gray-600">
              Vous pouvez recontacter facilement le même technicien pour une question,
              un complément ou une nouvelle intervention dans le département.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Solutions adaptées</h3>
            <p class="text-gray-600">
              Les besoins d’un foyer ou d’une petite structure à Dax ou Saint-Paul-lès-Dax
              ne sont pas les mêmes qu’en grande métropole. Je propose des solutions
              adaptées à votre contexte landais.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Langage clair</h3>
            <p class="text-gray-600">
              Le dépannage se fait avec pédagogie et transparence, sans jargon inutile,
              pour que vous gardiez la main sur vos choix.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services détaillés -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          Services de dépannage informatique dans les Landes
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Dépannage à domicile</h3>
            <p class="text-gray-600">
              Interventions à domicile dans le secteur de Dax et Saint-Paul-lès-Dax
              pour résoudre les pannes les plus courantes.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Assistance à distance</h3>
            <p class="text-gray-600">
              Pour certains besoins (configuration, conseils), un dépannage à distance
              peut être mis en place, partout dans les Landes.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Installation de matériel</h3>
            <p class="text-gray-600">
              Mise en service de nouveaux PC, imprimantes, box internet et petits équipements
              numériques pour la maison ou le bureau.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Conseils numériques</h3>
            <p class="text-gray-600">
              Aide à la prise en main des outils en ligne, sécurité de base,
              sauvegarde de photos et documents pour les habitants des Landes.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Zone d’intervention -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Zone d’intervention dans les Landes
        </h2>
        <p class="text-gray-600 mb-4">
          Mon secteur principal couvre le Grand Dax et les communes proches.
          Certaines demandes plus éloignées peuvent être étudiées au cas par cas.
        </p>
        <ul class="flex flex-wrap gap-2 text-sm">
          <li
            v-for="city in areaServed"
            :key="city"
            class="px-3 py-1 rounded-full bg-gray-200 text-gray-800"
          >
            {{ city }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Tarifs / devis -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Tarifs dépannage informatique dans les Landes
        </h2>
        <p class="text-gray-600 mb-4">
          Les tarifs tiennent compte du temps d’intervention, du type de panne
          et de la distance de déplacement. Un devis vous est indiqué avant intervention
          afin que vous puissiez décider en toute transparence.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          FAQ – Dépannage informatique dans les Landes
        </h2>
        <div class="space-y-4">
          <details
            v-for="item in faqItems"
            :key="item.question"
            class="bg-gray-50 rounded-xl p-4 border border-gray-200"
          >
            <summary class="cursor-pointer font-semibold">
              {{ item.question }}
            </summary>
            <p class="text-gray-600 mt-2">
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
          Vous cherchez un dépanneur informatique dans les Landes&nbsp;?
        </h2>
        <p class="text-gray-600 mb-6">
          Décrivez-moi votre besoin, votre localisation et votre matériel,
          et nous verrons ensemble la meilleure façon de vous aider.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a
            :href="`tel:${phone}`"
            class="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg hover:bg-emerald-600 transition"
          >
            Appeler le {{ phoneDisplay }}
          </a>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
          >
            Envoyer une demande de dépannage
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Bouton sticky mobile -->
    <a
      :href="`tel:${phone}`"
      class="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-xl z-50 block md:hidden"
    >
      Appeler – {{ phoneDisplay }}
    </a>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'

const pageUrl = 'https://portfolio.vthiebaut.fr/depannage-informatique-landes'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Dépannage informatique Landes – Technicien proche de Dax'
const pageDescription =
  'Dépannage informatique dans les Landes, autour de Dax et Saint-Paul-lès-Dax. Aide aux particuliers et petites entreprises pour leurs besoins numériques du quotidien.'

const areaServed = [
  'Dax',
  'Saint-Paul-lès-Dax',
  'Saint-Vincent-de-Paul',
  'Yzosse',
  'Mées',
  'Narrosse',
  'Landes'
]

const faqItems = [
  {
    question: 'Dans quelles communes des Landes intervenez-vous ?',
    answer:
      'Je me déplace principalement autour de Dax et Saint-Paul-lès-Dax. Pour les demandes plus éloignées, nous voyons ensemble si une intervention sur place ou à distance est possible.'
  },
  {
    question: 'Proposez-vous des contrats de maintenance pour les pros ?',
    answer:
      'Je peux accompagner des indépendants ou petites structures sur des besoins ponctuels. Pour des contrats plus lourds, je peux vous orienter si nécessaire.'
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
        name: 'Dépannage informatique Landes - Valentin Thiebaut',
        '@id': `${pageUrl}#localbusiness`,
        url: pageUrl,
        telephone: phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Dax',
          postalCode: '40100',
          addressLocality: 'Dax',
          addressRegion: 'Nouvelle-Aquitaine',
          addressCountry: 'FR'
        },
        areaServed: areaServed.map((city) => ({
          '@type': 'City',
          name: city
        }))
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
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
            name: 'Dépannage informatique Landes',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>

