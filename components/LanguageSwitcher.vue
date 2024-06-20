<template>
    <div class="language-switcher">
      <button @click="toggleLocale">{{ currentLocale }}</button>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { locale } = useI18n();
  const currentLocale = computed(() => locale.value.toUpperCase());
  
  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'fr' : 'en';
  }
  </script>
  
  <style scoped>
  .language-switcher {
    position: fixed;
    bottom: 19px;
    right: 20px;
    z-index: 1000;
  }
  
  .language-switcher button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
  
  .language-switcher button:hover {
    background-color: #0056b3;
  }
  </style>
  