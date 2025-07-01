<template>
  <div class="tw:font-sans tw:text-gray-900 tw:bg-gray-100 scroll-smooth">
    <div id="preloader" class="tw:fixed tw:inset-0 tw:bg-black tw:flex tw:items-center tw:justify-center tw:z-[9999] tw:transition-opacity tw:duration-700">
      <span class="tw:text-white tw:text-xl tw:animate-pulse">Chargement...</span>
    </div>
    <!-- Hero -->
    <header id="accueil" class="tw:relative tw:min-h-screen tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:py-32 tw:px-4 tw:bg-cover tw:bg-center tw:bg-gray-500">
      <!-- Particules -->
      <div id="particles-js" class="particles-container"></div>
      <!-- Overlay -->
      <div class="tw:absolute tw:inset-0 tw:bg-black/70 tw:pointer-events-none z-1"></div>
      <!-- Contenu -->
      <div class="tw:relative tw:z-10 tw:pointer-events-none">
        <h1 class="tw:text-white tw:text-5xl md:tw:text-7xl tw:font-extrabold tw:mb-4">Valentin Thiebaut</h1>
        <p class="tw:text-white tw:text-xl md:tw:text-2xl tw:max-w-2xl tw:mx-auto">Développeur full-stack Web & Mobile — Vue 3 · Symfony 7 · React Native</p>
        <!-- Bouton scroll smooth -->
        <button
          @click="goTo('contact')"
          class="tw:inline-block tw:mt-8 tw:px-8 tw:py-3 tw:bg-white tw:rounded-lg tw:shadow-lg tw:no-underline tw:transition tw:pointer-events-auto tw:text-black hover:tw:bg-[#fe007b] hover:tw:text-white"
        >
          Me contacter
        </button>
      </div>
    </header>

    <section id="a-propos" class="tw:py-20 tw:px-4 tw:bg-white">
      <div class="tw:max-w-6xl tw:mx-auto">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-12">👨‍💻 À propos de moi</h2>

        <div class="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-8 tw:items-center">
          <!-- Partie gauche : texte -->
          <div class="tw:text-lg tw:text-gray-700 tw:leading-relaxed tw:space-y-4">
            <p>
              Passionné par le développement depuis plus de 10 ans, j’ai fait de la création web et mobile mon quotidien.
              Curieux, autonome et rigoureux, je conçois des applications modernes et efficaces, toujours pensées pour les utilisateurs.
            </p>
            <p>
              Je maîtrise les technologies VueJS, Symfony, React Native et bien d’autres, avec un fort attrait pour la performance,
              l’expérience utilisateur et la qualité du code.
            </p>
            <p>
              Que ce soit pour développer une application from scratch, moderniser un outil existant ou accompagner une équipe, 
              je suis toujours prêt à relever de nouveaux défis.
            </p>
          </div>

          <!-- Partie droite : preview + bouton -->
          <div class="tw:flex tw:flex-col tw:lg:items-end tw:justify-center">
            <div class="tw:flex tw:flex-col tw:items-center tw:gap-4">
              <img
                src="@/assets/cv-vthiebaut.png"
                alt="Aperçu du CV"
                class="tw:w-[280px] tw:rounded-xl tw:shadow-lg"
              />
              <a
                href="/CV_Valentin_THIEBAUT.pdf"
                download
                style="text-decoration: none;"
                class="tw:bg-black tw:!text-white tw:px-6 tw:py-2 tw:rounded tw:hover:bg-white tw:hover:!text-black tw:!border tw:hover:!border-black tw:transition"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="services" class="tw:py-20 tw:px-4 tw:bg-gray-100">
      <div class="tw:max-w-6xl tw:mx-auto">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-12">🛠️ Services proposés</h2>

        <div class="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 lg:tw:grid-cols-3 tw:gap-8">
          <!-- Service 1 -->
          <div class="tw:bg-gray-50 tw:p-6 tw:rounded-xl tw:transition tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:flex tw:flex-col tw:gap-3 tw:border tw:border-gray-200">

            <h3 class="tw:text-xl tw:font-semibold tw:text-gray-800">📱 Développement mobile</h3>
            <p class="tw:text-gray-600">
              Création d'applications mobiles hybrides (iOS & Android) avec React Native ou Capacitor. Design moderne, offline, géolocalisation, synchronisation cloud.
            </p>
          </div>

          <!-- Service 2 -->
          <div class="tw:bg-gray-50 tw:p-6 tw:rounded-xl tw:transition tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:flex tw:flex-col tw:gap-3 tw:border tw:border-gray-200">
            <h3 class="tw:text-xl tw:font-semibold tw:text-gray-800">💻 Sites vitrines</h3>
            <p class="tw:text-gray-600">
              Création de sites vitrines professionnels, adaptés à votre image. Avec ou sans back-office, entièrement responsive, et optimisés SEO.
            </p>
          </div>

          <!-- Service 3 -->
          <div class="tw:bg-gray-50 tw:p-6 tw:rounded-xl tw:transition tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:flex tw:flex-col tw:gap-3 tw:border tw:border-gray-200">
            <h3 class="tw:text-xl tw:font-semibold tw:text-gray-800">🖥️ Développement web</h3>
            <p class="tw:text-gray-600">
              Conception d’applications web sur mesure avec Vue.js et Symfony. Interfaces dynamiques, gestion de base de données, API sécurisées.
            </p>
          </div>

          <!-- Service 4 -->
          <div class="tw:bg-gray-50 tw:p-6 tw:rounded-xl tw:transition tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:flex tw:flex-col tw:gap-3 tw:border tw:border-gray-200">
            <h3 class="tw:text-xl tw:font-semibold tw:text-gray-800">📐 UI / UX responsive</h3>
            <p class="tw:text-gray-600">
              Création d’interfaces modernes, intuitives et entièrement responsives. Optimisées pour tous les appareils et tous les usages.
            </p>
          </div>

          <!-- Service 5 -->
          <div class="tw:bg-gray-50 tw:p-6 tw:rounded-xl tw:transition tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:flex tw:flex-col tw:gap-3 tw:border tw:border-gray-200">
            <h3 class="tw:text-xl tw:font-semibold tw:text-gray-800">⚙️ Back-office / Admin</h3>
            <p class="tw:text-gray-600">
              Mise en place de tableaux de bord sécurisés pour gérer vos données, utilisateurs, contenus ou statistiques avec performance et simplicité.
            </p>
          </div>

          <!-- Service 6 -->
          <div class="tw:bg-gray-50 tw:p-6 tw:rounded-xl tw:transition tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:flex tw:flex-col tw:gap-3 tw:border tw:border-gray-200">
            <h3 class="tw:text-xl tw:font-semibold tw:text-gray-800">🚀 Optimisation & support</h3>
            <p class="tw:text-gray-600">
              Amélioration de sites existants, refontes techniques, optimisation des performances, support technique et évolutions fonctionnelles.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projets" class="tw:py-20 tw:px-4 tw:bg-white">
      <div class="tw:max-w-6xl tw:mx-auto">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-2">Portfolio</h2>
        <p class="tw:flex tw:justify-center">Présentation de mes derniers projets</p>

        <div class="tw:flex tw:flex-wrap tw:justify-center tw:gap-6">
          <div
            v-for="(p, i) in projects"
            :key="p.title"
            class="card tw:w-full tw:lg:w-[calc(50%-0.75rem)] tw:h-[600px]"
          >
            <div class="card-inner tw:w-full tw:h-full tw:shadow-xl tw:flex tw:items-center tw:justify-center">
              <!-- Face avant -->
              <div class="card-front tw:flex tw:flex-col tw:items-center tw:justify-center tw:gap-6 tw:bg-gray-50 tw:rounded-lg tw:w-full tw:h-full tw:p-6 tw:border tw:border-gray-200">
                <template v-if="p.isMobileScreen">
                  <figure class="tw:border tw:border-gray-300 tw:rounded-2xl tw:shadow-md tw:overflow-hidden tw:w-[200px] tw:h-[440px]">
                    <img 
                      :src="p.images[currentIndexes[i]]" 
                      :alt="`Capture d’écran du projet ${p.title}`"
                      loading="lazy"
                      class="tw:w-full tw:h-full tw:object-contain tw:transition-all tw:duration-500" />
                  </figure>
                </template>
                <template v-else>
                  <figure class="tw:overflow-hidden tw:rounded-lg tw:shadow-md tw:w-full">
                    <img 
                      :src="p.images[currentIndexes[i]]" 
                      :alt="`Capture d’écran du projet ${p.title}`"
                      loading="lazy"
                      class="tw:w-full tw:h-56 tw:object-cover tw:transition-all tw:duration-500" />
                  </figure>
                </template>

                <div class="tw:text-center tw:space-y-1">
                  <h3 class="tw:text-xl tw:font-bold tw:text-gray-800">{{ p.title }}</h3>
                  <p class="tw:text-sm tw:text-gray-500">{{ p.stack }}</p>
                </div>
              </div>

              <!-- Face arrière -->
              <div
                class="card-back tw:flex tw:flex-col tw:justify-start tw:items-start tw:text-left tw:gap-4 tw:bg-white tw:rounded-lg tw:w-full tw:h-full "
              >
                <!-- Description courte -->
                <p class="tw:text-base tw:font-medium">{{ p.descriptionIntro }}</p>

                <!-- Fonctionnalités (2 colonnes en md+) -->
                <ul class="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 tw:gap-2 tw:text-sm tw:list-disc tw:pl-4">
                  <li v-for="(feature, idx) in p.features" :key="idx">{{ feature }}</li>
                </ul>

                <!-- Conclusion -->
                <p v-if="p.descriptionConclusion" class="tw:text-sm">{{ p.descriptionConclusion }}</p>


                <!-- lien -->
                <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" style="text-decoration: none;"
                  class="tw:inline-block tw:!text-white tw:bg-black tw:px-4 tw:py-2 tw:rounded hover:tw:bg-[#fe007b] tw:transition">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="competences" class="tw:py-20 tw:px-4 tw:bg-gray-100">
      <div class="tw:max-w-4xl tw:mx-auto">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-12">Compétences clés</h2>

        <div class="tw:space-y-6">
          <div v-for="skill in skills" :key="skill.label">
            <div class="tw:flex tw:justify-between tw:mb-1">
              <span class="tw:font-medium">{{ skill.label }}</span>
              <span class="tw:text-sm tw:text-gray-500">{{ skill.level }}%</span>
            </div>
            <div class="tw:w-full tw:bg-gray-200 tw:rounded-full tw:h-3 tw:overflow-hidden">
              <div
                class="tw:h-3 tw:bg-yellow-500 tw:rounded-full tw:transition-all"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours -->
    <section id="parcours" class="tw:py-20 tw:px-4 tw:bg-white">
      <div class="tw:max-w-4xl tw:mx-auto">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-4">🎓 Formation</h2>
        <p class="tw:text-center tw:text-gray-600 tw:mb-12">
          Voici mon parcours depuis mes débuts en développement web.
        </p>

        <div class="tw:relative tw:border-l-4 tw:border-yellow-500 tw:pl-6">
          
          <!-- Master -->
          <div class="tw:mb-12 tw:relative">
            <div class="tw:absolute tw:left-0 tw:top-1 tw:w-12 tw:h-12 tw:rounded-full tw:flex tw:items-center tw:justify-center tw:z-10">
              <img src="@/assets/logogroupecesi.png" alt="CESI" class="tw:w-8 tw:h-8 tw:rounded-full" />
              <div class="tw:absolute tw:inset-0 tw:rounded-full tw:border-4 tw:border-yellow-500 tw:z-20"></div>
            </div>
            <div class="tw:pl-16">
              <h3 class="tw:text-xl tw:font-semibold">2017–2021 — Master Manager en Système d'Informations en Alternance</h3>
              <p class="tw:text-gray-700">Formation en alternance avec le CESI — Châteauroux</p>
            </div>
          </div>

          <!-- BTS SIO -->
          <div class="tw:mb-12 tw:relative">
            <div class="tw:absolute tw:left-0 tw:top-1 tw:w-12 tw:h-12 tw:rounded-full tw:flex tw:items-center tw:justify-center tw:z-10">
              <img src="@/assets/btssio.png" alt="BTS SIO" class="tw:w-8 tw:h-8 tw:rounded-full" />
              <div class="tw:absolute tw:inset-0 tw:rounded-full tw:border-4 tw:border-yellow-500 tw:z-20"></div>
            </div>
            <div class="tw:pl-16">
              <h3 class="tw:text-xl tw:font-semibold">2015–2017 — BTS Services Informatiques aux Organisations</h3>
              <p class="tw:text-gray-700">CCI de l'Indre — Châteauroux</p>
            </div>
          </div>

          <!-- BAC S -->
          <div class="tw:mb-12 tw:relative">
            <div class="tw:absolute tw:left-0 tw:top-1 tw:w-12 tw:h-12 tw:rounded-full tw:flex tw:items-center tw:justify-center tw:z-10">
              <img src="@/assets/lyceemargueritedenavarre.png" alt="BAC S" class="tw:w-8 tw:h-8 tw:rounded-full" />
              <div class="tw:absolute tw:inset-0 tw:rounded-full tw:border-4 tw:border-yellow-500 tw:z-20"></div>
            </div>
            <div class="tw:pl-16">
              <h3 class="tw:text-xl tw:font-semibold">2015 — BAC Scientifique</h3>
              <p class="tw:text-gray-700">Lycée Marguerite de Navarre — Bourges</p>
            </div>
          </div>

          <!-- Passion -->
          <div class="tw:mb-12 tw:relative">
            <div class="tw:absolute tw:left-0 tw:top-1 tw:w-12 tw:h-12 tw:rounded-full tw:bg-yellow-400 tw:text-white tw:flex tw:items-center tw:justify-center tw:text-sm tw:font-bold tw:z-20">
              🚀
            </div>
            <div class="tw:pl-16">
              <h3 class="tw:text-xl tw:font-semibold">Avant 2014 — Passion pour l’informatique</h3>
              <p class="tw:text-gray-700">D’abord passionné par l’informatique et la programmation, je suis parti en filière scientifique afin de m'ouvrir un maximum de porte pour la suite.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="tw:relative tw:py-20 tw:px-4 tw:bg-gray-500 tw:min-h-[600px]">
      <!-- Fond noir semi-transparent -->
      <div class="tw:absolute tw:inset-0 tw:bg-black/70 tw:z-0"></div>

      <!-- Particules éventuelles -->
      <div id="particles-contact" class="particles-container tw:absolute tw:inset-0 tw:opacity-30 pointer-events-none z-0"></div>

      <!-- Contenu principal -->
      <div class="tw:max-w-xl tw:mx-auto tw:relative tw:z-10 tw:text-white tw:rounded-xl tw:p-6 tw:space-y-10 tw:bg-black/70">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center">Me contacter</h2>

        <form @submit.prevent="sendEmail" class="tw:flex tw:flex-col tw:gap-4">
          <input v-model="form.name" required placeholder="Nom / Prénom"
            class="tw:border tw:border-gray-300 tw:p-3 tw:rounded-md" />
          <input v-model="form.email" required type="email" placeholder="Email"
            class="tw:border tw:border-gray-300 tw:p-3 tw:rounded-md" />
          <textarea v-model="form.message" required placeholder="Votre message" rows="5"
            class="tw:border tw:border-gray-300 tw:p-3 tw:rounded-md"></textarea>
          <button type="submit"
            class="tw:bg-white tw:text-black tw:py-3 tw:rounded-md tw:transition hover:tw:bg-[#fe007b] hover:tw:text-white">
            Envoyer
          </button>
          <p v-if="emailSuccess" class="tw:text-green-400 tw:font-semibold tw:mt-2">Message envoyé ✅</p>
          <p v-if="emailError" class="tw:text-red-400 tw:font-semibold tw:mt-2">Erreur d’envoi ❌</p>
        </form>

        <!-- Coordonnées -->
        <div class="tw:text-center tw:space-y-2 tw:text-sm tw:mt-4">
          <p>
            <a href="https://www.linkedin.com/in/valentin-thiebaut" target="_blank" rel="noopener"
              class="tw:underline hover:tw:text-[#fe007b]">🔗 Mon profil LinkedIn</a>
          </p>
          <p>📧 contact@vthiebaut.fr</p>
          <p>📞 06 26 24 63 41</p>
        </div>
      </div>

      <footer class="tw:text-center tw:pt-10 tw:relative tw:z-10">
        <p class="tw:text-white tw:text-lg">&copy; 2025 Valentin Thiebaut — Tous droits réservés</p>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue'
