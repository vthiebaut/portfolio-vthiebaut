<template>
  <AcquisitionPageFrame :h1="seo.h1" :intro="seo.intro" :faq-items="seo.faqItems" :hero-secondary="seo.heroSecondary">
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Ce que couvre la maintenance Symfony</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Correctifs et évolutions</h3>
            <p class="text-gray-600">Correction de bugs, petites évolutions fonctionnelles, mises à jour de dépendances et sécurisation (CVE, bonnes pratiques).</p>
          </div>
          <div class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Montée de version & refactoring</h3>
            <p class="text-gray-600">Passage Symfony 4/5/6 vers 7, PHP 8.x, découplage progressif et réduction de la dette technique.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Pourquoi externaliser la maintenance ?</h2>
        <p class="text-gray-700 mb-4">Sans ressource interne dédiée, une app Symfony peut accumuler du retard (versions, sécurité). Un freelance permet de garder l’application stable et évolutive sans recruter à temps plein.</p>
      </div>
    </section>
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Disponibilité</h2>
        <p class="text-gray-700">Basé à Dax (Landes), missions remote France. Maintenance au forfait (heures/mois) ou à la demande. Devis sur mesure.</p>
      </div>
    </section>
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">Autres expertises</h2>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/developpeur-web-dax" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Développeur web Dax</NuxtLink>
          <NuxtLink to="/freelance-symfony-landes" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Freelance Symfony Landes</NuxtLink>
          <NuxtLink to="/projet-prestago" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Étude de cas Prestago</NuxtLink>
          <NuxtLink to="/#contact" class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">Contact</NuxtLink>
        </div>
      </div>
    </section>
  </AcquisitionPageFrame>
</template>

<script setup lang="ts">
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'
import { useAcquisitionSeo } from '~/composables/useAcquisitionSeo'

const { baseUrl, personSchema } = useAcquisitionSeo()
const pageUrl = `${baseUrl}/maintenance-application-symfony`

const seo = {
  h1: 'Maintenance application Symfony – Correctifs, évolutions, montée de version',
  heroSecondary: {
    kicker: 'Maintenance & évolutions • Symfony',
    badges: ['Réponse sous 24h', 'Dax & remote France', 'Devis gratuit']
  },
  intro: [
    'Vous avez une <strong>application Symfony</strong> à maintenir (correctifs, évolutions, montée de version) et pas de développeur en interne ? Je prends en charge la <strong>maintenance d’applications Symfony</strong> en remote : bugs, évolutions, mises à jour et sécurisation.',
    'Basé à Dax (Landes), j’interviens pour des PME et startups partout en France. Forfait heures ou interventions ponctuelles, selon votre besoin.'
  ],
  faqItems: [
    { question: 'Proposez-vous un forfait maintenance ?', answer: 'Oui. On peut définir un volume d’heures par mois (correctifs, petites évolutions, veille technique) pour un budget prévisible.' },
    { question: 'Intervenez-vous sur du Symfony ancien ?', answer: 'Oui. Je peux assurer la maintenance sur Symfony 4, 5 ou 6 et proposer un plan de montée vers Symfony 7 si pertinent.' },
    { question: 'Comment se passe la prise en main du code ?', answer: 'Audit du repo, documentation existante et échange avec l’équipe si besoin. Je m’adapte à votre contexte (Git, env, déploiement).' }
  ]
}

useLocalSeoHead({
  url: pageUrl,
  title: 'Maintenance application Symfony – Correctifs, évolutions',
  description: 'Maintenance d\'applications Symfony. Correctifs, évolutions, montée de version. Freelance basé à Dax, remote France. Devis gratuit.',
  canonical: pageUrl,
  breadcrumbItems: [
    { position: 1, name: 'Accueil', item: baseUrl + '/' },
    { position: 2, name: 'Maintenance application Symfony', item: pageUrl }
  ],
  faqItems: seo.faqItems,
  personOrServiceSchema: personSchema({
    jobTitle: 'Freelance maintenance Symfony',
    description: 'Maintenance d\'applications Symfony. Correctifs, évolutions, montée de version. Dax, remote France.',
    pageUrl,
    knowsAbout: ['Symfony', 'Maintenance', 'PHP', 'Refactoring', 'Montée de version']
  })
})
</script>
