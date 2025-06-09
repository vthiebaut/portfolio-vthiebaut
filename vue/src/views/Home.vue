<template>
  <div class="tw:font-sans tw:text-gray-800 tw:bg-gray-100">
    <!-- Header -->
    <header
      class="tw:relative tw:bg-cover tw:bg-center tw:text-white tw:text-center tw:py-32 tw:px-4 tw:min-h-screen parallax-bg tw:flex tw:items-center tw:justify-center"
      :style="{ backgroundImage: `url(${headerImage})` }"
    >
      <div class="tw:absolute tw:inset-0 tw:bg-black/60"></div>

      <!-- Conteneur logo centré -->
      <div class="tw:relative tw:z-10">
        <img
          src="@/assets/cleaneuse-by-pauline.png"
          alt="Logo Cleaneuse by Pauline"
          class="tw:max-w-[700px] tw:w-full tw:h-auto mx-auto"
        />
      </div>
    </header>

    <!-- Intro -->
    <section class="tw:relative tw:flex tw:flex-wrap tw:min-h-screen tw:bg-white">
      <!-- Colonne gauche avec fond -->
      <div
        class="tw:flex-1 tw:bg-cover tw:bg-center tw:flex tw:items-center tw:justify-center tw:my-[20px] tw:mx-[12px] tw:rounded-lg"
        :style="{ backgroundImage: `url(${frameImage})` }"
      >
        <div
          class="text-column tw:max-w-2xl tw:py-8 tw:flex tw:flex-col tw:gap-[10px] tw:px-4 tw:sm:ml-6 tw:md:ml-12 tw:lg:ml-[10rem]"
        >
          <h2 class="tw:text-5xl tw:font-bold tw:mb-4 tw:text-center tw:pb-8 font-cursive">
            Bienvenue !
          </h2>

          <p class="tw:text-lg">
            Je m'appelle <strong>Pauline</strong>, aide à domicile / aide ménagère, passionnée par
            le soin du foyer et le travail bien fait.
          </p>

          <p class="tw:text-lg">
            Souriante, discrète et rigoureuse, je propose mes services pour l’entretien régulier de
            votre maison ou appartement, ainsi que pour des besoins ponctuels
          </p>

          <ul class="tw:list-disc tw:pl-6 tw:text-lg">
            <li>Ménage courant</li>
            <li>Nettoyage en profondeur (printemps, après déménagement…)</li>
            <li>Entretien du linge et repassage</li>
            <li>Préparation des chambres et soin du logement</li>
          </ul>

          <p class="tw:text-lg tw:mt-2">
            ✨ J’utilise des produits respectueux de l’environnement, efficaces et adaptés aux
            enfants et animaux. Mon objectif : vous offrir un intérieur propre, sain et accueillant.
          </p>

          <p class="tw:text-lg tw:mt-2">
            📄 Prestation déclarée en <strong>CESU</strong> – avec 50% de crédit d’impôt selon la
            législation en vigueur.
          </p>

          <p class="tw:text-lg tw:mt-2">
            📞 N’hésitez pas à me contacter pour un <strong>devis gratuit</strong> ou planifier une
            première intervention !
          </p>
        </div>
      </div>

      <!-- Colonne droite (image principale) -->
      <div
        class="tw:flex-1 tw:min-w-[300px] tw:flex tw:items-center tw:justify-center tw:my-[20px] tw:mx-[12px] image-desktop"
      >
        <img
          src="@/assets/ensemble-brosses-nettoyage-zero-dechet.jpg"
          alt="Image d'introduction"
          class="tw:w-full tw:rounded-lg"
        />
      </div>

      <!-- Image superposée -->
      <div class="tw:absolute tw:z-[20] tw:bottom-[50px] tw:right-[30%] image-absolute-desktop">
        <img
          src="@/assets/salon-epure-canape-gris-table-bois-plante-decoration-naturelle.png"
          alt="Salon épuré décoration"
          class="tw:max-w-[30em] tw:rounded-lg tw:shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        />
      </div>
    </section>

    <section class="tw:py-12 tw:px-4 tw:bg-gray-100">
      <div class="tw:flex tw:flex-row md:tw:flex-row tw:items-center tw:gap-12">
        <!-- Image à gauche -->
        <div class="tw:flex-1 tw:min-w-[300px] image-desktop">
          <img
            src="@/assets/linge-huiles-essentielles-et-bicarbonate-pour-menage.jpg"
            alt="Produits naturels ménage"
            class="tw:w-full tw:h-auto tw:rounded-lg tw:shadow-md tw:mx-auto"
          />
        </div>

        <!-- Texte à droite -->
        <div class="tw:flex-1 tw:text-left tw:text-gray-800 tw:min-w-[300px]">
          <h2 class="tw:text-4xl tw:font-bold tw:mb-4 font-cursive tw:text-pink-700">
            🌿 Entretien respectueux
          </h2>

          <p class="tw:text-lg tw:mb-4">
            🧴 <strong>Utilisation de produits naturels sur demande</strong><br />
            Des prestations réalisées avec des produits écologiques et sûrs :
            <em>vinaigre blanc, savon noir, bicarbonate de soude, pierre d’argile…</em><br />
            Idéal pour les personnes sensibles, les familles avec enfants ou animaux.
          </p>

          <p class="tw:text-lg tw:mb-4">
            ✨ <strong>Respect de votre intérieur</strong><br />
            Chaque surface est traitée avec soin :
            <em>bois brut, marbre, inox, vitres ou textiles</em> — Je m'adapte les méthodes et
            produits à chaque pièce, selon vos besoins.
          </p>

          <p class="tw:text-lg tw:mb-4">
            🧘‍♀️ <strong>Un ménage sain, sans compromis</strong><br />
            Pas d’odeurs chimiques, pas de résidus agressifs : uniquement l’essentiel pour une
            maison propre, saine et agréable à vivre.
          </p>

          <p class="tw:text-lg">
            🧽 <strong>Professionnalisme & confiance</strong><br />
            Je m'engage à offrir un service de qualité, avec le souci du détail et un grand respect
            de votre espace personnel. Chaque intervention est réalisée avec discrétion, ponctualité
            et efficacité.
          </p>
        </div>
      </div>
    </section>

    <section class="tw:py-8 tw:px-4 tw:text-center tw:bg-white">
      <div class="tw:text-6xl tw:font-bold tw:mb-8 font-cursive">Ma zone d'intervention</div>
      <InteractiveMap />
    </section>

    <section class="tw:relative tw:py-8 tw:px-[50px] tw:bg-gray-100">
      <div class="tw:text-6xl tw:font-bold tw:mb-12 tw:text-center font-cursive">Mes services</div>

      <div
        class="tw:flex tw:flex-wrap tw:justify-center tw:gap-8 tw:items-stretch holographic-container"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="tw:w-full tw:sm:tw:w-[calc(50%-1rem)] tw:max-w-[500px] tw:bg-white tw:rounded-xl tw:shadow-md tw:p-6 tw:flex tw:flex-col tw:gap-2 tw:min-h-[450px] holographic-card"
        >
          <p class="tw:font-semibold tw:text-center tw:text-3xl">{{ service.title }}</p>
          <p class="tw:font-bold tw:text-center tw:text-xl">{{ service.price }}</p>
          <ul class="tw:mt-2 tw:space-y-1">
            <li v-for="(item, i) in service.items" :key="i" class="tw:flex tw:items-start tw:gap-2">
              <span class="tw:text-pink-600 tw:font-bold">›</span>
              <span v-html="item" class="tw:text-gray-800 tw:text-xl"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Logo : visible en mobile/tablette (dans le flux) / absolute sur lg+ -->
      <div
        class="tw:mt-8 tw:flex tw:justify-center tw:lg:justify-end tw:lg:mt-0 tw:lg:absolute tw:lg:bottom-8 tw:lg:right-8"
      >
        <img
          src="@/assets/logo-credit-impot-50-pourcent-menage-services-domicile.png"
          alt="50% de crédit d'impôt sur les services à domicile"
          class="tw:w-[200px] tw:transition tw:hover:scale-105"
        />
      </div>
    </section>

    <section
      class="tw:min-h-[1100px] tw:flex tw:flex-col tw:justify-center tw:items-center tw:py-12 tw:px-4 tw:bg-white tw:bg-cover tw:bg-center tw:bg-no-repeat"
      :style="{ backgroundImage: `url(${frameAvailability})` }"
    >
      <div class="tw:text-6xl tw:font-bold tw:mb-8 tw:text-center font-cursive">
        Mes disponibilités
      </div>
      <div class="tw:max-w-[1200px] tw:w-full tw:mx-auto">
        <AvailabilityGrid />
      </div>
    </section>

    <section class="tw:py-8 tw:px-4 tw:text-center tw:bg-gray-100">
      <div class="tw:text-6xl tw:font-bold tw:mb-4 font-cursive">Me contacter</div>
      <p class="tw:mb-4 tw:text-xl">
        ⚠️ Les interventions sont aux alentours de Saint-Vincent-de-Paul - 40990 (Jusqu'à environ 10
        kilomètres autour) ⚠️
      </p>
      <form
        @submit.prevent="sendEmail"
        class="tw:flex tw:flex-col tw:items-center tw:gap-4 tw:w-full tw:px-4"
      >
        <div class="tw:flex tw:flex-col tw:sm:flex-row tw:gap-4 tw:w-full tw:sm:tw:max-w-xl">
          <input
            v-model="form.name"
            required
            placeholder="Nom"
            class="tw:flex-1 tw:border tw:border-black tw:p-2 tw:rounded-lg tw:bg-white"
          />
          <input
            v-model="form.surname"
            required
            placeholder="Prénom"
            class="tw:flex-1 tw:border tw:border-black tw:p-2 tw:rounded-lg tw:bg-white"
          />
        </div>

        <input
          v-model="form.email"
          required
          type="email"
          placeholder="Email"
          class="tw:border tw:border-black tw:p-2 tw:rounded-lg tw:w-full tw:sm:tw:max-w-xl tw:bg-white"
        />

        <input
          v-model="form.place"
          required
          placeholder="Lieu de la prestation"
          class="tw:border tw:border-black tw:p-2 tw:rounded-lg tw:w-full tw:sm:tw:max-w-xl tw:bg-white"
        />

        <select
          v-model="form.subject"
          required
          class="tw:border tw:border-black tw:p-2 tw:rounded-lg tw:w-full tw:sm:tw:max-w-xl tw:bg-white"
        >
          <option disabled value="">--- Sélectionnez une prestation ---</option>
          <option>Ménage courant</option>
          <option>Entretien du linge</option>
          <option>Nettoyage spécifique ou ponctuel</option>
          <option>Entretien extérieur</option>
          <option>Aide à domicile douce</option>
        </select>

        <textarea
          v-model="form.message"
          required
          placeholder="Message"
          rows="5"
          class="tw:border tw:border-black tw:p-2 tw:rounded-lg tw:w-full tw:sm:tw:max-w-xl tw:bg-white"
        ></textarea>

        <input
          type="submit"
          value="Envoyer le message"
          class="tw:border tw:bg-white tw:border-black tw:rounded-lg tw:p-2 tw:text-[#fe007b] tw:cursor-pointer tw:hover:text-white tw:hover:bg-[#fe007b] tw:w-[50%] tw:sm:tw:w-[40%] tw:transition"
        />

        <p v-if="emailSuccess" class="tw:text-green-600 tw:font-semibold">
          ✅ Message envoyé avec succès !
        </p>
        <p v-if="emailError" class="tw:text-red-600 tw:font-semibold">
          ❌ Une erreur est survenue, veuillez réessayer.
        </p>
      </form>
    </section>

    <!-- Footer -->
    <footer class="tw:text-center tw:bg-gray-100 tw:py-6 tw:text-sm">
      <p>&copy; 2025 Cleaneuse by Pauline — Tous droits réservés</p>
    </footer>
  </div>
