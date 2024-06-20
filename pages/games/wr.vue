<script setup>
  const pdfSection = ref()

</script>

<template>
  <div class="content">
    
      <h1 class="page-title">User Guide</h1>
      <!-- inserez le logo du jeu -->

      <!-- explication des touches -->
    <div ref="pdfSection">

      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.controls.title') }}:</h3>
        </div>

      </div>
      <div class="card-body">
        <div class="wr-bg"></div>
        <div class="row game-text">
          <div class="col-9">
            <p>Whiskers Rebellion est le premier jeu de Untamed Cats ! <br />Dans ce jeu les joueurs auront l'occasion de découvrir un monde à la fois fantasy et burlesque.<br /> Ce jeu reprend les codes des traditionnels J-RPG en y apportant une touche d'humour propre au studio ainsi qu'une toute nouvelle manière de jouer à ce genre de jeux : Le coop ! <br />Fini l'époque où un jeu stratégique et classique était réservé à vos sessions de jeux solitaires. Vous allez maintenant pouvoir emmener vos amis dans les aventures rocambolesques de Valéria.</p>
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
        
        <div class="card-body">
          <h5 class="sub-title">Wizard:</h5>
          <p>{{ $t('games.wr.classes.contentWizard') }}</p>
        </div>
      </div>


      <!-- explications des maps -->
      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.maps.title') }}:</h3>
        </div>

        
      </div>
      <!-- explications des objets -->
      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.objects.title') }}:</h3>
        </div>

        
      </div>

      <!-- explication des systèmes de combats -->
      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.fight.title') }}:</h3>
        </div>

        
      </div>
    </div>

    <p class="">
      <!-- <button class="" @click="exportToPDF('my-pdf-file.pdf', pdfSection)">Télécharger la version PDF</button> -->
    </p>
  </div>
</template>

<style>
  .wr-bg {
    background-image: url('/public/whiskers_rebellion/Whiskers_Rebellion_Map.png');
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

  p {
    font-size: larger;
  }
</style>
