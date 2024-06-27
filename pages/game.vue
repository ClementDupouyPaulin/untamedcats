<template>
  <div class="content">
    <!-- Whiskers Rebellion Section -->
    <div class="card">
      <div class="card-nav">
        <h3><NuxtLink class="link-title" to="/games/wr">Whiskers Rebellion (2024)</NuxtLink></h3>
      </div>
      <div class="card-body">
        <div class="wr-bg"></div>
        <div class="row game-text">
          <div class="col-9">
            <p>Whiskers Rebellion est le premier jeu de Untamed Cats ! <br />Dans ce jeu les joueurs auront l'occasion de découvrir un monde à la fois fantasy et burlesque.<br /> Ce jeu reprend les codes des traditionnels J-RPG en y apportant une touche d'humour propre au studio ainsi qu'une toute nouvelle manière de jouer à ce genre de jeux : Le coop ! <br />Fini l'époque où un jeu stratégique et classique était réservé à vos sessions de jeux solitaires. Vous allez maintenant pouvoir emmener vos amis dans les aventures rocambolesques de Valéria.</p>
            <a href="public/whiskers_rebellion/Whiskers_Rebellion.zip" class="download-button" download>Télécharger Notre Jeu</a>
            <a href="https://www.oracle.com/fr/java/technologies/downloads/#jdk22-windows" class="download-button" target="_blank">Télécharger JDK</a>
            <p class="jdk-note">Vous devez télécharger le JDK pour jouer au jeu.</p>
          </div>
          <div class="col-3">
            <img class="image" src="/public/whiskers_rebellion/logo.png"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Warrior Cats: Clan Battles Section -->
    <div class="card">
      <div class="card-nav">
        <h3><NuxtLink class="link-title" to="/games/wc">Warrior Cats: Clan Battles (2025)</NuxtLink></h3>
      </div>
      <div class="card-body">
        <div class="wc-bg"></div>
        <div class="row game-text">
          <div class="col-9">
            <p>Warrior Cats: Clan Battles vous plonge dans un monde de félins guerriers où les clans de chats se battent pour le contrôle de leur territoire. <br />Dans ce jeu d'action stratégique, vous devez diriger votre clan, planifier des batailles et forger des alliances pour devenir le clan dominant. Avec des graphismes époustouflants et une histoire captivante, Warrior Cats: Clan Battles offre une expérience de jeu unique et immersive.</p>
          </div>
          <div class="col-3">
            <img class="image" src="/public/warriors_cats/Logo.webp"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.wr-bg {
  background-image: url('public/whiskers_rebellion/Whiskers_Rebellion_Map.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 400px;
}

.wc-bg {
  background-image: url('/public/warriors_cats/Game.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 400px;
}

.game-text {
  color: white;
  position: absolute;
  top: 15%;
  left: 5%;
  z-index: 2;
  width: 90%;
}

.download-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
}

.download-button:hover {
  background-color: #0056b3;
}

.jdk-note {
  margin-top: 10px;
  font-size: 14px;
  color: #ff0000;
}
</style>
