<script setup>
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'

// const email = ref('')
// const password = ref('')
// const registerEmail = ref('')
// const registerPassword = ref('')
// const firstName = ref('')
// const lastName = ref('')
// const birthDate = ref('')
// const gender = ref('')
// const isRegistering = ref(false)
// const errorMessage = ref('')

// const router = useRouter()

// async function handleSubmit() {
//   try {
//     const response = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: email.value,
//         password: password.value
//       })
//     })

//     if (!response.ok) {
//       throw new Error('Erreur de connexion')
//     }

//     const data = await response.json()
//     console.log('Connexion réussie:', data)
//     router.push('/')
//   } catch (error) {
//     console.error('Erreur de connexion:', error)
//     errorMessage.value = error.message || 'Erreur de connexion'
//   }
// }

// async function handleRegister() {
//   const age = calculateAge(birthDate.value)
//   if (age < 3) {
//     errorMessage.value = "Âge minimal non requis."
//     return
//   }

//   try {
//     const response = await fetch('/api/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         firstName: firstName.value,
//         lastName: lastName.value,
//         birthDate: birthDate.value,
//         gender: gender.value,
//         email: registerEmail.value,
//         password: registerPassword.value
//       })
//     })

//     if (!response.ok) {
//       throw new Error('Erreur d\'inscription')
//     }

//     const data = await response.json()
//     console.log('Inscription réussie:', data)
//     switchToLogin()
//   } catch (error) {
//     console.error('Erreur d\'inscription:', error)
//     errorMessage.value = error.message || 'Erreur d\'inscription'
//   }
// }

// function loginWithGoogle() {
//   // Logique de connexion avec Google
//   console.log('Connexion avec Google')
//   // Ajoutez ici l'intégration avec Google Auth
// }

// function switchToRegister() {
//   isRegistering.value = true
// }

// function switchToLogin() {
//   isRegistering.value = false
// }

// function calculateAge(birthDate) {
//   const today = new Date()
//   const birthDateObj = new Date(birthDate)
//   let age = today.getFullYear() - birthDateObj.getFullYear()
//   const monthDiff = today.getMonth() - birthDateObj.getMonth()
//   if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
//     age--
//   }
//   return age
// }
</script>

<template>
  <div class="login-container">
    <div class="login-card" v-if="!isRegistering">
      <h2 class="title">Connexion</h2>
      <img src="public/cats/Chat3.png" alt="Chat" class="random-cat cat-login">
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Identifiant:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Se connecter</button>
        <button type="button" class="google-button" @click="loginWithGoogle">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Google
        </button>
      </form>
      <div class="switch-mode">
        <p>Pas de compte ? <a @click="switchToRegister">Inscrivez-vous</a></p>
      </div>
    </div>

    <div v-if="isRegistering" class="register-card">
      <h2 class="title">Inscription</h2>
      <img src="public/cats/Chat4.png" alt="Chat" class="random-cat cat-register">
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
          </select>
        </div>
        <div class="input-group">
          <label for="register-email">Email:</label>
          <input type="email" id="register-email" v-model="registerEmail" required />
        </div>
        <div class="input-group">
          <label for="register-password">Mot de passe:</label>
          <input type="password" id="register-password" v-model="registerPassword" required />
        </div>
        <button type="submit" class="register-button">S'inscrire</button>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div class="switch-mode">
        <p>Déjà un compte? <a @click="switchToLogin">Connectez-vous</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  position: relative;
  padding-top: 50px; /* Add some padding to push the form down */
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
