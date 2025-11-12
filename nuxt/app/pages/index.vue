<template>
  <div class="font-sans text-gray-900 bg-gray-100 scroll-smooth">

    <div id="preloader" class="fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-700">
      <span class="text-white text-xl animate-pulse">Chargement...</span>
    </div>

    <!-- Hero Section -->
    <header id="accueil" class="relative min-h-screen flex flex-col items-center justify-center text-center py-32 px-4 bg-cover bg-center bg-gray-500">
      <!-- Particules -->
      <div id="particles-js" class="particles-container"></div>
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/70 pointer-events-none z-1"></div>
      <!-- Contenu -->
      <div class="relative z-10 pointer-events-none">
        <h1 class="text-white text-5xl md:text-7xl font-extrabold mb-4">
          Développeur Freelance Web - Valentin Thiebaut
        </h1>
        <p class="text-white text-xl md:text-2xl max-w-2xl mx-auto">
          Développeur freelance full-stack Web & Mobile — Vue 3 · Symfony 7 · React Native
        </p>
        <!-- Bouton scroll smooth -->
        <button
          @click="goTo('contact')"
          class="inline-block mt-8 px-8 py-3 bg-white rounded-lg shadow-lg no-underline transition pointer-events-auto text-black hover:bg-[#fe007b] hover:text-white"
        >
          Me contacter
        </button>
      </div>
    </header>

    <!-- Section À propos -->
    <section id="a-propos" class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">👨‍💻 À propos de moi</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Partie gauche : texte -->
          <div class="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Développeur freelance web et mobile</strong> depuis plus de 10 ans, j'ai fait de la création d'applications web et mobiles mon quotidien.
              Curieux, autonome et rigoureux, je conçois des applications modernes et efficaces, toujours pensées pour les utilisateurs.
            </p>
            <p>
              En tant que <strong>développeur freelance</strong>, je maîtrise les technologies Vue.js, Symfony, React Native et bien d'autres, avec un fort attrait pour la performance,
              l'expérience utilisateur et la qualité du code. Je propose mes services de <strong>développeur freelance web</strong> pour créer des applications sur mesure.
            </p>
            <p>
              <strong>Basé à Dax dans les Landes</strong>, je travaille en tant que <strong>développeur indépendant</strong> pour des clients partout en France.
              Je propose également des services de dépannage informatique, réparation PC, montage et cours pour particuliers et professionnels de la région.
            </p>
            <p>
              Que ce soit pour développer une application from scratch, moderniser un outil existant, accompagner une équipe ou 
              dépanner votre ordinateur, je suis toujours prêt à relever de nouveaux défis en tant que <strong>développeur freelance</strong>.
            </p>
          </div>

          <!-- Partie droite : preview + bouton -->
          <div class="flex flex-col lg:items-end justify-center">
            <div class="flex flex-col items-center gap-4">
              <img
                src="/images/cv-vthiebaut.png"
                alt="Aperçu du CV - Valentin Thiebaut, Dépannage informatique Dax"
                class="w-[280px] rounded-xl shadow-lg"
              />
              <a
                href="/cv-valentin-thiebaut.pdf"
                download
                style="text-decoration: none;"
                class="bg-black !text-white px-6 py-2 rounded hover:bg-white hover:!text-black !border hover:!border-black transition"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Services -->
    <section id="services" class="py-20 px-4 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">🛠️ Services proposés</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-gray-50 p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col gap-3 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">📱 Développement mobile</h3>
            <p class="text-gray-600">
              Création d'applications mobiles hybrides (iOS & Android) avec React Native ou Capacitor. Design moderne, offline, géolocalisation, synchronisation cloud.
            </p>
          </div>

          <!-- Service 2 -->
          <div class="bg-gray-50 p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col gap-3 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">💻 Sites vitrines</h3>
            <p class="text-gray-600">
              Création de sites vitrines professionnels, adaptés à votre image. Avec ou sans back-office, entièrement responsive, et optimisés SEO.
            </p>
          </div>

          <!-- Service 3 -->
          <div class="bg-gray-50 p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col gap-3 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">🖥️ Développement web</h3>
            <p class="text-gray-600">
              Conception d'applications web sur mesure avec Vue.js et Symfony. Interfaces dynamiques, gestion de base de données, API sécurisées.
            </p>
          </div>

          <!-- Service 4 -->
          <div class="bg-gray-50 p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col gap-3 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">📐 UI / UX responsive</h3>
            <p class="text-gray-600">
              Création d'interfaces modernes, intuitives et entièrement responsives. Optimisées pour tous les appareils et tous les usages.
            </p>
          </div>

          <!-- Service 5 -->
          <div class="bg-gray-50 p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col gap-3 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">⚙️ Back-office / Admin</h3>
            <p class="text-gray-600">
              Mise en place de tableaux de bord sécurisés pour gérer vos données, utilisateurs, contenus ou statistiques avec performance et simplicité.
            </p>
          </div>

          <!-- Service 6 -->
          <div class="bg-gray-50 p-6 rounded-xl transition duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col gap-3 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">🚀 Optimisation & support</h3>
            <p class="text-gray-600">
              Amélioration de sites existants, refontes techniques, optimisation des performances, support technique et évolutions fonctionnelles.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Portfolio -->
    <section id="projets" class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-2">Portfolio</h2>
        <p class="flex justify-center">Présentation de mes derniers projets</p>

        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(p, i) in projects"
            :key="p.title"
            class="card w-full lg:w-[calc(50%-0.75rem)] h-[600px]"
          >
            <div class="card-inner w-full h-full shadow-xl flex items-center justify-center">
              <!-- Face avant -->
              <div class="card-front flex flex-col items-center justify-center gap-6 bg-gray-50 rounded-lg w-full h-full p-6 border border-gray-200">
                <template v-if="p.images && p.images.length > 0 && p.images[currentIndexes[i]]">
                  <template v-if="p.isMobileScreen">
                    <figure class="border border-gray-300 rounded-2xl shadow-md overflow-hidden w-[200px] h-[440px]">
                      <img 
                        :src="p.images[currentIndexes[i]]" 
                        :alt="`Capture d'écran du projet ${p.title}`"
                        loading="lazy"
                        class="w-full h-full object-contain transition-all duration-500" />
                    </figure>
                  </template>
                  <template v-else>
                    <figure class="overflow-hidden rounded-lg shadow-md w-full">
                      <img 
                        :src="p.images[currentIndexes[i]]" 
                        :alt="`Capture d'écran du projet ${p.title}`"
                        loading="lazy"
                        class="w-full h-56 object-cover transition-all duration-500" />
                    </figure>
                  </template>
                </template>

                <div class="text-center space-y-1">
                  <h3 class="text-xl font-bold text-gray-800">{{ p.title }}</h3>
                  <p class="text-sm text-gray-500">{{ p.stack }}</p>
                </div>
              </div>

              <!-- Face arrière -->
              <div
                class="card-back flex flex-col justify-start items-start text-left gap-4 bg-white rounded-lg w-full h-full"
              >
                <!-- Description courte -->
                <p class="text-base font-medium">{{ p.descriptionIntro }}</p>

                <!-- Fonctionnalités (2 colonnes en md+) -->
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm list-disc pl-4">
                  <li v-for="(feature, idx) in p.features" :key="idx">{{ feature }}</li>
                </ul>

                <!-- Conclusion -->
                <p v-if="p.descriptionConclusion" class="text-sm">{{ p.descriptionConclusion }}</p>

                <!-- lien -->
                <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" style="text-decoration: none;"
                  class="inline-block !text-white bg-black px-4 py-2 rounded hover:bg-[#fe007b] transition">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="competences" class="py-20 px-4 bg-gray-100">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Compétences clés</h2>

        <div class="space-y-6">
          <div v-for="skill in skills" :key="skill.label">
            <div class="flex justify-between mb-1">
              <span class="font-medium">{{ skill.label }}</span>
              <span class="text-sm text-gray-500">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                class="h-3 bg-yellow-500 rounded-full transition-all"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours -->
    <section id="parcours" class="py-20 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4">🎓 Formation</h2>
        <p class="text-center text-gray-600 mb-12">
          Voici mon parcours depuis mes débuts en développement web.
        </p>

        <div class="relative border-l-4 border-yellow-500 pl-6">
          
          <!-- Master -->
          <div class="mb-12 relative">
            <div class="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <img src="/images/logogroupecesi.png" alt="CESI" class="w-8 h-8 rounded-full" />
              <div class="absolute inset-0 rounded-full border-4 border-yellow-500 z-20"></div>
            </div>
            <div class="pl-16">
              <h3 class="text-xl font-semibold">2017–2021 — Master Manager en Système d'Informations en Alternance</h3>
              <p class="text-gray-700">Formation en alternance avec le CESI — Châteauroux</p>
            </div>
          </div>

          <!-- BTS SIO -->
          <div class="mb-12 relative">
            <div class="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <img src="/images/btssio.png" alt="BTS SIO" class="w-8 h-8 rounded-full" />
              <div class="absolute inset-0 rounded-full border-4 border-yellow-500 z-20"></div>
            </div>
            <div class="pl-16">
              <h3 class="text-xl font-semibold">2015–2017 — BTS Services Informatiques aux Organisations</h3>
              <p class="text-gray-700">CCI de l'Indre — Châteauroux</p>
            </div>
          </div>

          <!-- BAC S -->
          <div class="mb-12 relative">
            <div class="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center z-10">
              <img src="/images/lyceemargueritedenavarre.png" alt="BAC S" class="w-8 h-8 rounded-full" />
              <div class="absolute inset-0 rounded-full border-4 border-yellow-500 z-20"></div>
            </div>
            <div class="pl-16">
              <h3 class="text-xl font-semibold">2015 — BAC Scientifique</h3>
              <p class="text-gray-700">Lycée Marguerite de Navarre — Bourges</p>
            </div>
          </div>

          <!-- Passion -->
          <div class="mb-12 relative">
            <div class="absolute left-0 top-1 w-12 h-12 rounded-full bg-yellow-400 text-white flex items-center justify-center text-sm font-bold z-20">
              🚀
            </div>
            <div class="pl-16">
              <h3 class="text-xl font-semibold">Avant 2014 — Passion pour l'informatique</h3>
              <p class="text-gray-700">D'abord passionné par l'informatique et la programmation, je suis parti en filière scientifique afin de m'ouvrir un maximum de porte pour la suite.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section Dépannage Informatique Dax - OPTIMISÉE SEO -->
    <section id="depannage" class="py-20 px-4 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-4">🧰 Dépannage Informatique à Dax</h1>
        <p class="text-center text-lg text-gray-700 mb-12">
          Services professionnels de réparation PC, montage et cours informatique à Dax et dans les Landes (40)
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Dépannage informatique -->
          <article class="bg-gray-50 p-6 rounded-xl border border-gray-200 transition duration-300 hover:scale-[1.03] hover:shadow-xl">
            <h2 class="text-xl font-semibold mb-2">🖥️ Dépannage informatique Dax</h2>
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
            <h2 class="text-xl font-semibold mb-2">🧩 Montage PC & upgrades Dax</h2>
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
            <h2 class="text-xl font-semibold mb-2">🎓 Cours informatique Dax</h2>
            <ul class="list-disc pl-5 text-gray-700 space-y-1">
              <li>Bureautique : Windows/macOS, fichiers, sécurité</li>
              <li>Office / LibreOffice / Google Docs & Drive</li>
              <li>Dev : HTML/CSS/JS, Vue 3, React Native, Symfony</li>
              <li>Git/GitHub, notions Docker & bonnes pratiques</li>
              <li>Aide projet, mentoring, mise à niveau</li>
            </ul>
          </article>
        </div>

        <!-- Zone d'intervention -->
        <div class="bg-white p-6 rounded-xl border border-gray-200 mb-6">
          <h2 class="text-2xl font-semibold mb-4 text-center">📍 Zone d'intervention</h2>
          <p class="text-center text-gray-700 mb-2">
            Je me déplace dans <strong>Dax et les environs</strong> pour le dépannage informatique à domicile.
          </p>
          <p class="text-center text-gray-600 text-sm">
            Principales villes desservies : Dax, Saint-Paul-lès-Dax, Saint-Vincent-de-Paul, Yzosse, Mées, Narrosse et dans un rayon de 30km autour de Dax.
          </p>
        </div>

        <div class="mt-10 text-center">
          <NuxtLink 
            to="/depannage-informatique-dax" 
            class="inline-block bg-black text-white px-5 py-3 rounded-md hover:bg-[#fe007b] transition"
          >
            Voir la page dédiée au dépannage
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section Avis -->
    <section id="avis" class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">💬 Avis de clients</h2>

        <!-- Liste des avis approuvés -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <article
            v-for="a in approvedComments"
            :key="a.id"
            class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">{{ a?.name || '' }}</h3>
              <span class="text-yellow-500">{{ '⭐'.repeat(a?.rating || 5) }}</span>
            </div>
            <p class="mt-3 text-gray-700">{{ a?.content || '' }}</p>
            <p class="mt-2 text-xs text-gray-400">
              {{ a?.createdAt ? new Date(a.createdAt).toLocaleDateString() : '' }}
            </p>
          </article>
        </div>

        <!-- Formulaire de proposition d'avis -->
        <div class="max-w-xl mx-auto bg-white p-8 rounded-xl border border-gray-200 shadow-md">
          <h3 class="text-xl font-semibold mb-5 text-center">Laisser un avis</h3>

          <form @submit.prevent="submitComment" class="flex flex-col gap-4">
            <input
              v-model="commentsForm.name"
              required
              placeholder="Nom"
              class="border border-gray-300 p-3 rounded-md"
            />
            <input
              v-model="commentsForm.surname"
              required
              placeholder="Prénom"
              class="border border-gray-300 p-3 rounded-md"
            />

            <!-- Note -->
            <div>
              <label class="text-sm text-gray-600">Note</label>
              <div
                class="mt-2 flex items-center justify-center gap-2"
                role="radiogroup"
                aria-label="Note en étoiles"
              >
                <button
                  v-for="n in 5"
                  :key="n"
                  type="button"
                  role="radio"
                  :aria-checked="(hoverRating || commentsForm.rating) === n"
                  @click="setRating(n)"
                  @mouseenter="hoverRating = n"
                  @mouseleave="hoverRating = 0"
                  @focus="hoverRating = n"
                  @blur="hoverRating = 0"
                  @keydown.left.prevent="bump(-1)"
                  @keydown.right.prevent="bump(1)"
                  class="p-1.5 rounded focus:outline-none focus:ring focus:ring-[#fe007b]/40"
                >
                  <!-- étoile SVG -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="w-8 h-8"
                    :class="(hoverRating || commentsForm.rating) >= n ? 'fill-yellow-400 stroke-yellow-500' : 'fill-gray-200 stroke-gray-300'"
                  >
                    <path
                      stroke-width="1"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.11a1 1 0 0 0 .95.69h3.27c.967 0 1.368 1.24.588 1.81l-2.647 1.924a1 1 0 0 0-.364 1.118l1.01 3.11c.3.922-.755 1.688-1.54 1.118L10.95 13.9a1 1 0 0 0-1.176 0l-2.278 1.908c-.784.57-1.838-.196-1.539-1.118l1.009-3.11a1 1 0 0 0-.364-1.118L4.955 8.537c-.78-.57-.379-1.81.588-1.81h3.27a1 1 0 0 0 .95-.69l1.01-3.11Z"
                    />
                  </svg>
                  <span class="sr-only">{{ n }}</span>
                </button>
              </div>
            </div>

            <textarea
              v-model="commentsForm.content"
              required
              rows="4"
              placeholder="Votre avis"
              class="border border-gray-300 p-3 rounded-md"
            ></textarea>

            <button
              type="submit"
              class="bg-black text-white py-3 rounded-md hover:bg-[#fe007b]"
            >
              Envoyer pour validation
            </button>

            <p
              v-if="commentsSuccess"
              class="text-green-600 mt-2 text-center"
            >
              Merci ! Avis bien reçu, il sera publié après validation.
            </p>
            <p
              v-if="commentsError"
              class="text-red-600 mt-2 text-center"
            >
              Erreur d'envoi. Réessaie un peu plus tard.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="relative py-20 px-4 bg-gray-500 min-h-[600px]">
      <!-- Fond noir semi-transparent -->
      <div class="absolute inset-0 bg-black/70 z-0"></div>

      <!-- Particules éventuelles -->
      <div id="particles-contact" class="particles-container absolute inset-0 opacity-30 pointer-events-none z-0"></div>

      <!-- Contenu principal -->
      <div class="max-w-xl mx-auto relative z-10 text-white rounded-xl p-6 space-y-10 bg-black/70">
        <h2 class="text-4xl font-bold text-center">Me contacter</h2>

        <form @submit.prevent="sendEmail" class="flex flex-col gap-4">
          <input v-model="form.name" required placeholder="Nom / Prénom"
            class="border border-gray-300 p-3 rounded-md" />
          <input v-model="form.email" required type="email" placeholder="Email"
            class="border border-gray-300 p-3 rounded-md" />
          <textarea v-model="form.message" required placeholder="Votre message" rows="5"
            class="border border-gray-300 p-3 rounded-md"></textarea>
          <button type="submit"
            class="bg-white text-black py-3 rounded-md transition hover:bg-[#fe007b] hover:text-white">
            Envoyer
          </button>
          <p v-if="emailSuccess" class="text-green-400 font-semibold mt-2">Message envoyé ✅</p>
          <p v-if="emailError" class="text-red-400 font-semibold mt-2">Erreur d'envoi ❌</p>
        </form>

        <!-- Coordonnées -->
        <div class="text-center space-y-2 text-sm mt-4">
          <p>
            <a href="https://www.linkedin.com/in/valentin-thiebaut" target="_blank" rel="noopener"
              class="underline hover:text-[#fe007b]">🔗 Mon profil LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/vthiebaut" target="_blank" rel="noopener"
              class="underline hover:text-[#fe007b]">💻 Mon GitHub</a>
          </p>
          <p>📧 contact@vthiebaut.fr</p>
          <p>📞 06 26 24 63 41</p>
          <p class="text-xs text-gray-300 mt-4">📍 Dax, Landes (40)</p>
        </div>

      </div>

      <footer class="text-center pt-10 relative z-10">
        <p class="text-white text-lg">&copy; 2025 Valentin Thiebaut — Tous droits réservés</p>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'

