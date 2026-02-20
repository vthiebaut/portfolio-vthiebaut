<template>
  <footer class="bg-black/90 text-white mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- Portfolio -->
        <div>
          <h3 class="font-bold text-[#fe007b] mb-3 uppercase text-sm tracking-wider">Portfolio</h3>
          <ul class="space-y-2 text-slate-300">
            <li><NuxtLink to="/" class="hover:text-white transition">Accueil</NuxtLink></li>
            <li><NuxtLink to="/#a-propos" class="hover:text-white transition">À propos</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-white transition">Services</NuxtLink></li>
            <li><NuxtLink to="/#projets" class="hover:text-white transition">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/#competences" class="hover:text-white transition">Compétences</NuxtLink></li>
            <li><NuxtLink to="/#parcours" class="hover:text-white transition">Formations</NuxtLink></li>
            <li><NuxtLink to="/#contact" class="hover:text-white transition">Contact</NuxtLink></li>
          </ul>
        </div>
        <!-- Expertises (pilier puis satellites puis Prestago) -->
        <div>
          <h3 class="font-bold text-[#fe007b] mb-3 uppercase text-sm tracking-wider">Expertises</h3>
          <ul class="space-y-2 text-slate-300">
            <li><NuxtLink to="/developpeur-web-dax" class="hover:text-white transition">Développeur web Dax</NuxtLink></li>
            <li><NuxtLink to="/freelance-symfony-landes" class="hover:text-white transition">Freelance Symfony Landes</NuxtLink></li>
            <li><NuxtLink to="/developpeur-react-native-freelance" class="hover:text-white transition">Développeur React Native</NuxtLink></li>
            <li><NuxtLink to="/maintenance-application-symfony" class="hover:text-white transition">Maintenance Symfony</NuxtLink></li>
            <li><NuxtLink to="/creation-application-mobile" class="hover:text-white transition">Création app mobile</NuxtLink></li>
            <li><NuxtLink to="/developpeur-vuejs-freelance" class="hover:text-white transition">Développeur Vue.js</NuxtLink></li>
            <li><NuxtLink to="/projet-prestago" class="hover:text-white transition">Étude de cas Prestago</NuxtLink></li>
          </ul>
        </div>
        <!-- Dépannage informatique -->
        <div>
          <h3 class="font-bold text-[#fe007b] mb-3 uppercase text-sm tracking-wider">Dépannage</h3>
          <ul class="space-y-2 text-slate-300">
            <li><NuxtLink to="/depannage-informatique-dax" class="hover:text-white transition">Dépannage Dax</NuxtLink></li>
            <li><NuxtLink to="/depannage-informatique-saint-paul-les-dax" class="hover:text-white transition">Dépannage Saint-Paul-lès-Dax</NuxtLink></li>
            <li><NuxtLink to="/depannage-informatique-landes" class="hover:text-white transition">Dépannage Landes</NuxtLink></li>
            <li><NuxtLink to="/reparation-ordinateur-dax" class="hover:text-white transition">Réparation ordinateur Dax</NuxtLink></li>
            <li><NuxtLink to="/reparation-pc-saint-paul-les-dax" class="hover:text-white transition">Réparation PC Saint-Paul-lès-Dax</NuxtLink></li>
            <li><NuxtLink to="/nettoyage-virus-dax" class="hover:text-white transition">Nettoyage virus Dax</NuxtLink></li>
            <li><NuxtLink to="/installation-ssd-dax" class="hover:text-white transition">Installation SSD Dax</NuxtLink></li>
            <li><NuxtLink to="/optimisation-pc-dax" class="hover:text-white transition">Optimisation PC Dax</NuxtLink></li>
          </ul>
        </div>
        <!-- Zones & contact -->
        <div>
          <h3 class="font-bold text-[#fe007b] mb-3 uppercase text-sm tracking-wider">Intervention</h3>
          <ul class="space-y-2 text-slate-300">
            <li><NuxtLink to="/zones-intervention" class="hover:text-white transition">Zones d'intervention</NuxtLink></li>
            <li><NuxtLink to="/#contact" class="hover:text-white transition">Me contacter</NuxtLink></li>
          </ul>
        </div>
        <!-- Coordonnées -->
        <div>
          <h3 class="font-bold text-[#fe007b] mb-3 uppercase text-sm tracking-wider">Coordonnées</h3>
          <ul class="space-y-2 text-slate-300 text-sm">
            <li>📧 contact@vthiebaut.fr</li>
            <li>📞 06 26 24 63 41</li>
            <li>📍 Dax, Landes (40)</li>
            <li>
              <a href="https://www.linkedin.com/in/valentin-thiebaut" target="_blank" rel="noopener" class="hover:text-white transition">LinkedIn</a>
              ·
              <a href="https://github.com/vthiebaut" target="_blank" rel="noopener" class="hover:text-white transition">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
        &copy; {{ new Date().getFullYear() }} Valentin Thiebaut — Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