import emailjs from 'emailjs-com'
import capturePrestagoAgenda from '@/assets/capture-ecran-prestago-agenda.jpg'
import cleaneuseByPauline from '@/assets/cleaneuse-by-pauline.png'
import maorieSite from '@/assets/maorie-site.png'
import tiroLogin from '@/assets/tiro-login.png'
import capturePortfolio from '@/assets/portfolio.png'

const particlesConfig = {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 1, random: false },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.6,
      width: 2
    },
    move: {
      enable: true,
      speed: 3.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 300, line_linked: { opacity: 1 } },
      bubble: { distance: 300, size: 50, duration: 2, opacity: 0.8, speed: 3 },
      repulse: { distance: 150, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
}

onMounted(() => {
  window.addEventListener("load", () => {
    const loader = document.getElementById("preloader")
    if (loader) {
      loader.classList.add("tw:opacity-0")
      setTimeout(() => loader.remove(), 700)
    }
  })
  // @ts-ignore
  particlesJS('particles-js', particlesConfig)
  // @ts-ignore
  particlesJS('particles-contact', particlesConfig)
})

const projects = ref([
  {
    title: 'Prestago - Projet personnel',
    stack: 'Vue 3 · Capacitor · Symfony 7',
    descriptionIntro: `Prestago est une application mobile conçue pour les intervenants à domicile (CESU et auto-entrepreneurs), pour planifier facilement leurs journées.`,
    features: [
      '📅 Vue mensuelle et hebdomadaire du planning',
      '👨‍👩‍👧‍👦 Gestion des clients avec couleurs et historique',
      '🔁 Création d’interventions récurrentes',
      '❌ Enregistrement des absences et indisponibilités',
      '📍 Calcul des distances entre deux rendez-vous',
      '🔄 Synchronisation automatique',
      '🔒 Authentification sécurisée',
      '☁️ Stockage cloud multi-appareils',
      '📊 Export mensuel et statistiques (version premium)'
    ],
    descriptionConclusion: `Pensée pour les auxiliaires de vie ou aides à domicile, l’application est simple, rapide, et adaptée aux besoins du terrain.`,
    link: 'https://play.google.com/store/apps/details?id=com.vthiebaut.prestago&hl=fr',
    images: [capturePrestagoAgenda],
    isMobileScreen: true
  },
  {
    title: 'Cleaneuse by Pauline - Projet freelance',
    stack: 'Vue 3 · Tailwind CSS · Symfony 7',
    descriptionIntro: `Site vitrine élégant pour une professionnelle du ménage à domicile, avec un backoffice simple et complet.`,
    features: [
      '🧼 Présentation des services',
      '📍 Zone d’intervention détaillée',
      '📸 Galerie d’équipements',
      '📆 Planning dynamique des disponibilités',
      '🔗 Formulaire de contact intégré',
      '✅ Backoffice pour gérer les créneaux'
    ],
    descriptionConclusion: `Optimisé pour mobile et conçu pour une autonomie totale de l’utilisatrice.`,
    link: 'https://cleaneuse-by-pauline.fr',
    images: [cleaneuseByPauline],
    isMobileScreen: false
  },
  {
    title: 'MAORIE - Nextroad',
    stack: 'Vue 2 · Symfony 5',
    descriptionIntro: `MAORIE est une plateforme web métier destinée aux gestionnaires d’infrastructures pour centraliser les données techniques et analyses.`,
    features: [
      '🗺️ Affichage cartographique des routes et structures',
      '🧪 Résultats d’analyses intégrés via API labo',
      '📊 Visualisation graphique des couches et polluants',
      '👥 Gestion des utilisateurs et permissions',
    ],
    descriptionConclusion: `Cette plateforme est indispensable pour les clients de Nextroad, leur permettant d’accéder rapidement aux résultats d’analyses sans attendre un retour du chargé d'affaire, et ainsi d’anticiper plus efficacement les chantiers à venir.`,
    link: 'https://maorie.com',
    images: [maorieSite],
    isMobileScreen: false
  },
  {
    title: 'TIRO - Nextroad',
    stack: 'React Native · API REST',
    descriptionIntro: `Application mobile de saisie terrain, connectée à MAORIE, utilisée lors des carottages ou relevés techniques.`,
    features: [
      '📍 Géolocalisation automatique (Mapbox)',
      '📸 Prises de photos horodatées',
      '📝 Saisie des couches, profondeurs, observations',
      '🔄 Mode offline avec synchro une fois connecté',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.tirobymaorie&hl=fr&gl=US',
    descriptionConclusion: `Cette application est devenue indispensable sur le terrain, en maximisant la productivité et en réduisant les erreurs humaines liées aux saisies manuelles. Elle remplace efficacement les prises de notes papier et les photos non centralisées, en offrant un outil dédié et structuré.`,
    images: [tiroLogin],
    isMobileScreen: true
  },
  {
  title: 'Portfolio - Projet personnel',
  stack: 'Vue 3 · Tailwind CSS',
  descriptionIntro: `Ce site vitrine me permet de présenter mes projets, mon parcours, et mes compétences en tant que développeur full-stack.`,
  features: [
    '🖥️ Interface responsive et moderne',
    '🧩 Présentation dynamique des projets',
    '📄 CV téléchargeable avec aperçu intégré',
    '🎨 Design soigné avec animations',
    '📬 Formulaire de contact intégré'
  ],
  descriptionConclusion: `Conçu en Vue 3 avec Tailwind, ce portfolio reflète à la fois mon style, ma rigueur, et mes compétences techniques en front-end.`,
  link: 'https://vthiebaut.fr', // modifie si besoin
  images: [capturePortfolio],
  isMobileScreen: false
}
])


const currentIndexes = ref(projects.value.map(() => 0))

const skills = [
  { label: 'VueJS 3 / Vite', level: 90 },
  { label: 'Symfony 7', level: 90 },
  { label: 'React Native', level: 80 },
  { label: 'Tailwind CSS', level: 90 },
  { label: 'Docker & CI/CD', level: 65 },
  { label: 'PostgreSQL', level: 85 },
  { label: 'API REST & GraphQL', level: 85 },
  { label: 'Mapbox / Géolocalisation', level: 80 },
  { label: 'Auth JWT / OAuth2', level: 85 }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const emailSuccess = ref(false)
const emailError = ref(false)

const sendEmail = async () => {
  try {
    await emailjs.send('service_anroc2d', 'template_rk9b4ei', form.value, 'zNbMtvBNYdn8k3b1l')
    emailSuccess.value = true
    emailError.value = false
    form.value = { name: '', email: '', message: '' }
  } catch (err) {
    emailError.value = true
    emailSuccess.value = false
  }
}

const goTo = (anchor: string) => {
  const el = document.getElementById(anchor.replace('#', ''))
  if (el) {
    const yOffset = -100
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<style>
.parallax-bg {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@media (max-width: 1700px) {
  .image-absolute-desktop {
    display: none !important;
  }
}

@media (max-width: 1300px) {
  .image-desktop {
    display: none !important;
  }

  .text-column {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    text-align: center;
  }
}

.card {
  perspective: 1000px;
  cursor: pointer;
  /* pas de height */
}

.card-inner {
  width: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
   display: flex;
  justify-content: center;
  align-items: center;
}

.card-back p {
  white-space: pre-line;
  background-color: #F0F0F0;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
  background-color: #F0F0F0;
}

.card-front,
.card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* pour Safari */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  border-radius: 0.5rem;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: #F0F0F0 !important;
}

.card-front {
  background: white;
  z-index: 2;
  transform: rotateY(0deg);
  border: 1px solid #e5e7eb;
}

.card-back {
  background: #F0F0F0;
  transform: rotateY(180deg);
  justify-content: space-between;
  color: black;
}

.particles-container {
  position: absolute; /* Changé de fixed à absolute */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Augmenté pour être au-dessus de l'overlay */
}

/* Nouvelle classe pour l'overlay */
.z-1 {
  z-index: 1;
}

/* Assurer que les particules sont interactives */
#particles-js {
  pointer-events: auto;
}
</style>