const config = useRuntimeConfig()

// SEO Meta tags - Développeur Freelance Web (optimisé pour "Développeur Freelance web")
useSeoMeta({
  title: 'Développeur Freelance Web - Valentin Thiebaut | Vue.js, Symfony, React Native',
  description: 'Développeur freelance web et mobile à Dax. Spécialisé en Vue.js, Symfony et React Native. Développement d\'applications web et mobiles sur mesure. Devis gratuit.',
  keywords: 'développeur freelance web, développeur freelance, développeur web freelance, développeur freelance Dax, développeur web Dax, développeur full-stack freelance, Vue.js freelance, Symfony freelance, React Native freelance, développeur indépendant web',
  ogTitle: 'Développeur Freelance Web - Valentin Thiebaut',
  ogDescription: 'Développeur freelance web et mobile. Spécialisé en Vue.js, Symfony et React Native. Développement d\'applications sur mesure.',
  ogType: 'website',
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
})

// Structured Data JSON-LD pour Person/ProfessionalService (développeur freelance)
const structuredData = computed(() => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "name": "Valentin Thiebaut",
    "jobTitle": "Développeur Freelance Web",
    "description": "Développeur freelance web et mobile spécialisé en Vue.js, Symfony et React Native. Développement d'applications web et mobiles sur mesure.",
    "url": "https://portfolio.vthiebaut.fr",
    "sameAs": [
      "https://www.linkedin.com/in/valentin-thiebaut",
      "https://github.com/vthiebaut"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dax",
      "postalCode": "40100",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "knowsAbout": [
      "Développement web",
      "Développement mobile",
      "Vue.js",
      "Symfony",
      "React Native",
      "Développement freelance",
      "Développement d'applications"
    ],
    "serviceType": "Développement web et mobile",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de développement freelance",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement web freelance",
            "description": "Création d'applications web avec Vue.js et Symfony"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement mobile freelance",
            "description": "Applications mobiles iOS et Android avec React Native"
          }
        }
      ]
    }
  })
})

