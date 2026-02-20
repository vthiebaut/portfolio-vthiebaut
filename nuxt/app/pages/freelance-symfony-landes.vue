<template>
  <AcquisitionPageFrame
    :h1="seo.h1"
    :intro="seo.intro"
    :faq-items="seo.faqItems"
  >
    <!-- Ce que je peux développer pour vous (Symfony) -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Ce que je peux développer pour vous avec Symfony
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">APIs REST et back-ends métier</h3>
            <p class="text-gray-600">
              Conception d’APIs robustes (Symfony API Platform ou API REST custom), authentification (JWT, OAuth2), gestion des droits et intégration avec vos front-ends (Vue, React, mobile).
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Back-offices et outils d’admin</h3>
            <p class="text-gray-600">
              Espaces d’administration sécurisés, CRUD, workflows de validation, exports et tableaux de bord. Idéal pour gérer des contenus, des utilisateurs ou des données métier.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Refonte et modernisation (legacy)</h3>
            <p class="text-gray-600">
              Reprise de projets Symfony anciens : montée de version (Symfony 4 → 7), découplage front/back, amélioration des perfs et de la maintenabilité. Réduction de la dette technique.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Maintenance et évolutions</h3>
            <p class="text-gray-600">
              Correctifs, évolutions fonctionnelles, mises à jour de dépendances et sécurisation. Pour garder votre application Symfony stable et à jour sans recruter en interne.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lien vers la page pilier -->
    <section class="py-8 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <p class="text-gray-700">
          Pour le cadre général (méthode de travail, devis, zone d'intervention, disponibilité), consultez ma page principale :
          <NuxtLink to="/developpeur-web-dax" class="text-emerald-600 font-semibold hover:underline">Développeur web freelance à Dax</NuxtLink>.
        </p>
      </div>
    </section>

    <!-- Cas d'usage techniques Symfony -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Cas d'usage techniques (Symfony)
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">API REST & API Platform</h3>
            <p class="text-gray-600">
              Exposition de ressources (CRUD, filtres, pagination), authentification JWT ou OAuth2, opérations personnalisées. Idéal pour alimenter un front Vue/React ou une app mobile.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Doctrine & modélisation</h3>
            <p class="text-gray-600">
              Schéma métier, migrations, requêtes DQL/Query Builder, optimisation N+1. Reprise de bases existantes ou conception from scratch selon vos règles métier.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Refacto legacy & montée de version</h3>
            <p class="text-gray-600">
              Passage Symfony 4/5/6 vers 7, PHP 7 vers 8.x, découplage progressif front/back, réduction de la dette technique. Plan de migration par étapes.
            </p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">CI/CD & déploiement</h3>
            <p class="text-gray-600">
              Pipelines (tests, build, déploiement), Docker, environnements de préprod. Mise en place ou renforcement de votre chaîne de livraison.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies maîtrisées (écosystème Symfony) -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Technologies maîtrisées (écosystème Symfony)
        </h2>
        <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Symfony 7
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> API Platform
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Doctrine ORM
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> PHP 8.x
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> JWT / OAuth2
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> PostgreSQL / MySQL
          </li>
          <li class="flex items-center gap-2">
            <span class="text-emerald-600">✓</span> Messenger / jobs async
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
          <strong>Prestago</strong> est un SaaS que j’ai développé de A à Z : application mobile (Vue 3 + Capacitor) + back-end <strong>Symfony 7</strong> (API, auth, gestion des plannings et des clients). C’est en production et utilisé par des intervenants à domicile. Preuve que je peux livrer un produit complet, de l’API à la maintenance, en tant que <strong>freelance Symfony</strong>.
        </p>
        <NuxtLink
          to="/projet-prestago"
          class="inline-flex items-center text-emerald-600 font-semibold hover:underline"
        >
          Lire l'étude de cas Prestago (back-end Symfony 7) →
        </NuxtLink>
      </div>
    </section>

    <!-- Autres expertises -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Autres expertises
        </h2>
        <p class="text-gray-600 mb-4">
          Offre globale (web, mobile, méthode, zone) : voir la page pilier. Maintenance Symfony dédiée : page dédiée.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/developpeur-web-dax"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Développeur web Dax (page principale)
          </NuxtLink>
          <NuxtLink
            to="/projet-prestago"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Étude de cas Prestago
          </NuxtLink>
          <NuxtLink
            to="/maintenance-application-symfony"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Maintenance application Symfony
          </NuxtLink>
          <NuxtLink
            to="/creation-application-mobile"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Création application mobile
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
const pageUrl = `${baseUrl}/freelance-symfony-landes`

const seo = {
  h1: 'Freelance Symfony dans les Landes – APIs, back-offices, refonte',
  intro: [
    'Vous cherchez un <strong>freelance Symfony dans les Landes</strong> ou en remote pour développer une API, un back-office ou moderniser une application existante ? Je conçois et maintiens des applications Symfony (7) pour des startups et PME partout en France.',
    'En tant que <strong>freelance Symfony</strong> basé à Dax, j’interviens sur des projets neufs (APIs, outils métier) comme sur du legacy : refonte, montée de version, maintenance et évolutions. Objectif : livrer du code maintenable, documenté et aligné avec vos priorités métier.'
  ],
  faqItems: [
    {
      question: 'Intervenez-vous sur des projets Symfony existants ?',
      answer: 'Oui. Audit, corrections, évolutions, montée de version (Symfony 4/5/6 vers 7) et refactoring. Je peux aussi assurer la maintenance continue d’une application Symfony (correctifs, mises à jour, sécurisation).'
    },
    {
      question: 'Proposez-vous des missions en régie ou au forfait ?',
      answer: 'Les deux. Forfait pour un périmètre défini (API, module, refonte), régie pour de la montée en charge ou de l’accompagnement au long cours. On adapte selon votre projet et votre budget.'
    },
    {
      question: 'Travaillez-vous avec API Platform ?',
      answer: 'Oui. API Platform est un choix naturel pour exposer des APIs REST ou GraphQL avec Symfony. Je peux concevoir ou faire évoluer une API (ressources, filtres, sécurité, custom operations) selon vos besoins.'
    },
    {
      question: 'Où intervenez-vous en tant que freelance Symfony ?',
      answer: 'Je suis basé à Dax (Landes). La plupart des missions se font en remote en France. Déplacements possibles en Nouvelle-Aquitaine (Bordeaux, Bayonne, Pau…) pour le cadrage ou les ateliers.'
    }
  ]
}

const title = 'Freelance Symfony Landes – API, back-office | Valentin Thiebaut'
const description =
  'Freelance Symfony dans les Landes et en remote. Développement d\'APIs, back-offices et refonte d\'applications. Symfony 7, API Platform. Devis gratuit.'

useLocalSeoHead({
  url: pageUrl,
  title,
  description,
  canonical: pageUrl,
  ogType: 'website',
  twitterCard: 'summary',
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Freelance Symfony Landes', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Freelance Symfony',
    description,
    pageUrl,
    knowsAbout: [
      'Symfony',
      'API Platform',
      'PHP',
      'APIs REST',
      'Back-office',
      'Landes',
      'Dax'
    ],
    serviceName: 'Développement Symfony freelance'
  })
})
</script>
