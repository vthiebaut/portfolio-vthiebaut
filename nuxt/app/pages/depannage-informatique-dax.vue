<template>
  <div class="font-sans text-gray-900 bg-gray-100 scroll-smooth">
    <!-- Hero Section - Optimisé SEO pour dépannage informatique Dax -->
    <header class="relative min-h-[60vh] flex flex-col items-center justify-center text-center py-20 px-4 bg-cover bg-center bg-gray-500">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/70 pointer-events-none"></div>
      <!-- Contenu -->
      <div class="relative z-10">
        <h1 class="text-white text-4xl md:text-6xl font-extrabold mb-4">
          Dépannage Informatique Dax - Réparation PC & Montage
        </h1>
        <p class="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-6">
          Services de <strong>dépannage informatique à Dax</strong> : réparation PC, montage, cours et assistance informatique dans les Landes (40)
        </p>
        <p class="text-white text-lg max-w-2xl mx-auto mb-8">
          <strong>Dépannage informatique Dax</strong> : services professionnels rapides et fiables pour particuliers et professionnels. Intervention à domicile dans un rayon de 30km autour de Dax.
        </p>
        <button
          @click="goTo('contact')"
          class="inline-block px-8 py-3 bg-white rounded-lg shadow-lg transition pointer-events-auto text-black hover:bg-[#fe007b] hover:text-white"
        >
          Me contacter
        </button>
      </div>
    </header>

    <!-- Section Services -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">🛠️ Services de dépannage informatique à Dax</h2>
        <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Spécialisé dans le <strong>dépannage informatique à Dax</strong>, je propose des services complets de réparation PC, montage et cours informatique pour particuliers et professionnels dans les Landes.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Dépannage informatique -->
          <article class="bg-gray-50 p-6 rounded-xl border border-gray-200 transition duration-300 hover:scale-[1.03] hover:shadow-xl">
            <h3 class="text-xl font-semibold mb-2">🖥️ Dépannage informatique à Dax</h3>
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
          <article class="bg-gray-50 p-6 rounded-xl border border-gray-200 transition duration-300 hover:scale-[1.03] hover:shadow-xl">
            <h3 class="text-xl font-semibold mb-2">🧩 Montage PC & upgrades à Dax</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Conseil configuration selon budget</li>
              <li>Montage complet & gestion des câbles</li>
              <li>Ajout / remplacement : SSD, RAM, GPU, alim</li>
              <li>MAJ BIOS/UEFI, drivers, tests & bench rapides</li>
              <li>Installation Windows + mise en service</li>
            </ul>
          </article>

          <!-- Cours & accompagnement -->
          <article class="bg-gray-50 p-6 rounded-xl border border-gray-200 transition duration-300 hover:scale-[1.03] hover:shadow-xl">
            <h3 class="text-xl font-semibold mb-2">🎓 Cours informatique à Dax</h3>
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
    <section class="py-20 px-4 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
          <h2 class="text-3xl font-semibold mb-4 text-center">📍 Zone d'intervention</h2>
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

    <!-- FAQ Section - Optimisé SEO -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">❓ Questions fréquentes - Dépannage Informatique Dax</h2>
        <div class="space-y-6">
          <details class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <summary class="font-semibold text-lg cursor-pointer">Quels sont les tarifs pour un dépannage informatique à Dax ?</summary>
            <p class="mt-3 text-gray-700">Les tarifs varient selon la nature de l'intervention. Je propose un devis gratuit et sans engagement avant toute intervention. Contactez-moi pour discuter de vos besoins spécifiques.</p>
          </details>
          <details class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <summary class="font-semibold text-lg cursor-pointer">Intervenez-vous à domicile pour le dépannage informatique à Dax ?</summary>
            <p class="mt-3 text-gray-700">Oui, je me déplace à domicile dans Dax et dans un rayon de 30km autour de Dax (Saint-Paul-lès-Dax, Saint-Vincent-de-Paul, Yzosse, Mées, Narrosse).</p>
          </details>
          <details class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <summary class="font-semibold text-lg cursor-pointer">Combien de temps faut-il pour un dépannage informatique à Dax ?</summary>
            <p class="mt-3 text-gray-700">La plupart des interventions de dépannage informatique à Dax sont réalisées en 1 à 2 heures. Pour les cas plus complexes (récupération de données, montage PC), cela peut prendre plus de temps.</p>
          </details>
          <details class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <summary class="font-semibold text-lg cursor-pointer">Proposez-vous des cours d'informatique à Dax ?</summary>
            <p class="mt-3 text-gray-700">Oui, je propose des cours d'informatique à Dax : bureautique (Windows, Office), développement web (HTML/CSS/JS, Vue.js, Symfony), et accompagnement personnalisé selon vos besoins.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Pourquoi me choisir -->
    <section class="py-20 px-4 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">✨ Pourquoi choisir mes services de dépannage informatique à Dax ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold mb-3">⚡ Intervention rapide</h3>
            <p class="text-gray-700">Pour votre <strong>dépannage informatique à Dax</strong>, réponse sous 24h et intervention rapide dans Dax et les environs.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold mb-3">💼 Expérience professionnelle</h3>
            <p class="text-gray-700">Plus de 10 ans d'expérience en développement et en <strong>dépannage informatique à Dax</strong>. Expertise reconnue dans les Landes.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold mb-3">💰 Tarifs transparents</h3>
            <p class="text-gray-700">Pour votre <strong>dépannage informatique Dax</strong>, devis gratuit et tarifs clairs avant toute intervention.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold mb-3">🔧 Expertise technique</h3>
            <p class="text-gray-700">Maîtrise des dernières technologies et méthodes de <strong>dépannage informatique</strong>. Solutions adaptées à vos besoins.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 px-4 bg-gray-100">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">📞 Contactez-moi pour un dépannage</h2>
        <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
          <div class="text-center space-y-4 mb-8">
            <p class="text-lg text-gray-700">
              Besoin d'un <strong>dépannage informatique à Dax</strong> ? N'hésitez pas à me contacter pour une intervention rapide et professionnelle !
            </p>
            <div class="flex flex-col items-center gap-2 text-gray-600">
              <p>📧 <a href="mailto:contact@vthiebaut.fr" class="hover:text-[#fe007b]">contact@vthiebaut.fr</a></p>
              <p>📞 <a href="tel:+33626246341" class="hover:text-[#fe007b]">06 26 24 63 41</a></p>
              <p class="text-sm">📍 Dax, Landes (40)</p>
            </div>
          </div>
          <NuxtLink 
            to="/#contact" 
            class="block text-center bg-black text-white px-8 py-3 rounded-lg hover:bg-[#fe007b] transition"
          >
            Voir le formulaire de contact
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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

const goTo = (anchor: string) => {
  if (process.client) {
    if (anchor === 'contact') {
      // Rediriger vers la page d'accueil avec l'ancre contact
      window.location.href = '/#contact'
    } else {
      const el = document.getElementById(anchor.replace('#', ''))
      if (el) {
        const yOffset = -100
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }
}
</script>

