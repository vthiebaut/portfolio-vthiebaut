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

    <!-- Pourquoi un freelance Symfony plutôt qu'une agence -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">
          Pourquoi travailler avec un freelance Symfony plutôt qu’une agence ?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Expertise Symfony au contact</h3>
            <p class="text-gray-600">
              Vous travaillez directement avec un développeur qui maîtrise Symfony au quotidien (routing, Doctrine, sécurité, API Platform). Pas de sous-traitance ni de turnover en cours de projet.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Pricing adapté aux Landes et à la France</h3>
            <p class="text-gray-600">
              En tant que <strong>freelance Symfony dans les Landes</strong>, mes tarifs restent cohérents avec le marché français. Forfait ou régie, selon la nature et la durée de la mission.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Livraisons incrémentales</h3>
            <p class="text-gray-600">
              Mise en place de livrables intermédiaires (sprints, versions de démo) pour valider la direction technique et fonctionnelle avant d’aller plus loin. Vous gardez la main sur le scope.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Code maintenable et documenté</h3>
            <p class="text-gray-600">
              Bonnes pratiques Symfony (services, events, DDD léger si besoin), tests et documentation pour que vous ou une équipe interne puissiez reprendre le projet sereinement.
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
          to="/#projets"
          class="inline-flex items-center text-emerald-600 font-semibold hover:underline"
        >
          Voir le projet Prestago →
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
            <strong class="text-gray-900">Cadrage</strong> — Visio ou présentiel (Dax, Bordeaux, ou remote) pour définir le périmètre, l’existant éventuel et les livrables.
          </li>
          <li>
            <strong class="text-gray-900">Devis</strong> — Proposition détaillée (phases, délais, coûts). Aucun engagement avant votre accord.
          </li>
          <li>
            <strong class="text-gray-900">Développement</strong> — Sprints courts, code versionné (Git), revues et livraisons partielles pour valider au fur et à mesure.
          </li>
          <li>
            <strong class="text-gray-900">Livraison & maintenance</strong> — Mise en production, documentation technique et option de suivi (maintenance, évolutions).
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
          Je suis installé à <strong>Dax (Landes)</strong>. Les missions se font majoritairement en <strong>remote</strong> partout en France. Pour les entreprises en Nouvelle-Aquitaine, des rendez-vous sur site (Dax, Bordeaux, Bayonne…) sont possibles pour le cadrage ou les ateliers.
        </p>
        <p class="text-gray-600">
          Ouvert aux missions <strong>freelance Symfony</strong> en forfait ou en régie. Premier échange gratuit pour voir si votre projet et ma stack correspondent.
        </p>
      </div>
    </section>

    <!-- Autres expertises -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Autres expertises
        </h2>
        <p class="text-gray-600 mb-4">
          En plus de Symfony, je développe des interfaces avec Vue.js et des applications mobiles avec React Native. Je propose aussi de la maintenance d’applications Symfony existantes.
        </p>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/developpeur-web-dax"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Développeur web Dax
          </NuxtLink>
          <NuxtLink
            to="/developpeur-vuejs-freelance"
            class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            Développeur Vue.js freelance
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