</template>

<script setup>
import headerImage from '@/assets/accessoires-nettoyage-naturels-citron-bicarbonate-vinaigre.jpg'
import frameImage from '@/assets/cadre-automne-feuillage-coton-fleurs-seches-fond-blanc.jpg'
import InteractiveMap from '@/components/InteractiveMap.vue'
import frameAvailability from '@/assets/carte-fleurie-botanique-pour-invitation-ou-annonce-paysage.png'
import AvailabilityGrid from '@/components/AvailabilityGrid.vue'
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const services = [
  {
    title: '🏠 Entretien ménager courant',
    price: '16€ net / heure',
    items: [
      'Ménage quotidien ou hebdomadaire',
      'Nettoyage des sols (aspirateur, serpillière)',
      'Dépoussiérage des surfaces et objets',
      'Nettoyage des vitres et miroirs',
      'Entretien de la cuisine',
      'Nettoyage des sanitaires',
      'Désinfection des poignées, interrupteurs',
      'Rangement des pièces de vie'
    ]
  },
  {
    title: '🧺 Entretien du linge',
    price: 'Sur devis',
    items: ['Lavage du linge', 'Étendage / sèche-linge', 'Repassage', 'Pliage et rangement']
  },
  {
    title: '🧽 Nettoyage spécifique ou ponctuel',
    price: 'Sur devis',
    items: [
      'Ménage de printemps',
      'Nettoyage après déménagement',
      'Nettoyage après travaux',
      'Remise en état d’un logement très sale',
      'Nettoyage après événement',
      'Nettoyage des portes, plinthes, interrupteurs',
      'Entretien des meubles fragiles'
    ]
  },
  {
    title: '🧹 Entretien extérieur',
    price: 'Sur devis',
    items: [
      'Nettoyage de terrasse, balcon',
      'Balayage d’entrée ou garage',
      'Arrosage des plantes',
      'Petits travaux de jardinage'
    ]
  },
  {
    title: '👵 Aide à domicile douce',
    price: '16€ net / heure',
    items: ['Courses', 'Préparation de repas simples', 'Présence bienveillante']
  }
]

const form = ref({
  name: '',
  surname: '',
  email: '',
  place: '',
  subject: '',
  message: ''
})

const emailSuccess = ref(false)
const emailError = ref(false)

const sendEmail = async () => {
  try {
    await emailjs.send('service_6xub85j', 'template_iga0ylr', form.value, 'zNbMtvBNYdn8k3b1l')
    emailSuccess.value = true
    emailError.value = false
    form.value = { name: '', email: '', place: '', subject: '', message: '' }
  } catch (error) {
    emailSuccess.value = false
    emailError.value = true
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;800&display=swap');

.font-cursive {
  font-family: 'Great Vibes', cursive;
  color: #fe007b;
  font-size: 80px !important;
}

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

.holographic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.holographic-card {
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.5s ease;
}

.holographic-card h2 {
  color: #0ff;
  font-size: 2rem;
  position: relative;
  z-index: 2;
}

.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(0deg, transparent, transparent 30%, #fe007b);
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.holographic-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #fe007b;
}

.holographic-card:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
</style>
