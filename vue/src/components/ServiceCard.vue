<template>
  <div class="tw:bg-white tw:rounded-lg tw:shadow-md tw:p-6 tw:space-y-4 tw:border tw:border-gray-200">
    <h3 class="tw:text-xl tw:font-bold" v-html="title"></h3>
    <p class="tw:text-gray-600 text-sm" v-html="desc"></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>