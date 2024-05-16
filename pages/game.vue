<template>
  <div class="content">
    <div class="card">
      <div class="card-nav">
        <h3><NuxtLink class="link-title" to="/games/wr">Whiskers rebellion</NuxtLink></h3>
      </div>
      <div class="card-body">
        <div class="wr-bg"></div>
        <div class="row game-text">
          <div class="col-9">
            <p>Whiskers Rebellion est le premier jeu de Untamed Cats !</br>Dans ce jeu les joueurs auront l'occasion de découvrir un monde à la fois fantasy et burlesque.</br>Ce jeu reprend les codes des traditionnels J-RPG en y apportant une touche d'humour propre au studio ainsi qu'une toute nouvelle manière de jouer à ce genre de jeux : Le coop !</br>Fini l'époque où un jeu stratégique et classique était réservé à vos sessions de jeux solitaires. Vous allez maintenant pouvoir emmener vos amis dans les aventures rocambolesques de insérer_nom_royaume.</p>
          </div>
          <div class="col-3">
            <img class="image" src="public/whiskers_rebellion/logo.png"/>
          </div>
        </div>
        <!-- <div class="text-center">
          <button class="btn btn-success">{{ $t('games.discover') }}</button>
        </div> -->
        <!-- <div style="height: 500px"></div> -->
        </div>
      </div>
    </div>
</template>

<style>
  .link-title {
    padding: 5px 10px;
    color: transparent;  
    background: linear-gradient(90deg, rgb(15, 11, 88) 0%, rgb(133, 151, 179) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    border: none;
    margin: 0;
    width: fit-content;
  }

  .link-title:hover {
    padding: 5px 10px;
    color: #000000;  
    border: none;
    margin: 0;
    width: fit-content;
    cursor: pointer;
    text-decoration: none;
  }

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