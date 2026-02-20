import { useSeoMeta, useHead } from '#imports'

type BreadcrumbItem = {
  position: number
  name: string
  item: string
}

type FaqItem = {
  question: string
  answer: string
}

type LocalSeoOptions = {
  url: string
  title: string
  description: string
  twitterCard?: 'summary' | 'summary_large_image'
  ogType?:
    | 'website'
    | 'article'
    | 'book'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_status'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
  ogLocale?: string
  breadcrumbItems?: BreadcrumbItem[]
  faqItems?: FaqItem[]
  canonical?: string
  /** JSON-LD Person ou ProfessionalService pour les pages acquisition B2B */
  personOrServiceSchema?: Record<string, unknown>
}

export const useLocalSeoHead = (options: LocalSeoOptions) => {
  const {
    url,
    title,
    description,
    twitterCard = 'summary',
    ogType = 'website',
    ogLocale = 'fr_FR',
    breadcrumbItems,
    faqItems,
    canonical: canonicalUrl,
    personOrServiceSchema
  } = options

  const canonical = canonicalUrl ?? url

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType,
    ogUrl: url,
    ogLocale,
    twitterCard,
    twitterTitle: title,
    twitterDescription: description
  })

  const scripts: { type: string; children: string }[] = []

  if (personOrServiceSchema) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify(personOrServiceSchema)
    })
  }

  if (faqItems && faqItems.length > 0) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      })
    })
  }

  if (breadcrumbItems && breadcrumbItems.length > 0) {
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item) => ({
          '@type': 'ListItem',
          position: item.position,
          name: item.name,
          item: item.item
        }))
      })
    })
  }

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonical
      }
    ],
    script: scripts
  })
}

