<script setup>
  const props = defineProps ({
    active: {
    type: String,
    required: true
    }
  })
</script>

<template>
  <div class="navbar">
      <NuxtLink to="/" class="navbar-brand">{{ $t('header.dashboard') }}</NuxtLink>
      <NuxtLink to="/game" class="navbar-brand">{{ $t('header.games') }}</NuxtLink>
      <NuxtLink to="/discover" class="navbar-brand">{{ $t('header.discover') }}</NuxtLink>
  </div>
</template>
<style scoped>
</style>