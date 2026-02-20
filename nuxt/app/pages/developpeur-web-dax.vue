<template>
  <AcquisitionPageFrame
    :h1="seo.h1"
    :intro="seo.intro"
    :faq-items="seo.faqItems"
    :hero-secondary="seo.heroSecondary"
  >
    <!-- Problème client -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Vous avez besoin d’un développeur fiable ?
        </h2>
        <p class="text-gray-700 mb-4">
          Que vous soyez une PME, une startup ou une agence, trouver un <strong>développeur web</strong> capable de livrer à temps, dans la qualité et sans multiplier les intermédiaires n’est pas évident. Les délais s’allongent, les coûts dérapent, et la personne en face change au fil du projet. En tant que <strong>développeur freelance à Dax</strong>, je m’engage sur un interlocuteur unique, des livraisons cadrées et un devis clair avant de commencer.
        </p>
        <p class="text-gray-600">
          Mon rôle : comprendre votre besoin, vous proposer la stack et l’organisation adaptées, puis livrer un produit maintenable — site, application métier, API ou application mobile — sans vous noyer dans la technique.
        </p>
      </div>
    </section>

    <!-- Ce que je peux développer pour vous -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Ce que je peux développer pour vous
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Sites vitrines & landing pages</h3>
            <p class="text-gray-600">
              Sites rapides, accessibles et optimisés SEO. Idéal pour présenter votre activité, générer des leads ou lancer un produit.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Applications web métier (SPA)</h3>
            <p class="text-gray-600">
              Interfaces riches type dashboard, outils de gestion, portails clients. Vue.js ou React pour une UX fluide et réactive.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Back-offices & admin</h3>
            <p class="text-gray-600">
              Espaces d’administration sécurisés pour gérer vos contenus, utilisateurs et données. Intégration possible avec vos systèmes existants.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">APIs & intégrations</h3>
            <p class="text-gray-600">
              Conception ou refonte d’APIs REST, connexion à des services tiers (paiement, envoi d’emails, CRM) et synchronisation de données.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi un freelance plutôt qu'une agence -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Pourquoi travailler avec un freelance plutôt qu’une agence ?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Un interlocuteur unique</h3>
            <p class="text-gray-600">
              Vous parlez directement au développeur qui réalise le projet. Pas de chef de projet intermédiaire, pas de déperdition. Décisions rapides et alignement constant sur vos priorités.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Coûts maîtrisés</h3>
            <p class="text-gray-600">
              Pas de marge agence ni de coûts de structure à répercuter. Les tarifs restent proportionnés à la complexité réelle du projet et à votre enveloppe budget.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Agilité et réactivité</h3>
            <p class="text-gray-600">
              Mise en place rapide, itérations courtes et ajustements en direct. Idéal pour valider une idée, lancer un MVP ou faire évoluer un outil existant sans lourdeur.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Engagement sur le résultat</h3>
            <p class="text-gray-600">
              En tant que développeur web à Dax, je m’investis sur la livraison et la maintenabilité du code. Vous bénéficiez d’une expertise technique de bout en bout, de la conception au déploiement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies maîtrisées -->
    <section class="py-12 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Technologies maîtrisées
        </h2>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Vue.js 3 / Composition API
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Symfony 7
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> React / React Native
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> TypeScript
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Tailwind CSS
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> API REST & GraphQL
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> PostgreSQL / MySQL
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Docker & CI/CD
          </li>
        </ul>
      </div>
    </section>

    <!-- Exemple concret : Prestago -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Exemple concret : Prestago
        </h2>
        <p class="text-gray-700 mb-4">
          <strong>Prestago</strong> est un SaaS que j’ai conçu et mis en production : une application mobile pour les intervenants à domicile (CESU, auto-entrepreneurs), avec planning, gestion des clients, synchronisation cloud et version premium. Stack : Vue 3, Capacitor, Symfony 7. C’est un exemple concret de ce que je peux livrer en tant que <strong>développeur web freelance</strong> : de la conception à la publication sur les stores, en passant par le back-office et la maintenance.
        </p>
        <NuxtLink
          to="/projet-prestago"
          class="inline-flex items-center text-emerald-600 font-semibold hover:underline"
        >
          Lire l’étude de cas Prestago →
        </NuxtLink>
      </div>
    </section>

    <!-- Méthode de travail -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Méthode de travail
        </h2>
        <ol class="space-y-4 list-decimal list-inside text-gray-700">
          <li>
            <strong class="text-gray-900">Cadrage</strong> — Échange (visio ou présentiel près de Dax) pour préciser le besoin, les livrables et le planning.
          </li>
          <li>
            <strong class="text-gray-900">Devis</strong> — Proposition chiffrée et détaillée, sans engagement tant que vous n’avez pas validé.
          </li>
          <li>
            <strong class="text-gray-900">Développement</strong> — Sprints courts, points réguliers et livraisons intermédiaires pour garder le cap.
          </li>
          <li>
            <strong class="text-gray-900">Livraison & suivi</strong> — Mise en production, documentation et accompagnement pour la suite (maintenance, évolutions).
          </li>
        </ol>
      </div>
    </section>

    <!-- Disponibilité et zones -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Disponibilité et zones
        </h2>
        <p class="text-gray-700 mb-4">
          Je suis basé à <strong>Dax, dans les Landes (40)</strong>. La majorité des missions se font en <strong>remote</strong> partout en France : visio, outil de suivi et livraisons en ligne. Pour les clients en Nouvelle-Aquitaine ou de passage, des rendez-vous en présentiel (Dax, Bordeaux, Bayonne…) sont possibles pour le cadrage ou les points d’étape.
        </p>
        <p class="text-gray-600">
          Ouvert aux missions freelance à la journée, au forfait ou en régie selon votre projet. Premier échange gratuit pour voir si on peut avancer ensemble.
        </p>
      </div>
    </section>

    <!-- Développeur freelance dans les Landes (SEO long tail) -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Développeur freelance dans les Landes et en Nouvelle-Aquitaine
        </h2>
        <p class="text-gray-700 mb-6">
          En tant que <strong>développeur dans les Landes</strong> et <strong>freelance en Nouvelle-Aquitaine</strong>, j’accompagne des profils variés, en présentiel quand c’est pertinent ou en télétravail sur toute la France.
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">PME locales</h3>
            <p class="text-gray-600">
              Entreprises des Landes, du 40 et de la région : besoin d’un site, d’un outil métier ou d’une évolution logicielle sans recruter en interne. Je m’adapte à votre rythme et à votre budget.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Startups régionales</h3>
            <p class="text-gray-600">
              Porteurs de projet en Nouvelle-Aquitaine (Bordeaux, Bayonne, Pau, Dax…) : MVP, refonte ou renfort technique ponctuel. Stack moderne (Vue.js, Symfony, React Native) et livraisons itératives.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Agences</h3>
            <p class="text-gray-600">
              Agences web ou producteurs qui manquent de capacité en développement : renfort sur Symfony, Vue.js ou React Native, en forfait ou en régie, sur des missions définies.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Télétravail France entière</h3>
            <p class="text-gray-600">
              La plupart de mes missions se font à distance : visio, outils de suivi, livraisons en ligne. Peu importe votre localisation en France, on peut avancer ensemble sans déplacement systématique.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Autres expertises -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Autres expertises
        </h2>
        <p class="text-gray-600 mb-4">
          Pour un focus technique (Symfony, React Native, maintenance, création d’app mobile), consultez les pages dédiées. Pour une étude de cas complète : Prestago.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/freelance-symfony-landes"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Freelance Symfony Landes
          </NuxtLink>
          <NuxtLink
            to="/developpeur-react-native-freelance"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Développeur React Native
          </NuxtLink>
          <NuxtLink
            to="/maintenance-application-symfony"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Maintenance Symfony
          </NuxtLink>
          <NuxtLink
            to="/creation-application-mobile"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Création application mobile
          </NuxtLink>
          <NuxtLink
            to="/developpeur-vuejs-freelance"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Développeur Vue.js
          </NuxtLink>
          <NuxtLink
            to="/projet-prestago"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Étude de cas Prestago
          </NuxtLink>
        </div>
      </div>
    </section>
  </AcquisitionPageFrame>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl, personSchema } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/developpeur-web-dax`

const seo = {
  h1: 'Développeur web freelance à Dax – Symfony, Vue.js, Mobile',
  heroSecondary: {
    kicker: 'Développement web & mobile • Dax & France',
    badges: ['Réponse sous 24h', 'Dax & remote France', 'Devis gratuit']
  },
  intro: [
    'Vous cherchez un <strong>développeur web freelance à Dax</strong> ou en remote pour créer un site, une API, un back-office ou une application mobile ? Je conçois et développe des solutions sur mesure avec Symfony, Vue.js et React Native — de la maquette à la mise en production.',
    'En tant que <strong>développeur freelance dans les Landes</strong> et en Nouvelle-Aquitaine, j’accompagne PME, startups et agences partout en France. Un interlocuteur unique, des livraisons cadrées et un devis clair avant de commencer.'
  ],
  faqItems: [
    {
      question: 'Quelle est votre zone d’intervention en tant que développeur web ?',
      answer: 'Je suis basé à Dax (Landes). La plupart des missions se font en remote en France. Pour le cadrage ou les points d’étape, je peux me déplacer en Nouvelle-Aquitaine (Dax, Bordeaux, Bayonne, Pau…).'
    },
    {
      question: 'Proposez-vous des devis pour des projets web ?',
      answer: 'Oui. Après un échange sur votre besoin (visio ou présentiel), je vous envoie un devis détaillé : périmètre, livrables, délais et tarifs. Aucun engagement avant signature.'
    },
    {
      question: 'Sur quelles technologies travaillez-vous ?',
      answer: 'Je travaille principalement avec Vue.js 3 et Symfony 7 pour le web, et React Native pour le mobile. Je peux aussi intervenir sur des stacks existantes (React, Node.js, APIs) selon le projet.'
    },
    {
      question: 'Pouvez-vous reprendre ou faire évoluer un projet existant ?',
      answer: 'Oui. Audit, corrections, évolutions et refactoring font partie de mes missions. Je peux intervenir sur du code existant (Vue, Symfony, React) pour le maintenir ou le faire monter en charge.'
    }
  ]
}

const title = 'Développeur web freelance Dax – Symfony, Vue.js, Mobile'
const description =
  'Développeur web freelance à Dax et dans les Landes. Symfony, Vue.js, React Native. Sites, APIs, back-offices, apps mobile. PME, startups, agences. Remote France. Devis gratuit.'

useLocalSeoHead({
  url: pageUrl,
  title,
  description,
  canonical: pageUrl,
  ogType: 'website',
  twitterCard: 'summary',
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Développeur web Dax', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Développeur web freelance',
    description,
    pageUrl,
    knowsAbout: [
      'Développement web',
      'Vue.js',
      'Symfony',
      'Applications web',
      'APIs REST',
      'Dax',
      'Landes'
    ],
    serviceName: 'Développement web freelance'
  })
})
</script>