// Injection du structured data dans le head
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: structuredData.value
    }
  ]
})

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

onMounted(async () => {
  fetchApprovedComments()
  if (process.client) {
    // Masquer le preloader immédiatement après le montage
    const hidePreloader = () => {
      const loader = document.getElementById("preloader")
      if (loader) {
        loader.classList.add("opacity-0")
        setTimeout(() => loader.remove(), 700)
      }
    }
    
    // Si la page est déjà chargée, masquer immédiatement
    if (document.readyState === 'complete') {
      hidePreloader()
    } else {
      // Sinon attendre le chargement complet
      window.addEventListener("load", hidePreloader, { once: true })
      // Fallback : masquer après 2 secondes max
      setTimeout(hidePreloader, 2000)
    }
    
    // Import dynamique de particles.js uniquement côté client
    const particlesJS = (await import('particles.js')).default
    // @ts-ignore
    particlesJS('particles-js', particlesConfig)
    // @ts-ignore
    particlesJS('particles-contact', particlesConfig)
  }
})

const hoverRating = ref(0)

const setRating = (n: number) => {
  commentsForm.value.rating = n
}

const bump = (delta: number) => {
  const next = Math.min(5, Math.max(1, (hoverRating.value || commentsForm.value.rating || 5) + delta))
  hoverRating.value = next
  commentsForm.value.rating = next
}

