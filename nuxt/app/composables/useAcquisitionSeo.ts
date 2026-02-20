/**
 * Données partagées pour les pages acquisition B2B (développeur freelance).
 * Utilisé pour SEO, JSON-LD et maillage interne.
 */
const BASE_URL = 'https://portfolio.vthiebaut.fr'
const CONTACT_EMAIL = 'contact@vthiebaut.fr'
const CONTACT_ANCHOR = '/#contact'

export const useAcquisitionSeo = () => {
  /** Schéma JSON-LD Person + ProfessionalService réutilisable */
  const personSchema = (options: {
    jobTitle: string
    description: string
    pageUrl: string
    knowsAbout: string[]
    serviceName?: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': ['Person', 'ProfessionalService'],
    name: 'Valentin Thiebaut',
    jobTitle: options.jobTitle,
    description: options.description,
    url: options.pageUrl,
    email: CONTACT_EMAIL,
    sameAs: [
      'https://www.linkedin.com/in/valentin-thiebaut',
      'https://github.com/vthiebaut'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dax',
      postalCode: '40100',
      addressRegion: 'Nouvelle-Aquitaine',
      addressCountry: 'FR'
    },
    knowsAbout: options.knowsAbout,
    areaServed: [{ '@type': 'Country', name: 'France' }],
    ...(options.serviceName
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: options.serviceName,
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: options.serviceName }
              }
            ]
          }
        }
      : {})
  })

  return {
    baseUrl: BASE_URL,
    contactEmail: CONTACT_EMAIL,
    contactAnchor: CONTACT_ANCHOR,
    personSchema
  }
}
