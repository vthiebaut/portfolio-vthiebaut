<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <!-- Hero -->
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">
        Dépannage informatique à Saint-Paul-lès-Dax – technicien à domicile
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        Basé à Dax, j’interviens aussi à <strong>Saint-Paul-lès-Dax</strong> pour le dépannage
        informatique à domicile : réparation d’ordinateur, installation, nettoyage et conseil
        pour les particuliers et petites entreprises.
      </p>
      <p class="text-gray-600 mb-6">
        Que vous habitiez près du centre commercial, dans un lotissement ou en bord de forêt,
        je me déplace à Saint-Paul-lès-Dax et dans les environs pour résoudre vos soucis
        informatiques rapidement.
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
          Demander un dépannage à Saint-Paul-lès-Dax
        </NuxtLink>
      </div>
      <p class="text-xs text-gray-500 mt-3">
        Intervention à domicile sur Saint-Paul-lès-Dax, Dax et communes voisines.
      </p>
    </section>

    <!-- Intervention rapide -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Intervention rapide à Saint-Paul-lès-Dax et Dax
        </h2>
        <p class="text-gray-700 mb-4">
          Les pannes informatiques n’arrivent jamais au bon moment. Depuis Dax, je peux me déplacer
          rapidement sur Saint-Paul-lès-Dax pour diagnostiquer votre problème : PC qui ne démarre plus,
          connexion internet instable, imprimante récalcitrante, virus, lenteurs…
        </p>
        <p class="text-gray-600">
          Nous faisons ensemble le point sur vos besoins, que vous utilisiez votre PC pour le travail,
          les études ou la vie quotidienne dans les Landes.
        </p>
      </div>
    </section>

    <!-- Pourquoi un technicien local -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Pourquoi choisir un dépanneur informatique proche de Saint-Paul-lès-Dax&nbsp;?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 class="font-semibold mb-2">Proximité Dax / Saint-Paul-lès-Dax</h3>
            <p class="text-gray-600">
              Basé à Dax, je connais bien Saint-Paul-lès-Dax et ses environs&nbsp;:
              cela facilite les déplacements rapides et un suivi dans le temps.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Interlocuteur unique</h3>
            <p class="text-gray-600">
              Vous parlez directement au technicien qui prendra en charge votre matériel,
              sans passer par une plateforme ou un centre d’appel.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Adapté au territoire landais</h3>
            <p class="text-gray-600">
              Habiter à Saint-Paul-lès-Dax ou dans les Landes, c’est parfois composer
              avec des connexions variables et des installations hétérogènes.
              Je prends ces contraintes en compte dans mes interventions.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Conseils de confiance</h3>
            <p class="text-gray-600">
              Je privilégie toujours les solutions raisonnables, adaptées à votre budget,
              en expliquant clairement ce qui est fait sur votre ordinateur.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services détaillés -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          Services de dépannage informatique à Saint-Paul-lès-Dax
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Réparation d’ordinateur</h3>
            <p class="text-gray-600">
              Diagnostic matériel et logiciel, résolution des problèmes de démarrage,
              de lenteur ou de blocages sur PC portable et fixe.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Nettoyage et optimisation</h3>
            <p class="text-gray-600">
              Nettoyage des programmes inutiles, des fichiers temporaires et optimisation
              des paramètres pour un PC plus fluide.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Installation et configuration</h3>
            <p class="text-gray-600">
              Mise en place d’un nouvel ordinateur, configuration de Windows, installation
              de vos logiciels et paramétrage de base.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Conseils et accompagnement</h3>
            <p class="text-gray-600">
              Explications claires, choix d’équipements, bonnes pratiques de sécurité
              et de sauvegarde pour les habitants de Saint-Paul-lès-Dax.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Zone d’intervention -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Zone d’intervention autour de Saint-Paul-lès-Dax
        </h2>
        <p class="text-gray-600 mb-4">
          J’interviens à <strong>Saint-Paul-lès-Dax</strong>, à Dax et dans les communes voisines
          du Grand Dax et des Landes.
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
          Tarifs dépannage informatique à Saint-Paul-lès-Dax
        </h2>
        <p class="text-gray-600 mb-4">
          Les tarifs dépendent de la nature de la panne, du temps nécessaire et
          des éventuelles pièces à remplacer. Un devis est toujours annoncé avant
          le début du dépannage.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-12 border-t border-gray-200 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          FAQ – Dépannage informatique à Saint-Paul-lès-Dax
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
          Besoin d’un dépannage informatique à Saint-Paul-lès-Dax&nbsp;?
        </h2>
        <p class="text-gray-600 mb-6">
          Que ce soit pour une panne urgente ou une simple mise à niveau,
          je vous accompagne pour garder un ordinateur fiable au quotidien.
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

const pageUrl = 'https://portfolio.vthiebaut.fr/depannage-informatique-saint-paul-les-dax'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Dépannage informatique Saint-Paul-lès-Dax – Technicien à domicile'
const pageDescription =
  'Dépannage informatique à Saint-Paul-lès-Dax et Dax. Réparation PC, installation, nettoyage et conseils à domicile pour particuliers et petites entreprises dans les Landes.'

const areaServed = [
  'Saint-Paul-lès-Dax',
  'Dax',
  'Saint-Vincent-de-Paul',
  'Yzosse',
  'Mées',
  'Narrosse',
  'Landes'
]

const faqItems = [
  {
    question: 'Intervenez-vous directement à domicile à Saint-Paul-lès-Dax ?',
    answer:
      'Oui, je me déplace à domicile sur Saint-Paul-lès-Dax et Dax pour diagnostiquer et réparer votre ordinateur sur place lorsque c’est possible.'
  },
  {
    question: 'Puis-je être dépanné rapidement ?',
    answer:
      'Selon vos disponibilités et les miennes, une intervention peut généralement être planifiée sous 24 à 48 heures autour de Saint-Paul-lès-Dax et Dax.'
  },
  {
    question: 'Proposez-vous aussi du dépannage pour les petites entreprises ?',
    answer:
      'Oui, je peux intervenir pour les indépendants et petites structures locales ayant besoin d’un accompagnement informatique ponctuel.'
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
        name: 'Dépannage informatique Saint-Paul-lès-Dax - Valentin Thiebaut',
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
            name: 'Dépannage informatique Saint-Paul-lès-Dax',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>

