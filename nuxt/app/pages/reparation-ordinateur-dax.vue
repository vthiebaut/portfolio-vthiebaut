<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <HeroSecondary
      title="Réparation ordinateur à Dax – PC portable et fixe"
      subtitle="Diagnostic complet, remplacement de pièces, sauvegarde de données et remise en service. J'interviens à domicile dans le Grand Dax et les Landes."
      kicker="Réparation PC • Dax & Saint-Paul-lès-Dax"
      :primary-cta-label="`Appeler maintenant – ${phoneDisplay}`"
      :primary-cta-href="`tel:${phone}`"
      secondary-cta-label="Demander un devis réparation"
      secondary-cta-href="/#contact"
      :badges="['Réponse sous 24h', 'Dax + 30 km', 'Devis gratuit']"
      note="Intervention à domicile sur Dax, Saint-Paul-lès-Dax et communes voisines."
    />



    <!-- Intervention rapide -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Intervention rapide à Dax et Saint-Paul-lès-Dax
        </h2>
        <p class="text-gray-700 mb-4">
          Quand un ordinateur tombe en panne à Dax, on a rarement le temps d’attendre plusieurs
          semaines. Que ce soit pour le télétravail, la gestion de vos démarches administratives
          ou simplement pour rester en contact avec vos proches, je sais à quel point un PC
          fonctionnel est important.
        </p>
        <p class="text-gray-600 mb-4">
          J’interviens principalement sur Dax, Saint-Paul-lès-Dax et les communes alentour pour
          diagnostiquer la panne et vous proposer la meilleure solution&nbsp;: réparation sur place,
          récupération en atelier ou accompagnement pour un éventuel remplacement si nécessaire.
        </p>
        <p class="text-gray-600">
          Vous échangez directement avec la personne qui va réparer votre ordinateur, sans centre
          d’appel ni intermédiaire. L’objectif&nbsp;: une réparation claire, efficace et au bon prix.
        </p>
      </div>
    </section>

    <!-- Pourquoi un technicien local -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 text-gray-900">
          Pourquoi faire réparer votre ordinateur par un technicien local&nbsp;?
        </h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Un interlocuteur unique à Dax</h3>
            <p class="text-gray-600">
              Vous discutez directement avec le technicien qui s’occupe de votre PC.
              Nous faisons ensemble le point sur la panne, vos besoins et votre budget,
              sans survente ni prestations inutiles.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Réparer plutôt que remplacer</h3>
            <p class="text-gray-600">
              De nombreux ordinateurs considérés comme «&nbsp;bons pour la casse&nbsp;» peuvent encore
              être réparés à Dax pour un budget raisonnable&nbsp;: changement de disque dur, ajout
              de mémoire, nettoyage interne, changement d’alimentation ou de ventilateur.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Protection de vos données</h3>
            <p class="text-gray-600">
              Avant toute intervention lourde, nous parlons de vos données importantes
              (photos, documents, comptabilité…). Lorsque c’est possible, une sauvegarde
              est réalisée avant les opérations risquées.
            </p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="font-semibold mb-2 text-gray-900">Conseils adaptés aux Landes</h3>
            <p class="text-gray-600">
              Installé dans les Landes, je connais les contraintes locales
              (connexion internet, opérateurs, usage familial ou professionnel)
              et je vous recommande des solutions adaptées à votre quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services détaillés -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          Services de réparation d’ordinateur à Dax
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Diagnostic complet du PC</h3>
            <p class="text-gray-600">
              Analyse logicielle et matérielle pour identifier l’origine des lenteurs,
              des écrans bleus, des coupures intempestives ou des blocages au démarrage.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Réparation matériel</h3>
            <p class="text-gray-600">
              Remplacement de disque dur, SSD, mémoire vive, alimentation, ventilateur,
              carte réseau… selon la disponibilité et la compatibilité avec votre machine.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Réparation logicielle</h3>
            <p class="text-gray-600">
              Réinstallation propre de Windows, correction des erreurs système,
              suppression de programmes indésirables et optimisation générale.
            </p>
          </article>
          <article class="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 class="font-semibold mb-2">Sauvegarde et récupération</h3>
            <p class="text-gray-600">
              Mise en place de sauvegardes simples à utiliser et tentative de récupération
              des données lorsque le disque le permet, sans passer par un laboratoire coûteux.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Zone d’intervention -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Zone d’intervention pour la réparation d’ordinateur
        </h2>
        <p class="text-gray-600 mb-4">
          J’interviens pour la <strong>réparation d’ordinateur à Dax</strong> et dans plusieurs
          communes voisines des Landes. Si vous habitez à proximité du Grand Dax, il y a de
          grandes chances que je puisse me déplacer chez vous.
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
        <p class="text-gray-500 text-sm mt-3">
          En dehors de cette zone, certaines interventions peuvent être réalisées à distance
          (diagnostic, optimisation, conseils d’achat).
        </p>
      </div>
    </section>

    <!-- Tarifs / devis -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Tarifs réparation ordinateur à Dax
        </h2>
        <p class="text-gray-600 mb-4">
          Le coût d’une réparation dépend du type de panne, des pièces à remplacer et du temps
          nécessaire. Pour rester transparent, un tarif vous est annoncé avant toute intervention.
        </p>
        <ul class="list-disc list-inside text-gray-600 space-y-1">
          <li>Diagnostic et conseils avant réparation.</li>
          <li>Remplacement des pièces après validation du devis.</li>
          <li>Facturation claire, sans frais cachés.</li>
        </ul>
        <p class="text-gray-700 mt-4">
          Le plus simple est de m’appeler pour décrire la panne&nbsp;: je vous indique
          immédiatement si une réparation est envisageable et dans quels délais.
        </p>
      </div>
    </section>

    <!-- Avis (placeholder) -->
    <section class="py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">
          Avis de clients à Dax et dans les Landes
        </h2>
        <p class="text-gray-600 mb-4">
          Les avis clients seront prochainement affichés ici afin de vous aider à choisir
          un réparateur d’ordinateur de confiance à Dax, Saint-Paul-lès-Dax et dans les Landes.
        </p>
        <p class="text-gray-500 text-sm">
          En attendant, n’hésitez pas à me contacter pour poser vos questions ou expliquer
          votre problème avant toute intervention.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white border-t border-gray-200 py-12 px-4 md:px-8">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">
          FAQ – Réparation d’ordinateur à Dax
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
          Besoin de faire réparer votre ordinateur à Dax&nbsp;?
        </h2>
        <p class="text-gray-600 mb-6">
          Ne laissez pas une panne informatique vous bloquer plus longtemps. Appelez-moi ou
          envoyez-moi un message pour planifier une réparation rapide à Dax ou dans les communes
          voisines.
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
            Envoyer une demande de réparation
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
import { useLocalSeoHead } from '~/composables/useLocalSeoHead'

