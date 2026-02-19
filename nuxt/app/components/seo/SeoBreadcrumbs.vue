<template></template>

<script setup lang="ts">
import { useHead } from '#imports'

type BreadcrumbItem = {
  position: number
  name: string
  item: string
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const ldJson = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: props.items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item
    }))
  })
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: ldJson.value
    }
  ]
})
</script>

