<template>
    <div class="footer">
      <div class="footer-left"></div>
      <div class="footer-center">
        <NuxtLink to="https://twitter.com/UntamedCats_" class="footer-brand">Twitter</NuxtLink>
        <NuxtLink to="https://www.instagram.com/untamedcatsofficial/" class="footer-brand">Instagram</NuxtLink>
      </div>
      <div class="footer-right">
        <NuxtLink to="/terms" class="footer-brand">Conditions d'utilisation</NuxtLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  .footer {
    background-color: rgba(51, 51, 51, 0.8);
    color: #fff;
    padding: 10px 20px; /* Reduced padding to decrease height */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-left {
    flex: 1;
  }
  
  .footer-center {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  
  .footer-right {
    flex: 1;
    text-align: right;
  }
  
  .footer-brand {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-brand:hover {
    color: #ddd;
  }
  </style>
  