const pageUrl = 'https://portfolio.vthiebaut.fr/reparation-ordinateur-dax'
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

const pageTitle = 'Réparation ordinateur Dax – PC portable et fixe'
const pageDescription =
  'Réparation d’ordinateur à Dax et Saint-Paul-lès-Dax. Diagnostic, remplacement de pièces, réinstallation et sauvegarde de données pour PC portable et fixe dans les Landes.'

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
    question: 'Quel type de panne pouvez-vous réparer à Dax ?',
    answer:
      'Je prends en charge la plupart des pannes courantes : lenteurs, problèmes de démarrage, erreurs système, alimentation, disque dur en fin de vie, surchauffe, etc.'
  },
  {
    question: 'Intervenez-vous à domicile pour réparer les ordinateurs ?',
    answer:
      'Oui, je peux intervenir à domicile sur Dax, Saint-Paul-lès-Dax et plusieurs communes voisines pour diagnostiquer et réparer votre PC.'
  },
  {
    question: 'Que se passe-t-il si l’ordinateur n’est pas réparable ?',
    answer:
      'Si la réparation n’est pas raisonnable ou trop coûteuse, je vous le dis clairement et je peux vous conseiller pour un éventuel remplacement et transfert de vos données.'
  },
  {
    question: 'Proposez-vous un devis avant la réparation ?',
    answer:
      'Oui, un devis vous est présenté avant toute intervention majeure. Rien n’est fait sans votre accord.'
  }
]

useLocalSeoHead({
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  twitterCard: 'summary',
  breadcrumbItems: [
    {
      position: 1,
      name: 'Accueil',
      item: 'https://portfolio.vthiebaut.fr/'
    },
    {
      position: 2,
      name: 'Réparation ordinateur Dax',
      item: pageUrl
    }
  ],
  faqItems,
  canonical: pageUrl
})
</script>

