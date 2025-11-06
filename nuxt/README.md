# Portfolio Nuxt - Dépannage Informatique Dax

Site vitrine optimisé SEO pour le référencement "dépannage informatique Dax" avec Nuxt 3.

## 🚀 Fonctionnalités

- **SSR (Server-Side Rendering)** pour un SEO optimal
- **Structured Data (JSON-LD)** pour LocalBusiness
- **Meta tags optimisés** pour Google
- **Sitemap automatique** via @nuxtjs/seo
- **Optimisations locales** pour Dax et les Landes
- **Tailwind CSS** pour le styling
- **Backoffice** pour la gestion des commentaires

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Générer le site statique (SSG)
npm run generate
```

## 🔧 Configuration

Les variables d'environnement peuvent être définies dans un fichier `.env` :

```env
NUXT_PUBLIC_API_BASE=https://portfolio.vthiebaut.fr/api
NUXT_PUBLIC_EMAILJS_SERVICE_ID=service_anroc2d
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_rk9b4ei
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=zNbMtvBNYdn8k3b1l
```

## 🎯 Optimisations SEO

### Mots-clés ciblés
- dépannage informatique Dax
- réparation PC Dax
- informatique Dax
- montage PC Dax
- cours informatique Dax

### Structured Data
Le site inclut des données structurées Schema.org pour :
- LocalBusiness
- ServiceArea (Dax, Mont-de-Marsan, etc.)
- GeoCoordinates
- OpeningHours

### Meta tags
- Title optimisé avec "Dépannage Informatique Dax"
- Description avec mots-clés locaux
- Open Graph pour les réseaux sociaux
- Geo tags pour le référencement local

## 📁 Structure

```
nuxt/
├── assets/          # Images, CSS
├── components/     # Composants Vue
├── composables/    # Composables (useApi, etc.)
├── middleware/     # Middleware d'authentification
├── pages/          # Pages (routes)
│   ├── index.vue   # Page d'accueil
│   └── backoffice/ # Pages d'administration
├── public/         # Fichiers statiques
└── nuxt.config.ts  # Configuration Nuxt
```

## 🌐 Déploiement

### Build statique (recommandé pour SEO)
```bash
npm run generate
# Le dossier .output/public contient le site statique
```

### SSR
```bash
npm run build
# Le dossier .output contient l'application SSR
```

## 📝 Notes

- Le site utilise Nuxt 3 avec SSR par défaut
- Pour le SEO maximum, utiliser `generate` pour créer un site statique
- Les images doivent être placées dans `public/images/` ou `assets/images/`
- Le backoffice nécessite une authentification via l'API Symfony
