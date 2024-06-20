<template>
  <div class="footer">
    <NuxtLink to="https://twitter.com/UntamedCats_" class="footer-brand">
      <font-awesome-icon :icon="['fab', 'twitter']" /> Twitter
    </NuxtLink>
    <NuxtLink to="https://www.instagram.com/untamedcatsofficial/" class="footer-brand">
      <font-awesome-icon :icon="['fab', 'instagram']" /> Instagram
    </NuxtLink>
  </div>
</template>

<script setup>
import { NuxtLink } from '#app';
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.8rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
}

.footer-brand .fa-icon {
  margin-right: 5px;
  font-size: 1rem;
}
</style>
