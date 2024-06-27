<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const message = ref('');

onMounted(() => {
  const type = route.query.type;
  if (type === 'login') {
    message.value = 'Connexion réussie!';
  } else if (type === 'register') {
    message.value = 'Inscription réussie!';
  } else {
    router.push('/');
  }
});
</script>

<template>
  <div class="success-message">
    <h1>{{ message }}</h1>
    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
  </div>
</template>

<style scoped>
.success-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #28a745;
}
</style>