const projects = ref([
  {
    title: 'Prestago - Projet personnel',
    stack: 'Vue 3 · Capacitor · Symfony 7',
    descriptionIntro: `Prestago est une application mobile conçue pour les intervenants à domicile (CESU et auto-entrepreneurs), pour planifier facilement leurs journées.`,
    features: [
      '📅 Vue mensuelle et hebdomadaire du planning',
      '👨‍👩‍👧‍👦 Gestion des clients avec couleurs et historique',
      "🔁 Création d'interventions récurrentes",
      '❌ Enregistrement des absences et indisponibilités',
      '📍 Calcul des distances entre deux rendez-vous',
      '🔄 Synchronisation automatique',
      '🔒 Authentification sécurisée',
      '☁️ Stockage cloud multi-appareils',
      '📊 Export mensuel et statistiques (version premium)'
    ],
    descriptionConclusion: `Pensée pour les auxiliaires de vie ou aides à domicile, l'application est simple, rapide, et adaptée aux besoins du terrain.`,
    link: 'https://play.google.com/store/apps/details?id=com.vthiebaut.prestago&hl=fr',
    images: ['/images/capture-ecran-prestago-agenda.jpg'],
    isMobileScreen: true
  },
  {
    title: 'Cleaneuse by Pauline - Projet freelance',
    stack: 'Vue 3 · Tailwind CSS · Symfony 7',
    descriptionIntro: `Site vitrine élégant pour une professionnelle du ménage à domicile, avec un backoffice simple et complet.`,
    features: [
      '🧼 Présentation des services',
      "📍 Zone d'intervention détaillée",
      "📸 Galerie d'équipements",
      '📆 Planning dynamique des disponibilités',
      '🔗 Formulaire de contact intégré',
      '✅ Backoffice pour gérer les créneaux'
    ],
    descriptionConclusion: `Optimisé pour mobile et conçu pour une autonomie totale de l'utilisatrice.`,
    link: 'https://cleaneuse-by-pauline.fr',
    images: ['/images/cleaneuse-by-pauline.png'],
    isMobileScreen: false
  },
  {
    title: 'Plateforme cartographique métier',
    stack: 'Vue 2 · Symfony 5',
    descriptionIntro: `Plateforme web dédiée aux gestionnaires d'infrastructures, permettant de centraliser les données issues d'analyses techniques et de visualiser les résultats sur carte.`,
    features: [
      '🗺️ Affichage cartographique de structures et réseaux',
      '🧪 Intégration de résultats via API tierce',
      '📊 Visualisation graphique des couches et indicateurs',
      '👥 Gestion des accès et des rôles utilisateurs',
    ],
    descriptionConclusion: `Cette plateforme permet à ses utilisateurs d'accéder rapidement à des informations techniques critiques pour faciliter l'organisation des interventions terrain et la planification des chantiers.`,
    link: null,
    images: [],
    isMobileScreen: false
  },
  {
    title: 'Application mobile de relevé terrain',
    stack: 'React Native · API REST',
    descriptionIntro: `Application mobile de saisie technique utilisée sur le terrain, connectée à la plateforme web, permettant la collecte de données géolocalisées.`,
    features: [
      '📍 Géolocalisation automatique via Mapbox',
      '📸 Prises de photos avec horodatage',
      '📝 Saisie de mesures, couches et observations',
      '🔄 Mode hors-ligne avec synchronisation ultérieure',
    ],
    descriptionConclusion: `L'application remplace les relevés papier traditionnels par un outil structuré et connecté, réduisant les erreurs humaines et facilitant le suivi des interventions.`,
    link: null,
    images: [],
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
    link: '/',
    images: ['/images/portfolio.png'],
    isMobileScreen: false
  }
])

