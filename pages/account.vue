<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const email = ref('');
const password = ref('');
const registerEmail = ref('');
const registerPassword = ref('');
const firstName = ref('');
const lastName = ref('');
const birthDate = ref('');
const gender = ref('');
const username = ref('');
const agreeToTerms = ref(false);
const isRegistering = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const router = useRouter();
const nuxtApp = useNuxtApp();

const user = computed(() => nuxtApp.$auth.getUser());

onMounted(() => {
  if (user.value) {
    router.push('/account');
  }
});

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function handleSubmit() {
  if (!validateEmail(email.value)) {
    errorMessage.value = 'Format de l\'email invalide';
    return;
  }

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Erreur de connexion');
    }

    nuxtApp.$auth.login(data.user);
    successMessage.value = 'Connexion réussie!';
    router.push('/account');
  } catch (error) {
    errorMessage.value = error.message || 'Erreur de connexion';
  }
}

async function handleRegister() {
  if (!agreeToTerms.value) {
    errorMessage.value = "Vous devez accepter les conditions d'utilisation.";
    return;
  }

  if (!validateEmail(registerEmail.value)) {
    errorMessage.value = 'Format de l\'email invalide';
    return;
  }

  const age = calculateAge(birthDate.value);
  if (age < 3) {
    errorMessage.value = "Âge minimal non requis.";
    return;
  }

  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        birthDate: birthDate.value,
        gender: gender.value,
        email: registerEmail.value,
        username: username.value,
        password: registerPassword.value
      })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Erreur d\'inscription');
    }

    nuxtApp.$auth.login(data.user);
    successMessage.value = 'Inscription réussie!';
    router.push('/account');
  } catch (error) {
    errorMessage.value = error.message || 'Erreur d\'inscription';
  }
}

function switchToRegister() {
  isRegistering.value = true;
}

function switchToLogin() {
  isRegistering.value = false;
}

function calculateAge(birthDate: string) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
}

function handleLogout() {
  nuxtApp.$auth.logout();
  router.push('/');
}
</script>

<template>
  <div v-if="user">
    <div class="account-info">
      <h2>Bienvenue, {{ user.firstName }}</h2>
      <p><strong>Nom:</strong> {{ user.lastName }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Âge:</strong> {{ calculateAge(user.birthDate) }} ans</p>
      <button @click="handleLogout" class="logout-button">Se déconnecter</button>
    </div>
  </div>
  <div v-else>
    <div class="content">
      <div class="login-container">
        <div class="login-card" v-if="!isRegistering">
          <h2 class="title">Connexion</h2>
          <img src="/public/cats/Chat3.png" alt="Chat" class="random-cat cat-login">
          <form @submit.prevent="handleSubmit">
            <div class="input-group">
              <label for="email">Identifiant:</label>
              <input type="text" id="email" v-model="email" required />
            </div>
            <div class="input-group">
              <label for="password">Mot de passe:</label>
              <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" class="login-button">Se connecter</button>
          </form>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <div class="switch-mode">
            <p>Pas de compte ? <a @click="switchToRegister">Inscrivez-vous</a></p>
          </div>
        </div>

        <div v-if="isRegistering" class="register-card">
          <h2 class="title">Inscription</h2>
          <img src="/public/cats/Chat4.png" alt="Chat" class="random-cat cat-register">
          <form @submit.prevent="handleRegister">
            <div class="input-group">
              <label for="firstname">Prénom:</label>
              <input type="text" id="firstname" v-model="firstName" required />
            </div>
            <div class="input-group">
              <label for="lastname">Nom:</label>
              <input type="text" id="lastname" v-model="lastName" required />
            </div>
            <div class="input-group">
              <label for="birthdate">Date de naissance:</label>
              <input type="date" id="birthdate" v-model="birthDate" required />
            </div>
            <div class="input-group">
              <label for="gender">Genre:</label>
              <select id="gender" v-model="gender" required>
                <option value="male">Homme</option>
                <option value="female">Femme</option>
                <option value="other">Autre</option>
                <option value="unknown">Préfère ne pas dire</option>
              </select>
            </div>
            <div class="input-group">
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="username" required />
            </div>
            <div class="input-group">
              <label for="register-email">Email:</label>
              <input type="email" id="register-email" v-model="registerEmail" required />
            </div>
            <div class="input-group">
              <label for="register-password">Mot de passe:</label>
              <input type="password" id="register-password" v-model="registerPassword" required />
            </div>
            <div class="input-group terms">
              <input type="checkbox" id="terms" v-model="agreeToTerms" required />
              <label for="terms">J'accepte les <NuxtLink to="/terms">conditions d'utilisation</NuxtLink></label>
            </div>
            <button type="submit" class="register-button">S'inscrire</button>
          </form>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <div class="switch-mode">
            <p>Déjà un compte? <a @click="switchToLogin">Connectez-vous</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.logout-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.logout-button:hover {
  background-color: #c82333;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.login-card, .register-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  text-align: center;
  transition: all 0.3s ease;
  overflow-y: auto;
  max-height: 90vh;
  position: relative; /* Make the card positioned relative */
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.input-group.terms {
  display: flex;
  align-items: center;
}

.input-group.terms input {
  margin-right: 10px;
}

.login-button, .register-button, .google-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}

.google-button {
  background-color: #db4437;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-button img {
  margin-right: 8px;
}

.google-button:hover {
  background-color: #c33d2e;
}

.login-button:hover, .register-button:hover {
  background-color: #0056b3;
}

.switch-mode {
  margin-top: 10px;
}

.switch-mode a {
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}

.switch-mode a:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.random-cat {
  position: absolute;
  width: 75px; /* Adjust the size as needed */
  height: auto;
  top: 10px; /* Position near the top */
  right: 10px; /* Position near the right */
}

.cat-login {
  top: 10px;
  right: 10px;
}

.cat-register {
  top: 10px;
  right: 10px;
}
</style>
