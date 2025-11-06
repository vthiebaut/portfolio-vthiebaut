<template>
  <div class="bg-white rounded-lg shadow-md p-6 space-y-4 border border-gray-200">
    <h3 class="text-xl font-bold" v-html="title"></h3>
    <p class="text-gray-600 text-sm" v-html="desc"></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