const currentIndexes = ref(projects.value.map(() => 0))

const skills = [
  { label: 'VueJS 3 / Vite', level: 90 },
  { label: 'React', level: 85 },
  { label: 'Symfony 7', level: 90 },
  { label: 'NestJS', level: 80 },
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

type Comments = {
  id: number
  name: string
  surname?: string
  rating: number
  content: string
  createdAt: string
  isApproved: boolean
}

const comments = ref<Comments[]>([])
const approvedComments = computed(() =>
  (comments.value || []).filter(t => t.isApproved)
)

const commentsForm = ref({ name: '', surname: '', rating: 5, content: '' })
const commentsSuccess = ref(false)
const commentsError = ref(false)
const commentsLoading = ref(false)

const emailSuccess = ref(false)
const emailError = ref(false)

const { api } = useApi()

const sendEmail = async () => {
  try {
    if (process.client) {
      await emailjs.send(
        config.public.emailjsServiceId,
        config.public.emailjsTemplateId,
        form.value,
        config.public.emailjsPublicKey
      )
      emailSuccess.value = true
      emailError.value = false
      form.value = { name: '', email: '', message: '' }
    }
  } catch (err) {
    emailError.value = true
    emailSuccess.value = false
  }
}

const goTo = (anchor: string) => {
  if (process.client) {
    const el = document.getElementById(anchor.replace('#', ''))
    if (el) {
      const yOffset = -100
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}

const fetchApprovedComments = async () => {
  try {
    const { data } = await api.get<Comments[]>('/comments/approved')
    comments.value = data || []
  } catch (e) {
    console.error('Failed to load comments', e)
  }
}

const submitComment = async () => {
  commentsLoading.value = true
  commentsSuccess.value = false
  commentsError.value = false
  try {
    await api.post('/comments', {
      name: commentsForm.value.name,
      surname: commentsForm.value.surname,
      rating: commentsForm.value.rating,
      content: commentsForm.value.content,
    })
    commentsSuccess.value = true
    commentsForm.value = { name: '', surname: '', rating: 5, content: '' }
  } catch (e) {
    commentsError.value = true
  } finally {
    commentsLoading.value = false
  }
}
</script>

