<template>
  <div class="tw:font-sans tw:text-gray-800 tw:bg-gray-100">
    <!-- Header -->
    <header
      id="accueil"
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

    <section id="produits-naturels" class="tw:py-8 tw:px-4 tw:bg-gray-100">
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
          <h2 class="tw:text-4xl tw:font-bold tw:mb-4 font-cursive tw:text-[#fe007b]">
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

    <section
      id="mes-équipements"
      class="tw:py-8 tw:px-4 tw:bg-gray-100 tw:mx-auto tw:max-w-[1500px]"
    >
      <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-10 font-cursive">
        🧼 Mes équipements
      </h2>

      <div class="tw:flex tw:flex-wrap tw:justify-center">
        <div
          v-for="equipment in equipments"
          :key="equipment.shortLabel"
          class="card tw:w-full tw:px-2 tw:mb-6 tw:basis-full tw:max-w-full tw:md:basis-1/2 tw:md:max-w-1/2 tw:lg:basis-1/3 tw:lg:max-w-1/3"
        >
          <h2 class="tw:font-bold tw:text-xl tw:w-full tw:text-center tw:mb-2">
            {{ equipment.emoji }} {{ equipment.shortLabel }}
          </h2>

          <div class="card-inner tw:w-full tw:h-full tw:bg-white tw:rounded-lg tw:shadow-sm">
            <div class="card-front tw:bg-white tw:flex tw:items-center tw:justify-center tw:p-4">
              <img
                :src="equipment.image"
                :alt="equipment.shortLabel"
                class="tw:object-contain tw:bg-white tw:rounded-lg"
              />
            </div>

            <div class="card-back tw:flex-col tw:justify-start tw:items-start tw:p-4 tw:text-left">
              <p class="tw:font-semibold tw:mb-2">{{ equipment.catchphrase }}</p>

              <p class="tw:text-sm tw:mb-2">{{ equipment.description }}</p>

              <p class="tw:font-semibold tw:mb-1">✅ Idéale pour :</p>
              <ul class="tw:text-sm tw:list-disc tw:pl-4 tw:mb-2">
                <li v-for="(use, idx) in equipment.uses" :key="idx">{{ use }}</li>
              </ul>

              <p class="tw:text-sm tw:mt-2">{{ equipment.conclusion }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="mes-services" class="tw:relative tw:py-8 tw:px-[50px] tw:bg-white">
      <div class="tw:text-6xl tw:font-bold tw:mb-12 tw:text-center font-cursive">Mes services</div>

      <div
        class="tw:flex tw:flex-wrap tw:justify-center tw:gap-8 tw:items-stretch holographic-container"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="tw:w-full tw:sm:tw:w-[calc(50%-1rem)] tw:max-w-[500px] tw:rounded-xl tw:shadow-md tw:p-6 tw:flex tw:flex-col tw:gap-2 tw:min-h-[450px] holographic-card"
        >
          <p class="tw:font-semibold tw:text-center tw:text-3xl">{{ service.title }}</p>
          <p class="tw:font-bold tw:text-center tw:text-xl">{{ service.price }}</p>
          <ul class="tw:mt-2 tw:space-y-1">
            <li v-for="(item, i) in service.items" :key="i" class="tw:flex tw:items-start tw:gap-2">
              <span class="tw:text-[#fe007b] tw:font-bold">›</span>
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
      id="mes-disponibilités"
      class="tw:min-h-[1100px] tw:flex tw:flex-col tw:justify-center tw:items-center tw:px-4 tw:bg-white tw:bg-cover tw:bg-center tw:bg-no-repeat"
      :style="sectionStyle"
    >
      <div class="tw:text-6xl tw:font-bold tw:mb-8 tw:text-center font-cursive">
        Mes disponibilités
      </div>
      <div class="tw:max-w-[1200px] tw:w-full tw:mx-auto">
        <AvailabilityGrid />
      </div>
    </section>

    <section id="zone-intervention" class="tw:py-8 tw:px-4 tw:text-center tw:bg-white">
      <div class="tw:text-6xl tw:font-bold tw:mb-8 font-cursive">Ma zone d'intervention</div>
      <InteractiveMap />
    </section>

    <section id="me-contacter" class="tw:py-8 tw:px-4 tw:text-center tw:bg-gray-100">
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
          class="tw:border tw:bg-white tw:border-black tw:rounded-lg tw:p-2 tw:cursor-pointer tw:hover:text-white tw:hover:bg-[#fe007b] tw:w-[50%] tw:sm:tw:w-[40%] tw:transition"
        />

        <p v-if="emailSuccess" class="tw:text-green-600 tw:font-semibold">
          ✅ Message envoyé avec succès !
        </p>
        <p v-if="emailError" class="tw:text-red-600 tw:font-semibold">
          ❌ Une erreur est survenue, veuillez réessayer.
        </p>
      </form>
    </section>

    <section id="faq" class="tw:py-8 tw:px-4 tw:bg-white tw:mx-auto tw:w-full">
      <div class="tw:flex tw:flex-col tw:max-w-6xl tw:mx-auto">
        <h2 class="tw:text-4xl tw:font-bold tw:text-center tw:mb-8 font-cursive">
          ❓ Foire aux questions
        </h2>

        <div class="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-6 tw:items-start">
          <details class="tw:bg-gray-100 tw:rounded-lg tw:p-4 tw:shadow-sm">
            <summary class="tw:cursor-pointer tw:font-semibold tw:text-lg">
              Acceptez-vous les paiements CESU ?
            </summary>
            <p class="tw:mt-2 tw:text-gray-700">
              Oui, je suis agréée pour accepter les paiements via le Chèque Emploi Service Universel
              (CESU). Ce mode de règlement est très avantageux : il permet de bénéficier d’un crédit
              ou d’une réduction d’impôt de 50% sur les sommes versées. Vous avez ainsi la
              possibilité de simplifier les démarches administratives tout en réalisant des
              économies.
            </p>
          </details>

          <details class="tw:bg-gray-100 tw:rounded-lg tw:p-4 tw:shadow-sm">
            <summary class="tw:cursor-pointer tw:font-semibold tw:text-lg">
              Fournissez-vous les produits de nettoyage ?
            </summary>
            <p class="tw:mt-2 tw:text-gray-700">
              Oui, je peux intervenir avec mes propres produits d’entretien naturels et écologiques
              (vinaigre blanc, savon noir, bicarbonate, pierre d’argile, etc.). Ce sont des produits
              sains, efficaces, respectueux de l’environnement et adaptés aux personnes sensibles ou
              allergiques. Si vous préférez que j’utilise vos produits, c’est bien sûr possible
              également.
            </p>
          </details>

          <details class="tw:bg-gray-100 tw:rounded-lg tw:p-4 tw:shadow-sm">
            <summary class="tw:cursor-pointer tw:font-semibold tw:text-lg">
              Dans quelle zone intervenez-vous ?
            </summary>
            <p class="tw:mt-2 tw:text-gray-700">
              J’interviens principalement autour de Saint-Vincent-de-Paul (40990) et dans un rayon
              de 10 kilomètres environ. Cela inclut des communes voisines comme Dax, Narrosse,
              Rivière-Saas-et-Gourby, et autres alentours. N’hésitez pas à me contacter si vous êtes
              un peu en dehors de cette zone : je reste à l’écoute pour étudier votre demande au cas
              par cas.
            </p>
          </details>

          <details class="tw:bg-gray-100 tw:rounded-lg tw:p-4 tw:shadow-sm">
            <summary class="tw:cursor-pointer tw:font-semibold tw:text-lg">
              Puis-je demander un devis gratuit ?
            </summary>
            <p class="tw:mt-2 tw:text-gray-700">
              Oui, bien sûr ! Le devis est totalement gratuit et sans engagement. Il vous permet
              d’avoir une estimation claire du coût de l’intervention en fonction de vos besoins
              spécifiques. Vous pouvez me contacter par téléphone, e-mail ou directement via le
              formulaire de contact présent sur cette page. Je vous répondrai dans les plus brefs
              délais.
            </p>
          </details>
        </div>
      </div>
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
import imgShampouineuse from '@/assets/shampouineuse-canapé-lit-matelas-fauteuils-voitures.jpg'
import imgBrosse from '@/assets/brosse-electrique-salle-de-bain.jpg'
import imgSavon from '@/assets/savon-noir.png'
import imgVinaigre from '@/assets/vinaigre-blanc-ménager.png'
import imgPierre from '@/assets/pierre-du-droguiste-briochin.jpg'
import imgChiffons from '@/assets/chiffons-microfibres.png'
import AvailabilityGrid from '@/components/AvailabilityGrid.vue'
import { ref, computed } from 'vue'
import emailjs from 'emailjs-com'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const sectionStyle = computed(() => {
  return width.value >= 768 ? { backgroundImage: `url(${frameAvailability})` } : {}
})

const equipments = [
  {
    shortLabel: 'Brosse électrique de nettoyage',
    emoji: '⚡',
    image: imgBrosse,
    catchphrase: 'Un coup de boost pour votre ménage',
    description:
      'La brosse électrique de nettoyage vous aide à éliminer rapidement la saleté incrustée, sans effort. Grâce à ses têtes rotatives motorisées, elle déloge les résidus les plus tenaces tout en protégeant les surfaces.',
    uses: [
      'Joints de carrelage',
      'Baignoires et douches',
      'Plaques de cuisson',
      'Recoins difficiles d’accès'
    ],
    conclusion:
      '🔋 Sans fil et rechargeable, elle offre une autonomie confortable pour un nettoyage complet, même dans les zones étroites. 🌟 Résultat : un intérieur plus propre, en deux fois moins de temps et sans fatigue !'
  },
  {
    shortLabel: 'Lingette microfibre',
    emoji: '✨',
    image: imgChiffons,
    catchphrase: 'Un nettoyage doux, efficace… et sans trace',
    description:
      'Grâce à ses fibres ultra-fines, elle capture poussières, graisses et saletés en un seul passage, sans besoin de produit chimique.',
    uses: [
      'Surfaces vitrées (miroirs, fenêtres, lunettes…)',
      'Écrans et appareils électroniques',
      'Plans de travail et inox',
      'Poussières sur meubles ou objets délicats'
    ],
    conclusion:
      '🌿 Lavable et réutilisable, la microfibre est une solution écologique et économique. Douce au toucher, elle n’abîme pas les surfaces, ne laisse aucune trace, et offre une finition brillante.'
  },
  {
    shortLabel: 'La Pierre du Droguiste – Briochin',
    emoji: '🧽',
    image: imgPierre,
    catchphrase: 'Le nettoyant multi-usage naturel par excellence',
    description:
      'Fabriquée à base d’argile naturelle et enrichie en savon noir et bicarbonate, elle nettoie, dégraisse, fait briller et protège.',
    uses: [
      'Évier inox, plaques vitrocéramiques, hottes',
      'Joints de salle de bain, carrelage, robinetterie',
      'Chaussures, semelles, mobilier de jardin',
      'Argent, cuivre, bijoux…'
    ],
    conclusion:
      '🧼 Fournie avec une éponge, elle suffit à frotter, rincer… et admirer. 🌿 Sans conservateur, sans colorant, cette pierre est biodégradable, économique et fabriquée en France.'
  },
  {
    shortLabel: 'Shampouineuse professionnelle',
    emoji: '🧼',
    image: imgShampouineuse,
    catchphrase: 'Un nettoyage en profondeur pour vos tissus, tapis et moquettes',
    description:
      'Grâce à notre shampouineuse performante, offrez une seconde jeunesse à vos textiles d’intérieur. Cet appareil injecte un mélange d’eau et de détergent naturel directement au cœur des fibres, détache efficacement la saleté, puis aspire l’ensemble pour un résultat impeccable et sans humidité persistante.',
    uses: ['Tapis & moquettes', 'Canapés & fauteuils en tissu', 'Matelas & sièges de voiture'],
    conclusion: '✨ Résultat : un intérieur propre, assaini, sans traces ni odeurs.'
  },
  {
    shortLabel: 'Vinaigre blanc',
    emoji: '🍋',
    image: imgVinaigre,
    catchphrase: 'L’indispensable allié naturel pour un ménage efficace et écologique',
    description:
      'Le vinaigre blanc, aussi appelé vinaigre d’alcool ou vinaigre cristal, est un produit multi-usage 100 % naturel. Grâce à son acidité, il nettoie, détartre, désinfecte et désodorise en profondeur, sans aucun composant chimique nocif.',
    uses: [
      'Détartrant pour robinets, pommeaux de douche, bouilloires, cafetières…',
      'Nettoyant multi-surfaces (plans de travail, vitres, carrelages…)',
      'Désinfectant naturel (cuisine, toilettes, poubelles…)',
      'Adoucissant pour le linge (à verser dans le bac de rinçage de la machine)'
    ],
    conclusion:
      '🌱 Respectueux de votre santé et de la planète, le vinaigre blanc est une alternative simple, économique et écologique aux produits ménagers industriels.'
  },
  {
    shortLabel: 'Savon noir',
    emoji: '🧼',
    image: imgSavon,
    catchphrase: 'Un nettoyant naturel puissant et polyvalent',
    description:
      'Le savon noir est un produit ménager d’origine végétale, traditionnellement fabriqué à base d’huile d’olive ou de lin. Sans solvant ni additif chimique, il est reconnu pour ses propriétés dégraissantes, nettoyantes et détachantes.',
    uses: [
      'Sol : nettoie et nourrit tous les types de sols (carrelage, parquet, tomettes…)',
      'Cuisine : dégraisse plans de travail, hottes, plaques de cuisson',
      'Salle de bain : fait briller robinetterie, faïence et parois de douche',
      'Textile : détache efficacement les vêtements avant lavage'
    ],
    conclusion:
      '🌿 Écologique, économique et biodégradable, le savon noir est un incontournable de l’entretien naturel de la maison.'
  }
]

const services = [
  {
    title: '🏠 Entretien ménager courant',
    price: '16€ net / heure (avec vos produits) - 18€ net / heure (avec mes produits)',
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
  background: #f3f4f6;
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

/* Si tu utilises un fichier CSS global */
details[open] summary ~ * {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  width: 200px;
  height: 500px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-front {
  background: white;
  border: 1px solid #e5e7eb;
}

.card-back {
  background: #fe007baa;
  color: black;
  transform: rotateY(180deg);
  padding: 1rem;
  text-align: center;
}
</style>
