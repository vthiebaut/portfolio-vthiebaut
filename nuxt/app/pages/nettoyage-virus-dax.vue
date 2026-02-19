<template>
  <main class="bg-slate-950 text-white min-h-screen">
    <!-- Hero -->
    <section class="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">
        Nettoyage de virus à Dax – PC sain et sécurisé
      </h1>
      <p class="text-lg text-slate-200 mb-4">
        Votre ordinateur affiche des publicités bizarres, est devenu très lent ou ouvre des pages
        sans votre accord&nbsp;? Je propose un <strong>nettoyage de virus à Dax</strong> pour remettre
        votre PC en état et sécuriser votre navigation.
      </p>
      <p class="text-slate-300 mb-6">
        Basé à Dax, j’interviens à domicile ou à distance pour supprimer les virus, malwares,
        spywares et programmes indésirables, puis renforcer la protection de votre ordinateur
        dans les Landes.
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
          Demander un nettoyage de virus
        </NuxtLink>
      </div>
      <p class="text-xs text-slate-400 mt-3">
        Intervention à domicile sur Dax et alentours, ou à distance si adapté.
      </p>
    </section>

    <!-- Intervention rapide -->
    <section class="bg-slate-900 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Intervention rapide pour nettoyage de virus à Dax
        </h2>
        <p class="text-slate-200 mb-4">
          Un PC infecté par des malwares ou des adwares peut vite devenir inutilisable
          et mettre vos données en danger. À Dax, j’interviens rapidement pour analyser
          la situation et supprimer les infections.
        </p>
        <p class="text-slate-300 mb-4">
          Selon le type de virus et l’état de votre système, le nettoyage peut se faire
          à domicile, dans les environs de Dax, ou à distance pour certains cas
          de simple infection logicielle.
        </p>
        <p class="text-slate-300">
          L’objectif est double&nbsp;: retrouver un ordinateur utilisable et limiter les risques
          pour vos mots de passe, vos comptes en ligne et vos documents importants.
        </p>
      </div>
    </section>

    <!-- Pourquoi un technicien local -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Pourquoi faire nettoyer votre PC par un technicien local à Dax&nbsp;?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-slate-200">
          <div>
            <h3 class="font-semibold mb-2">Diagnostic personnalisé</h3>
            <p class="text-slate-300">
              Chaque situation est différente. Plutôt que d’utiliser un outil automatique,
              j’analyse l’état de votre PC à Dax pour choisir la meilleure méthode
              de nettoyage.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Protection des données</h3>
            <p class="text-slate-300">
              Avant les actions lourdes, nous parlons de vos données et, si besoin,
              une sauvegarde est réalisée pour minimiser les risques de perte de fichiers.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Explications claires</h3>
            <p class="text-slate-300">
              Je vous explique d’où viennent les infections, comment les éviter
              et quels réflexes adopter pour naviguer plus sereinement.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Suivi dans le temps</h3>
            <p class="text-slate-300">
              En tant que technicien local, je reste disponible après l’intervention
              pour répondre à vos questions ou intervenir de nouveau si besoin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services détaillés -->
    <section class="bg-slate-900 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          Services de nettoyage de virus à Dax
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <h3 class="font-semibold mb-2">Analyse des infections</h3>
            <p class="text-slate-300">
              Vérification des programmes au démarrage, des extensions de navigateur,
              des tâches planifiées et des logiciels suspects installés à votre insu.
            </p>
          </article>
          <article class="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <h3 class="font-semibold mb-2">Suppression des malwares</h3>
            <p class="text-slate-300">
              Nettoyage des adwares, spywares, barres d’outils, faux antivirus et
              programmes malveillants qui ralentissent votre ordinateur.
            </p>
          </article>
          <article class="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <h3 class="font-semibold mb-2">Vérification de la sécurité</h3>
            <p class="text-slate-300">
              Contrôle de la présence d’un antivirus efficace, des mises à jour Windows
              et des paramètres de sécurité de base.
            </p>
          </article>
          <article class="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <h3 class="font-semibold mb-2">Conseils de prévention</h3>
            <p class="text-slate-300">
              Explications sur les pratiques à éviter, les sites à risque, la gestion
              des mots de passe et les sauvegardes à mettre en place.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Zone d’intervention -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Zone d’intervention pour le nettoyage de virus
        </h2>
        <p class="text-slate-300 mb-4">
          J’interviens principalement pour le <strong>nettoyage de virus à Dax</strong> et dans
          les communes voisines des Landes. Certaines interventions peuvent être réalisées
          à distance si le PC démarre encore correctement.
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
      </div>
    </section>

    <!-- Tarifs / devis -->
    <section class="bg-slate-900 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Tarifs nettoyage de virus à Dax
        </h2>
        <p class="text-slate-300 mb-4">
          Le tarif dépend du niveau d’infection, du temps de nettoyage nécessaire
          et de la complexité de la remise en état du système. Un prix vous est
          annoncé avant le début de l’intervention.
        </p>
        <p class="text-slate-200">
          Dans certains cas, si le système est trop endommagé, une réinstallation
          complète peut être recommandée. Cette solution est toujours discutée
          avec vous avant d’être mise en œuvre.
        </p>
      </div>
    </section>

    <!-- Avis (placeholder) -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Avis clients sur le nettoyage de virus à Dax
        </h2>
        <p class="text-slate-300 mb-4">
          Les témoignages de clients dépannés à Dax et dans les Landes après une infection
          seront bientôt disponibles ici pour vous aider à choisir un prestataire de confiance.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-slate-900 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          FAQ – Nettoyage de virus à Dax
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
          Votre PC semble infecté&nbsp;? Faites-le nettoyer à Dax.
        </h2>
        <p class="text-slate-300 mb-6">
          Plus un virus reste longtemps sur votre ordinateur, plus les risques augmentent.
          Contactez-moi rapidement pour un <strong>nettoyage de virus à Dax</strong> en toute
          sécurité.
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
            Demander un nettoyage de virus
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

const pageUrl = 'https://portfolio.vthiebaut.fr/nettoyage-virus-dax'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Nettoyage virus Dax – PC sain et sécurisé'
const pageDescription =
  'Nettoyage de virus à Dax et Saint-Paul-lès-Dax. Suppression de malwares, adwares et faux antivirus, sécurisation et conseils pour protéger votre ordinateur dans les Landes.'

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
    question: 'Comment savoir si mon ordinateur est infecté par un virus ?',
    answer:
      'Ralentissements, publicités intempestives, ouverture de fenêtres étranges ou messages d’alerte inhabituels peuvent être des signes d’infection. Un diagnostic permet de confirmer la situation.'
  },
  {
    question: 'Un antivirus suffit-il à nettoyer mon PC ?',
    answer:
      'Les antivirus classiques ne détectent pas toujours tous les malwares. Un nettoyage manuel et des outils spécialisés sont souvent nécessaires pour un nettoyage complet.'
  },
  {
    question: 'Pouvez-vous intervenir à distance pour nettoyer les virus ?',
    answer:
      'Oui, dans certains cas, si votre PC démarre correctement et a une connexion internet stable, un nettoyage à distance est possible après votre accord.'
  },
  {
    question: 'Mes données sont-elles en sécurité pendant le nettoyage ?',
    answer:
      'L’objectif est de préserver vos données. Si le système est trop instable, une sauvegarde peut être réalisée avant les opérations les plus sensibles.'
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
        name: 'Nettoyage virus Dax - Valentin Thiebaut',
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
            name: 'Nettoyage virus Dax',
            item: pageUrl
          }
        ]
      })
    }
  ]
})
</script>

