import { defineNuxtPlugin } from '#app';
import { useState } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('auth', {
    getUser() {
      return useState('user').value;
    },
    login(user) {
      useState('user').value = user;
    },
    logout() {
      useState('user').value = null;
    }
  });
});
