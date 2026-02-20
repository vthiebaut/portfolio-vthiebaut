<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <HeroSecondary
      title="Optimisation PC à Dax – Redonnez de la fluidité à votre ordinateur"
      subtitle="Analyse de la configuration, nettoyage du système, optimisation des paramètres. Conseils SSD, mémoire, logiciels. Intervention à domicile."
      kicker="Optimisation PC • Dax & alentours"
      :primary-cta-label="`Appeler maintenant – ${phoneDisplay}`"
      :primary-cta-href="`tel:${phone}`"
      secondary-cta-label="Demander une optimisation PC"
      secondary-cta-href="/#contact"
      :badges="['Réponse sous 24h', 'Dax + 30 km', 'Devis gratuit']"
      note="Intervention à domicile sur Dax, Saint-Paul-lès-Dax et communes voisines."
    />



    <!-- Intervention rapide -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Intervention optimisation PC à Dax et alentours
        </h2>
        <p class="text-gray-700 mb-4">
          Avec le temps, les ordinateurs s’encrassent&nbsp;: programmes inutiles, démarrages
          automatiques, fichiers temporaires, petits outils installés «&nbsp;juste pour essayer&nbsp;».
          Une intervention ciblée à Dax permet souvent de retrouver une vraie fluidité.
        </p>
        <p class="text-gray-600">
          J’analyse votre usage, vos besoins (bureautique, internet, travail, loisirs) et j’adapte
          l’optimisation pour que votre PC reste agréable à utiliser au quotidien, sans vous imposer
          une configuration compliquée.
        </p>
      </div>
    </section>

    <!-- Pourquoi un technicien local -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Pourquoi faire optimiser votre PC par un technicien local à Dax&nbsp;?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 class="font-semibold mb-2">Analyse personnalisée</h3>
            <p class="text-gray-600">
              Plutôt que d’utiliser un logiciel automatique, je regarde comment vous utilisez votre
              ordinateur et j’adapte les réglages à votre profil.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Explications claires</h3>
            <p class="text-gray-600">
              Chaque changement est expliqué&nbsp;: vous gardez le contrôle de ce qui est installé
              ou désinstallé sur votre machine.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Conseils d’équipement</h3>
            <p class="text-gray-600">
              Si une mise à niveau matérielle (SSD, RAM) est pertinente, je vous l’indique avec
              des conseils concrets, adaptés à votre budget.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Suivi dans le temps</h3>
            <p class="text-gray-600">
              Vous pouvez me recontacter si vous avez des questions après l’optimisation ou
              si de nouveaux besoins apparaissent.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services détaillés -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          Services d’optimisation PC à Dax
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Nettoyage logiciel</h3>
            <p class="text-gray-600">
              Suppression des programmes inutiles, des démarrages automatiques superflus
              et des fichiers temporaires encombrants.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Réglages de Windows</h3>
            <p class="text-gray-600">
              Ajustement des paramètres pour améliorer la réactivité (alimentation, effets visuels,
              indexation, mises en veille, etc.).
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Conseils logiciels</h3>
            <p class="text-gray-600">
              Recommandations d’outils simples et efficaces pour votre usage, sans surcharger
              la machine.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Plan de sauvegarde</h3>
            <p class="text-gray-600">
              Mise en place de sauvegardes régulières pour protéger vos documents, photos
              et fichiers importants.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Zone d’intervention -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Zone d’intervention pour l’optimisation PC
        </h2>
        <p class="text-gray-600 mb-4">
          J’interviens pour l’<strong>optimisation PC à Dax</strong>, Saint-Paul-lès-Dax
          et plusieurs communes voisines dans les Landes.
        </p>
        <ul class="flex flex-wrap gap-2 text-sm">
          <li
            v-for="city in areaServed"
            :key="city"
            class="px-3 py-1 rounded-full bg-gray-50 text-gray-800"
          >
            {{ city }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Tarifs / devis -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Tarifs optimisation PC à Dax
        </h2>
        <p class="text-gray-600 mb-4">
          Le tarif dépend du temps passé sur votre machine et des opérations nécessaires
          (nettoyage simple, réglages avancés, accompagnement). L’objectif reste de vous
          proposer une optimisation utile et rentable pour vous.
        </p>
        <p class="text-gray-700">
          Avant toute intervention, nous faisons le point ensemble sur vos attentes
          et je vous indique ce qui est réaliste d’améliorer sur votre ordinateur actuel.
        </p>
      </div>
    </section>

    <!-- Avis (placeholder) -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Avis clients sur l’optimisation PC à Dax
        </h2>
        <p class="text-gray-600 mb-4">
          Les avis de clients ayant fait optimiser leur PC à Dax et dans les Landes
          seront prochainement affichés ici pour vous aider dans votre choix.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          FAQ – Optimisation PC à Dax
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
          Envie d’un PC plus fluide à Dax&nbsp;?
        </h2>
        <p class="text-gray-600 mb-6">
          Avant de changer d’ordinateur, une optimisation complète peut suffire.
          Contactez-moi pour en discuter et voir ce qu’il est possible d’améliorer.
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
            Demander une optimisation PC
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

const pageUrl = 'https://portfolio.vthiebaut.fr/optimisation-pc-dax'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Optimisation PC Dax – Accélérez votre ordinateur'
const pageDescription =
  'Optimisation PC à Dax et Saint-Paul-lès-Dax. Nettoyage logiciel, réglages Windows, conseils matériels et sauvegardes pour retrouver un ordinateur fluide dans les Landes.'

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
    question: 'Mon PC n’est pas en panne, mais il est lent. Une optimisation peut-elle aider ?',
    answer:
      'Oui, une optimisation ciblée à Dax permet souvent de retrouver une bonne fluidité sans changer d’ordinateur, surtout si la machine est encore globalement saine.'
  },
  {
    question: 'Combien de temps dure une intervention d’optimisation PC ?',
    answer:
      'Cela dépend de l’état de votre système, mais il faut généralement compter entre 1 et 2 heures pour une optimisation complète.'
  },
  {
    question: 'Faut-il forcément ajouter un SSD pour optimiser mon PC ?',
    answer:
      'Pas forcément. Un SSD est un plus, mais un nettoyage logiciel et des réglages adaptés peuvent déjà apporter une vraie différence, surtout à Dax où beaucoup d’usages sont bureautiques ou internet.'
  },
  {
    question: 'Pouvez-vous m’expliquer ce que vous faites pendant l’optimisation ?',
    answer:
      'Oui, je peux détailler chaque étape et vous montrer les réglages appliqués afin que vous sachiez exactement ce qui a été fait.'
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
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Optimisation PC Dax - Valentin Thiebaut',
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
      innerHTML: JSON.stringify({
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
      innerHTML: JSON.stringify({
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
            name: 'Optimisation PC Dax',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>

