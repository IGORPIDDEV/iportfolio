<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  titleTemplate: '%s | Igor Pidoprygora',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
    },
  ],
})
</script>

<style>
body {
  @apply font-sans;
}
</style>
