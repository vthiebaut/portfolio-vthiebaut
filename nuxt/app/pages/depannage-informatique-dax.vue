<template>
  <main class="font-sans text-gray-900 bg-gray-50 min-h-screen">
    <HeroSecondary
      title="Dépannage informatique à Dax – Réparation PC & Montage"
      subtitle="Réparation PC, montage, optimisation et cours. Intervention rapide, devis gratuit."
      kicker="Dépannage à domicile • Dax & alentours"
      :primary-cta-label="`Appeler maintenant – ${phoneDisplay}`"
      :primary-cta-href="`tel:${phone}`"
      secondary-cta-label="Me contacter"
      secondary-cta-href="/#contact"
      :badges="['Réponse sous 24h', 'Dax + 30 km', 'Devis gratuit']"
      note="Intervention à domicile sur Dax et dans un rayon de 30 km."
    />

    <!-- Section Services -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">🛠️ Services de dépannage informatique à Dax</h2>
        <p class="text-gray-600 mb-8">
          Spécialisé dans le <strong>dépannage informatique à Dax</strong>, je propose des services complets de réparation PC, montage et cours informatique pour particuliers et professionnels dans les Landes.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Dépannage informatique -->
          <article class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">🖥️ Dépannage informatique à Dax</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Nettoyage & optimisation (PC lent)</li>
              <li>Suppression de virus / adwares</li>
              <li>Réinstallation de Windows (sauvegarde en option)</li>
              <li>Passage disque dur → SSD + clonage</li>
              <li>Drivers, périphériques, sauvegardes & récup. de données*</li>
            </ul>
            <p class="mt-2 text-xs text-gray-500">*si récupérable sans labo spécialisé</p>
          </article>

          <!-- Montage & upgrades -->
          <article class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">🧩 Montage PC & upgrades à Dax</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Conseil configuration selon budget</li>
              <li>Montage complet & gestion des câbles</li>
              <li>Ajout / remplacement : SSD, RAM, GPU, alim</li>
              <li>MAJ BIOS/UEFI, drivers, tests & bench rapides</li>
              <li>Installation Windows + mise en service</li>
            </ul>
          </article>

          <!-- Cours & accompagnement -->
          <article class="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">🎓 Cours informatique à Dax</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Bureautique : Windows/macOS, fichiers, sécurité</li>
              <li>Office / LibreOffice / Google Docs & Drive</li>
              <li>Dev : HTML/CSS/JS, Vue 3, React Native, Symfony</li>
              <li>Git/GitHub, notions Docker & bonnes pratiques</li>
              <li>Aide projet, mentoring, mise à niveau</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Zone d'intervention -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-900">📍 Zone d'intervention</h2>
          <p class="text-center text-gray-700 mb-4 text-lg">
            Je me déplace dans <strong>Dax et les environs</strong> pour le <strong>dépannage informatique à domicile</strong>. 
            Spécialisé dans le <strong>dépannage informatique à Dax</strong>, j'interviens rapidement pour tous vos besoins en réparation PC.
          </p>
          <p class="text-center text-gray-600 mb-4">
            Principales villes desservies pour le <strong>dépannage informatique</strong> : <strong>Dax, Saint-Paul-lès-Dax, Saint-Vincent-de-Paul, Yzosse, Mées, Narrosse</strong> et dans un rayon de <strong>30km autour de Dax</strong>.
          </p>
          <p class="text-center text-sm text-gray-500">
            <strong>Dépannage informatique Dax</strong> : intervention rapide sur rendez-vous. Devis gratuit et sans engagement pour tous vos besoins en réparation informatique.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">❓ Questions fréquentes – Dépannage informatique Dax</h2>
        <div class="space-y-4">
          <details class="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
            <summary class="font-semibold cursor-pointer text-gray-900">Quels sont les tarifs pour un dépannage informatique à Dax ?</summary>
            <p class="mt-2 text-gray-600">Les tarifs varient selon la nature de l'intervention. Je propose un devis gratuit et sans engagement avant toute intervention. Contactez-moi pour discuter de vos besoins spécifiques.</p>
          </details>
          <details class="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
            <summary class="font-semibold cursor-pointer text-gray-900">Intervenez-vous à domicile pour le dépannage informatique à Dax ?</summary>
            <p class="mt-2 text-gray-600">Oui, je me déplace à domicile dans Dax et dans un rayon de 30 km autour de Dax (Saint-Paul-lès-Dax, Saint-Vincent-de-Paul, Yzosse, Mées, Narrosse).</p>
          </details>
          <details class="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
            <summary class="font-semibold cursor-pointer text-gray-900">Combien de temps faut-il pour un dépannage informatique à Dax ?</summary>
            <p class="mt-2 text-gray-600">La plupart des interventions sont réalisées en 1 à 2 heures. Pour les cas plus complexes (récupération de données, montage PC), cela peut prendre plus de temps.</p>
          </details>
          <details class="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
            <summary class="font-semibold cursor-pointer text-gray-900">Proposez-vous des cours d'informatique à Dax ?</summary>
            <p class="mt-2 text-gray-600">Oui, je propose des cours à Dax : bureautique (Windows, Office), développement web (HTML/CSS/JS, Vue.js, Symfony), et accompagnement personnalisé selon vos besoins.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Pourquoi me choisir -->
    <section class="py-12 px-4 md:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">✨ Pourquoi choisir mes services de dépannage informatique à Dax ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">⚡ Intervention rapide</h3>
            <p class="text-gray-600">Réponse sous 24 h et intervention rapide dans Dax et les environs.</p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">💼 Expérience professionnelle</h3>
            <p class="text-gray-600">Plus de 10 ans d'expérience en développement et en dépannage informatique. Expertise reconnue dans les Landes.</p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">💰 Tarifs transparents</h3>
            <p class="text-gray-600">Devis gratuit et tarifs clairs avant toute intervention.</p>
          </div>
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-xl font-semibold mb-2 text-gray-900">🔧 Expertise technique</h3>
            <p class="text-gray-600">Maîtrise des dernières technologies et méthodes de dépannage. Solutions adaptées à vos besoins.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="bg-white py-12 px-4 md:px-8 border-t border-gray-200">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">📞 Contactez-moi pour un dépannage</h2>
        <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
          <p class="text-gray-600 mb-4">
            Besoin d'un <strong>dépannage informatique à Dax</strong> ? N'hésitez pas à me contacter pour une intervention rapide et professionnelle.
          </p>
          <div class="flex flex-wrap items-center gap-4 text-gray-700">
            <span>📧 <a href="mailto:contact@vthiebaut.fr" class="hover:text-[#fe007b]">contact@vthiebaut.fr</a></span>
            <span>📞 <a href="tel:+33626246341" class="hover:text-[#fe007b]">06 26 24 63 41</a></span>
            <span class="text-sm">📍 Dax, Landes (40)</span>
          </div>
          <NuxtLink
            to="/#contact"
            class="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
          >
            Voir le formulaire de contact
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Bouton sticky mobile -->
    <a
      :href="`tel:${phone}`"
      class="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-xl z-50 block md:hidden hover:bg-emerald-600"
    >
      Appeler – {{ phoneDisplay }}
    </a>
  </main>
