<template></template>

<script setup lang="ts">
import { useHead } from '#imports'

type FaqItem = {
  question: string
  answer: string
}

const props = defineProps<{
  items: FaqItem[]
}>()

const ldJson = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
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

