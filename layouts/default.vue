<template>
    <div>
        <NuxtLayout />
        <LanguageSwitcher />
        <!-- <Header :active="'game'" /> -->
        <slot style="width: 100%; position: relative;" />
        <!-- <Footer /> -->
    </div>
</template>

<script setup>
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';
</script>