</template>

<script setup lang="ts">
const phone = '+33626246341'
const phoneDisplay = '06 26 24 63 41'

// SEO Meta tags - 100% optimisé pour "dépannage informatique Dax"
useSeoMeta({
  title: 'Dépannage Informatique Dax - Réparation PC, Montage, Cours | Valentin Thiebaut',
  description: 'Dépannage informatique professionnel à Dax et dans les Landes (40). Réparation PC, montage, cours informatique. Intervention rapide à domicile dans un rayon de 30km autour de Dax. Devis gratuit.',
  keywords: 'dépannage informatique Dax, réparation PC Dax, informatique Dax, réparation ordinateur Dax, montage PC Dax, cours informatique Dax, assistance informatique Dax, dépannage informatique Landes, réparation ordinateur Landes, technicien informatique Dax',
  ogTitle: 'Dépannage Informatique Dax - Réparation PC & Montage | Valentin Thiebaut',
  ogDescription: 'Services professionnels de dépannage informatique à Dax. Réparation PC, montage, cours. Intervention rapide à domicile.',
  ogType: 'website',
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
})

// Structured Data JSON-LD optimisé pour LocalBusiness (SEO local)
const structuredData = computed(() => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Valentin Thiebaut - Dépannage Informatique Dax",
    "image": "https://portfolio.vthiebaut.fr/images/cv-vthiebaut.png",
    "@id": "https://portfolio.vthiebaut.fr/depannage-informatique-dax",
    "url": "https://portfolio.vthiebaut.fr/depannage-informatique-dax",
    "telephone": "+33626246341",
    "email": "contact@vthiebaut.fr",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dax",
      "addressLocality": "Dax",
      "postalCode": "40100",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7079,
      "longitude": 1.0536
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/valentin-thiebaut",
      "https://github.com/vthiebaut"
    ],
    "description": "Dépannage informatique professionnel à Dax et dans les Landes. Réparation PC, montage, cours informatique. Intervention rapide à domicile dans un rayon de 30km autour de Dax.",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.7079,
        "longitude": 1.0536
      },
      "geoRadius": {
        "@type": "Distance",
        "value": "30",
        "unitCode": "KMT"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": ["Dax", "Saint-Paul-lès-Dax", "Saint-Vincent-de-Paul", "Yzosse", "Mées", "Narrosse"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de dépannage informatique à Dax",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dépannage informatique Dax",
            "description": "Réparation PC, nettoyage, optimisation, suppression de virus, récupération de données"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Montage PC Dax",
            "description": "Montage et configuration de PC sur mesure, upgrades, installation Windows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cours informatique Dax",
            "description": "Formation bureautique et développement web, accompagnement personnalisé"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    }
  })
})

// Structured Data FAQ pour SEO
const faqStructuredData = computed(() => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels sont les tarifs pour un dépannage informatique à Dax ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les tarifs varient selon la nature de l'intervention. Je propose un devis gratuit et sans engagement avant toute intervention. Contactez-moi pour discuter de vos besoins spécifiques."
        }
      },
      {
        "@type": "Question",
        "name": "Intervenez-vous à domicile pour le dépannage informatique à Dax ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, je me déplace à domicile dans Dax et dans un rayon de 30km autour de Dax (Saint-Paul-lès-Dax, Saint-Vincent-de-Paul, Yzosse, Mées, Narrosse)."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps faut-il pour un dépannage informatique à Dax ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La plupart des interventions de dépannage informatique à Dax sont réalisées en 1 à 2 heures. Pour les cas plus complexes (récupération de données, montage PC), cela peut prendre plus de temps."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous des cours d'informatique à Dax ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, je propose des cours d'informatique à Dax : bureautique (Windows, Office), développement web (HTML/CSS/JS, Vue.js, Symfony), et accompagnement personnalisé selon vos besoins."
        }
      }
    ]
  })
})

// Injection du structured data dans le head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: structuredData.value
    },
    {
      type: 'application/ld+json',
      children: faqStructuredData.value
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://portfolio.vthiebaut.fr/depannage-informatique-dax'
    }
  ]
})
</script>

