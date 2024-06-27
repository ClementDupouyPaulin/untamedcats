<script setup>

const teamMembers = ref([
  { name: 'CLEMENT', role: 'Network System', photo: '/members/Clement.jpg' },
  { name: 'FEDERICO', role: 'Full Stack Dev', photo: '/members/Federico.png' },
  { name: 'THOMAS', role: 'Project Manager', photo: '/members/Thomas.jpg' },
  { name: 'BASTIEN', role: 'Tech Lead', photo: '/members/Bastien.jpg' },
  { name: 'SARAH', role: 'Community Manager', photo: '/members/sarah.png' },
]);
</script>

<template>
  <div class="content">
    <section class="intro">
      <h2>Découvrez-nous</h2>
      <p>
        Bienvenue chez Untamed Cats ! Fondé en 2024, notre studio se consacre à la création de jeux vidéo immersifs et uniques. Nous sommes une petite équipe passionnée qui s'inspire des jeux vidéo classiques tout en cherchant à offrir des expériences nouvelles et innovantes.
      </p>
      <img src="public/cats/Chat4.png" alt="Chat" class="random-cat cat4">
    </section>

    <section class="history">
      <h3>Notre Histoire</h3>
      <p>
        Untamed Cats a été fondé par une équipe de développeurs passionnés qui partagent une vision commune : créer des jeux vidéo qui mettent les joueurs au centre de l'expérience. Depuis notre création, nous avons travaillé sans relâche pour développer des jeux qui allient plaisir de jeu, narration immersive et mécaniques innovantes.
      </p>
      <img src="public/cats/Chat1.png" alt="Chat" class="random-cat cat1">
    </section>

    <section class="our-work">
      <h3>Ce Que Nous Faisons</h3>
      <p>
        Chez Untamed Cats, nous nous concentrons sur le développement de petits jeux vidéo qui offrent une expérience enrichissante. Notre premier projet, "Whiskers Rebellion", est un jeu d'aventure captivant où les joueurs peuvent explorer un monde fantastique rempli de secrets et de défis.
      </p>
      <p>
        Nous croyons que chaque jeu doit offrir quelque chose de spécial, que ce soit à travers son gameplay, son histoire, ou son design. C'est pourquoi nous mettons un point d'honneur à expérimenter et à innover dans chaque aspect de notre travail.
      </p>
      <img src="public/cats/Chat2.png" alt="Chat" class="random-cat cat2">
    </section>

    <section class="team">
      <h3>Notre Équipe</h3>
      <div class="team-container">
        <div class="team-member" v-for="member in teamMembers" :key="member.name">
          <NuxtLink :to="'/members/' + member.name">
            <img :src="member.photo" :alt="member.name" class="team-photo">
            <h4>{{ member.name }}</h4>
            <p>{{ member.role }}</p>
          </NuxtLink>

        </div>
      </div>
      <img src="public/cats/Chat3.png" alt="Chat" class="random-cat cat3">
    </section>
  </div>
</template>

<style scoped>
.content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.intro, .history, .our-work, .team {
  position: relative;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.intro {
  margin-top: 60px; /* Add margin-top to move the intro section down */
}

h2, h3, h4 {
  color: #333;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.team-member {
  text-align: center;
  margin: 20px;
  width: 130px; /* Reduced width */
}

.team-photo {
  width: 130px; /* Reduced width */
  height: 180px; /* Reduced height */
  object-fit: cover; /* Ensure the photos cover the container proportionally */
  border-radius: 10px;
  border: 5px solid #ccc;
  transition: all 0.3s; /* Add transition effect */
}

.team-photo:hover {
  width: 156px;
  height: 216px;
  object-fit: cover; /* Ensure the photos cover the container proportionally */
  border-radius: 10px;
  border: 5px solid #ccc;
  transition: all 0.3s; /* Add transition effect */
  cursor: pointer;
}

.team-member h4 {
  margin-top: 10px;
  font-size: 18px; /* Reduced font size */
  font-weight: bold;
}

.team-member p {
  margin-top: 5px;
  font-size: 14px; /* Reduced font size */
  color: #777;
}

.team-member:nth-child(odd) .team-photo {
  border-color: #f0f;
}

.team-member:nth-child(even) .team-photo {
  border-color: #0ff;
}

.random-cat {
  position: absolute;
  width: 80px; /* Reduced size */
  height: auto;
  right: 10px; /* Positioned inside the white section */
  top: 10px; /* Positioned inside the white section */
}

.cat1 {
  top: -5px;
}

.cat2 {
  top: -10px;
  width: 60px; /* Further reduced size */
}

.cat3 {
  top: 0px;
}

.cat4 {
  top: 0px;
}
</style>
