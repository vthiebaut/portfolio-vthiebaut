<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <!-- Breadcrumb -->
    <section class="pt-8 px-4 md:px-8 max-w-5xl mx-auto">
      <p class="text-sm text-gray-500 mb-6">
        <NuxtLink to="/" class="hover:underline">Portfolio</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/developpeur-web-dax" class="hover:underline">Développeur web Dax</NuxtLink>
        <span class="mx-2">/</span>
        Projet Prestago
      </p>
    </section>

    <HeroSecondary
      title="Prestago – Étude de cas d'un SaaS développé de A à Z"
      subtitle="Prestago est un SaaS conçu, développé et mis en production : application mobile (Android, iOS prévu) et API backend pour les intervenants à domicile. L'étude de cas détaille le contexte métier, les choix techniques et ce que cela démontre pour un projet similaire."
      kicker="Étude de cas • SaaS & application mobile"
      primary-cta-label="Discutons de votre projet"
      primary-cta-href="/#contact"
      secondary-cta-label="Voir sur le Google Play Store"
      secondary-cta-href="https://play.google.com/store/apps/details?id=com.vthiebaut.prestago&hl=fr"
      :badges="['Réponse sous 24h', 'Dax & remote France', 'Devis gratuit']"
      :note="`${contactEmail} • Basé à Dax, disponible en remote France.`"
    />

    <!-- 1. Contexte -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Contexte
        </h2>
        <p class="text-gray-700 mb-4">
          Les intervenants à domicile (aide à la personne, garde d'enfants, ménage, etc.) gèrent au quotidien des plannings, des clients et des créneaux récurrents. Beaucoup travaillent en CESU ou en auto-entrepreneur et n'ont pas accès à des outils métier adaptés : soit trop génériques, soit trop chers, soit peu adaptés aux récurrences et aux contraintes du secteur.
        </p>
        <p class="text-gray-600">
          Prestago a été créé pour répondre à ce besoin réel : une application dédiée à la planification des interventions à domicile, avec gestion des clients, des récurrences, des heures et des paiements, tout en restant simple à utiliser sur smartphone.
        </p>
      </div>
    </section>

    <!-- 2. Problème initial -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Problème initial
        </h2>
        <p class="text-gray-700 mb-4">
          Avant Prestago, la gestion se faisait souvent sur papier, dans des tableurs Excel ou avec des agendas génériques. Les limites sont connues : pas de vue mensuelle claire, pas de rappel des récurrences (bi-hebdomadaire, exceptions), pas de calcul des distances entre rendez-vous, pas de suivi des heures ni d'export pour la facturation ou les déclarations.
        </p>
        <p class="text-gray-600">
          Le cadre CESU et les spécificités du métier (déplacements, indisponibilités, clients avec couleurs ou historique) demandent un outil pensé pour ce usage. L'objectif était de fournir une application mobile fluide, synchronisée avec une base de données centralisée, et capable de gérer des récurrences complexes et des exceptions.
        </p>
      </div>
    </section>

    <!-- 3. Conception produit -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Conception produit
        </h2>
        <p class="text-gray-700 mb-6">
          Les choix techniques ont été faits pour livrer un produit maintenable, évolutif et publiable sur les stores sans dépendre d'une stack propriétaire.
        </p>
        <ul class="space-y-4 text-gray-700">
          <li>
            <strong class="text-gray-900">Vue 3 + Capacitor</strong> — Une seule codebase web (Vue 3, Composition API, Vite) packagée en application native via Capacitor pour Android et iOS. Tailwind pour l'UI. Pas de React Native ni Flutter : réutilisation maximale des compétences front et déploiement web possible (PWA ou site dédié) avec le même code.
          </li>
          <li>
            <strong class="text-gray-900">Symfony 7</strong> — Backend en API REST : robustesse, écosystème mature, Doctrine pour le modèle de données. Idéal pour la gestion des récurrences, des time blocks et des relations métier (clients, interventions, indisponibilités).
          </li>
          <li>
            <strong class="text-gray-900">API REST & auth</strong> — Endpoints structurés pour le mobile. Authentification JWT (LexikJWTAuthenticationBundle) avec refresh token custom pour limiter les reconnexions et sécuriser les sessions longues.
          </li>
          <li>
            <strong class="text-gray-900">Architecture modulaire</strong> — Modèles RecurrenceGroup, TimeBlocks, exceptions de rendez-vous : le domaine métier est modélisé de façon claire pour faciliter les évolutions (nouvelles récurrences, règles métier) sans tout casser.
          </li>
        </ul>
      </div>
    </section>

    <!-- 4. Architecture technique -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Architecture technique
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Application mobile</h3>
            <p class="text-gray-600 text-sm">
              Vue 3, Vite, Capacitor. Build Android (APK/AAB) pour publication Google Play. Tailwind pour les styles. Appels API REST avec gestion du token et du refresh.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">API & base de données</h3>
            <p class="text-gray-600 text-sm">
              Symfony 7, API REST, Doctrine ORM, PostgreSQL. Migrations versionnées. Données métier : clients, interventions, récurrences, indisponibilités, paiements.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Infrastructure</h3>
            <p class="text-gray-600 text-sm">
              Docker, Caddy en reverse proxy. Hébergement Scaleway. CI/CD avec GitHub Actions : tests, build, déploiement automatisé sur chaque push.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Publication & monétisation</h3>
            <p class="text-gray-600 text-sm">
              Publication Google Play (app en production). Abonnements gérés via RevenueCat. Intégration Mapbox pour les distances. Site vitrine avec SEO et prerender SSG (Nitro).
            </p>
          </div>
        </div>
        <h3 class="font-semibold mb-3 text-gray-900 mt-8">
          Stack technique détaillée
        </h3>
        <ul class="space-y-2 text-gray-700 text-sm">
          <li><strong class="text-gray-900">Frontend :</strong> Vue 3, Vite, Tailwind, Capacitor</li>
          <li><strong class="text-gray-900">Backend :</strong> Symfony 7, Doctrine ORM, JWT + refresh token custom</li>
          <li><strong class="text-gray-900">Base de données :</strong> PostgreSQL</li>
          <li><strong class="text-gray-900">Infrastructure :</strong> Docker, Caddy, GitHub Actions (CI/CD)</li>
          <li><strong class="text-gray-900">Services externes :</strong> RevenueCat, Mapbox</li>
        </ul>
      </div>
    </section>

    <!-- 5. Défis techniques -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Défis techniques
        </h2>
        <div class="space-y-6 text-gray-700">
          <div>
            <h3 class="font-semibold mb-2 text-gray-900">Récurrences complexes et exceptions</h3>
            <p class="text-gray-600">
              Gérer des plannings bi-hebdomadaires, avec jours fériés ou exceptions ponctuelles, sans surcharger l'interface. Modélisation avec RecurrenceGroup et TimeBlocks, et règles métier côté API pour la génération des créneaux et la prise en compte des déplacements.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2 text-gray-900">Fuseaux horaires et synchronisation</h3>
            <p class="text-gray-600">
              Les interventions sont en heure locale. Stockage et comparaison en UTC côté base, affichage et édition en fuseau utilisateur. Synchronisation mobile : pas de conflits lors des mises à jour concurrentes, avec stratégie de résolution claire.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2 text-gray-900">Calcul des distances</h3>
            <p class="text-gray-600">
              Intégration Mapbox pour calculer les distances entre rendez-vous et aider à organiser les tournées. Données d'adresse cohérentes entre clients et interventions pour des résultats fiables.
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2 text-gray-900">SEO et site vitrine</h3>
            <p class="text-gray-600">
              Site de présentation du produit avec métadonnées, structure sémantique et prerender SSG (Nitro) pour un bon référencement. Pas de SPA opaque : contenu indexable pour les requêtes type "planning intervenant domicile" ou "app CESU".
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Déploiement & production -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Déploiement & production
        </h2>
        <p class="text-gray-700 mb-4">
          L'application est hébergée sur Scaleway. Les versions sont taguées ; la CI/CD exécute les tests, build l'image Docker et déploie sur l'environnement cible. Les mises à jour sont continues : correctifs, évolutions métier et montées de dépendances (Symfony, Vue, Capacitor) sont déployées de façon reproductible.
        </p>
        <p class="text-gray-600 mb-4">
          Les abonnements sont gérés via RevenueCat, ce qui simplifie la facturation in-app et la conformité avec les stores. La publication sur le Google Play Store suit le processus standard (listing, politique de confidentialité, builds signés). Une version iOS est prévue avec le même codebase Capacitor.
        </p>
      </div>
    </section>

    <!-- 7. Résultats -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Résultats
        </h2>
        <p class="text-gray-700 mb-4">
          L'application Prestago est en production : utilisateurs réels, modèle d'abonnement actif, maintenance continue et mises à jour régulières. Elle couvre les besoins principaux — planning, clients, récurrences, heures, paiements, export PDF, gestion des indisponibilités — et les retours terrain permettent d'itérer sur l'UX et les fonctionnalités (statistiques, exports, récurrences avancées).
        </p>
        <p class="text-gray-700 mb-4">
          Prestago n'est pas un projet vitrine, mais un produit réel, utilisé et maintenu dans la durée.
        </p>
        <p class="text-gray-600">
          La stack (Vue 3, Symfony 7, Capacitor, PostgreSQL, Docker, CI/CD) a prouvé qu'elle tient la route en conditions réelles. Les évolutions et correctifs sont déployés de façon reproductible, sans dette technique excessive grâce à une architecture modulaire et des tests automatisés.
        </p>
      </div>
    </section>

    <!-- 8. Ce que cela démontre pour un client -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Ce que cela démontre pour un client
        </h2>
        <p class="text-gray-700 mb-6">
          Si vous envisagez un SaaS, une application métier ou une app mobile, cette étude de cas illustre ce que je peux livrer en tant que <NuxtLink to="/developpeur-web-dax" class="text-emerald-600 font-semibold hover:underline">développeur freelance</NuxtLink> :
        </p>
        <p class="text-gray-700 mb-6">
          Conception d'un produit de A à Z, architecture maintenable, gestion des évolutions fonctionnelles et des bugs en conditions réelles, vision long terme : Prestago démontre qu'un freelance peut porter seul la conception, le développement et la maintenance d'un SaaS en production.
        </p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 mt-0.5">✓</span>
            <span><strong class="text-gray-900">Produit complet</strong> — De la conception au déploiement sur les stores et à la maintenance continue.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 mt-0.5">✓</span>
            <span><strong class="text-gray-900">Backend robuste</strong> — API REST, auth JWT, modèle de données métier, récurrences et règles complexes.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 mt-0.5">✓</span>
            <span><strong class="text-gray-900">Mobile hybride</strong> — Une codebase Vue packagée en natif (Capacitor), publiable sur Android et iOS.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 mt-0.5">✓</span>
            <span><strong class="text-gray-900">Architecture maintenable</strong> — Code structuré, CI/CD, Docker, pas de bricolage en production.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-600 mt-0.5">✓</span>
            <span><strong class="text-gray-900">Gestion long terme</strong> — Mises à jour, correctifs et évolutions dans la durée.</span>
          </li>
        </ul>
        <p class="text-gray-600 mt-6">
          Pour un projet sur mesure en <NuxtLink to="/creation-application-mobile" class="text-emerald-600 font-semibold hover:underline">création d'application mobile</NuxtLink> ou un besoin backend <NuxtLink to="/freelance-symfony-landes" class="text-emerald-600 font-semibold hover:underline">Symfony</NuxtLink>, on peut s'appuyer sur cette même approche : stack éprouvée, livraison par étapes, produit maintenable.
        </p>
      </div>
    </section>

    <!-- Et si votre projet nécessite… -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Et si votre projet nécessite…
        </h2>
        <ul class="grid md:grid-cols-2 gap-3 text-gray-700 mb-6">
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Une API sécurisée</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Une application mobile publiée sur les stores</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Un SaaS multi-utilisateurs</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Un système d'abonnement</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Une gestion de données métier complexes</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600">✓</span> Une architecture évolutive</li>
        </ul>
        <p class="text-gray-600">
          Prestago est un exemple concret de ce type d'architecture.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Questions fréquentes
        </h2>
        <div class="space-y-4">
          <details
            v-for="(item, i) in faqItems"
            :key="i"
            class="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
          >
            <summary class="font-semibold cursor-pointer text-gray-900">
              {{ item.question }}
            </summary>
            <p class="mt-2 text-gray-600">{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- 9. CTA final + maillage -->
    <section class="py-12 px-4 md:px-8 bg-gray-50 border-t border-gray-200">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Vous avez un projet SaaS ou application mobile ?
        </h2>
        <p class="text-gray-600 mb-4 max-w-2xl mx-auto">
          Discutons-en : cadrage de votre besoin, stack adaptée et livraison par étapes. Devis gratuit. Réponse sous 24h.
        </p>
        <p class="text-gray-500 text-sm mb-6">
          Basé à Dax – disponible en remote partout en France.
        </p>
        <NuxtLink
          to="/#contact"
          class="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition mb-6"
        >
          Discutons de votre projet
        </NuxtLink>
        <p class="text-gray-600 mb-4">
          <a :href="`mailto:${contactEmail}`" class="text-emerald-600 hover:underline font-medium">{{ contactEmail }}</a>
        </p>
        <p class="text-gray-500 text-sm mb-4">
          Ou me contacter directement sur <a href="https://www.linkedin.com/in/valentin-thiebaut" target="_blank" rel="noopener" class="text-emerald-600 hover:underline">LinkedIn</a>.
        </p>
        <div class="flex flex-wrap justify-center gap-3 text-sm mb-4">
          <NuxtLink to="/developpeur-web-dax" class="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 transition">
            Développeur web Dax
          </NuxtLink>
          <NuxtLink to="/creation-application-mobile" class="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 transition">
            Création application mobile
          </NuxtLink>
          <NuxtLink to="/freelance-symfony-landes" class="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 transition">
            Freelance Symfony Landes
          </NuxtLink>
          <NuxtLink to="/#contact" class="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 transition">
            Contact
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Sticky CTA mobile -->
    <NuxtLink
      to="/#contact"
      class="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-xl z-50 block md:hidden hover:bg-emerald-700"
    >
      Discutons de votre projet
    </NuxtLink>
  </main>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl, contactEmail, personSchema } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/projet-prestago`

const pageTitle = 'Prestago – Étude de cas | Développeur freelance Dax'
const pageDescription = 'Étude de cas Prestago : SaaS en production (Vue 3, Symfony 7). Architecture mobile + API. Conception au déploiement. Développeur freelance Dax.'

const faqItems = [
  {
    question: 'Quelle stack technique pour Prestago ?',
    answer: 'Frontend mobile : Vue 3, Vite, Capacitor (Android). Backend : Symfony 7, API REST, JWT, Doctrine, PostgreSQL. Infrastructure : Docker, Caddy, CI/CD GitHub Actions, hébergement Scaleway. Abonnements via RevenueCat, distances via Mapbox.'
  },
  {
    question: 'Prestago est-il en production ?',
    answer: "Oui. L'application est publiée sur le Google Play Store, avec des utilisateurs réels et des abonnements actifs. Les mises à jour et la maintenance sont continues."
  },
  {
    question: 'Peut-on faire un projet similaire (SaaS, app mobile) ?',
    answer: "Oui. En tant que développeur freelance à Dax, je peux accompagner un projet SaaS ou une application mobile de la conception au déploiement (stores, hébergement, CI/CD). Voir la page Développeur web Dax et Création application mobile pour le détail de l'offre."
  }
]

useLocalSeoHead({
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Développeur web Dax', item: baseUrl + '/developpeur-web-dax' },
    { position: 3, name: 'Projet Prestago', item: pageUrl }
  ],
  faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Développeur web freelance',
    description: 'Développeur freelance à Dax. Conception et développement de SaaS et applications mobiles (Vue.js, Symfony, Capacitor). Étude de cas : Prestago.',
    pageUrl,
    knowsAbout: ['Vue.js', 'Symfony', 'Capacitor', 'API REST', 'SaaS', 'Application mobile', 'PostgreSQL', 'Docker', 'CI/CD']
  })
})
</script>
