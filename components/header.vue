<script setup>
  const props = defineProps ({
    active: {
    type: String,
    required: false
    }
  })
</script>

<template>
  <div class="navbar">
    <NuxtLink to="/" class="navbar-brand">{{ $t('header.dashboard') }}</NuxtLink>
    <NuxtLink to="/game" class="navbar-brand">{{ $t('header.games') }}</NuxtLink>
    <NuxtLink to="/discover" class="navbar-brand">{{ $t('header.discover') }}</NuxtLink>
    <NuxtLink to="/forum" class="navbar-brand">{{ $t('header.forum') }}</NuxtLink>
    <NuxtLink to="/account" class="navbar-brand">{{ $t('header.account') }}</NuxtLink>
  </div>
</template>
<style scoped>
</style>