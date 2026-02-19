<template></template>

<script setup lang="ts">
import { useHead } from '#imports'

type Address = {
  streetAddress: string
  postalCode: string
  addressLocality: string
  addressRegion: string
  addressCountry: string
}

type OpeningHours = {
  dayOfWeek: string[]
  opens: string
  closes: string
}

type Geo = {
  latitude: number
  longitude: number
}

type Props = {
  name: string
  url: string
  telephone: string
  address: Address
  areaServed?: string[]
  openingHours?: OpeningHours
  geo?: Geo
  sameAs?: string[]
  priceRange?: string
}

const props = defineProps<Props>()

const ldJson = computed(() => {
  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.name,
    '@id': `${props.url}#localbusiness`,
    url: props.url,
    telephone: props.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.address.streetAddress,
      postalCode: props.address.postalCode,
      addressLocality: props.address.addressLocality,
      addressRegion: props.address.addressRegion,
      addressCountry: props.address.addressCountry
    }
  }

  if (props.priceRange) {
    data.priceRange = props.priceRange
  }

  if (props.geo) {
    data.geo = {
      '@type': 'GeoCoordinates',
      latitude: props.geo.latitude,
      longitude: props.geo.longitude
    }
  }

  if (props.areaServed && props.areaServed.length > 0) {
    data.areaServed = props.areaServed.map((city) => ({
      '@type': 'City',
      name: city
    }))
  }

  if (props.openingHours) {
    data.openingHoursSpecification = {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: props.openingHours.dayOfWeek,
      opens: props.openingHours.opens,
      closes: props.openingHours.closes
    }
  }

  if (props.sameAs && props.sameAs.length > 0) {
    data.sameAs = props.sameAs
  }

  return JSON.stringify(data)
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: ldJson.value
    }
  ]
})
</script>

