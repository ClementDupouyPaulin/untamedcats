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
    <!-- <div class="navbar-container">
      [image]
    </div> -->
    <!-- <div class="navbar-container"> -->
        <NuxtLink to="/" class="navbar-brand">{{ $t('header.dashboard') }}</NuxtLink>
        <NuxtLink to="/game" class="navbar-brand">{{ $t('header.games') }}</NuxtLink>
        <NuxtLink to="/discover" class="navbar-brand">{{ $t('header.discover') }}</NuxtLink>
        <NuxtLink to="/account" class="navbar-brand">{{ $t('header.account') }}</NuxtLink>
    <!-- </div> -->
  </div>
</template>
<style scoped>
</style>