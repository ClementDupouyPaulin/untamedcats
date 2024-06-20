<script setup>
  const pdfSection = ref()

</script>

<template>
  <div class="content">
<<<<<<< HEAD
    <h1 class="page-title">User Guide (Beta)</h1>
    <img src="/whiskers_rebellion/logo.png" alt="UntamedCats Logo" class="centered-image">

    <!-- explication du jeu -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(0)">{{ $t('games.wr.presentation.title') }}:</h3>
=======
    
      <h1 class="page-title">User Guide</h1>
      <!-- inserez le logo du jeu -->

      <!-- explication des touches -->
    <div ref="pdfSection">

      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.controls.title') }}:</h3>
        </div>

>>>>>>> 9d72c4c892ab3243dd4db70af8bfaa22c4f9ce9d
      </div>
      <div class="card-body" v-show="!(visible.indexOf(0) > -1)">
        <img src="../../public/userguide/pegi.png" alt="Presentation Image" class="section-image">
        <p v-html="$t('games.wr.presentation.contentpresentation')"></p>
      </div>
    </div>

    <!-- explication des touches -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(1)">{{ $t('games.wr.controls.title') }}:</h3>
      </div>
      <div class="card-body" v-show="!(visible.indexOf(1) > -1)">
        <p>
          Utilisations des flèches directionnelles, haut, bas, droite, gauche pour déplacer le joueur dans la direction souhaitée.
          <img src="../../public/userguide/fleches.png" alt="Controls Image" class="inline-image">
        </p>
        <p>
          Utilisation de la touche espace/space pour interagir avec les différents objets du décors.
          <img src="../../public/userguide/space.png" alt="Space Key" class="inline-image">
        </p>
        <p>
          Utilisation de la touche entrée pour sélectionner/valider dans les menus et les dialogues.
          <img src="../../public/userguide/entree.png" alt="Enter Key" class="inline-image">
        </p>
        <p>
          Utilisation de la touche Echap/Escape pour accéder au menu. Les touches sont toutes modifiables dans le menu Option.
          <img src="../../public/userguide/esc.png" alt="Escape Key" class="inline-image">
        </p>
      </div>
    </div>

    <!-- explications des menus -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(2)">{{ $t('games.wr.menus.title') }}:</h3>
      </div>
      <div class="card-body" v-show="!(visible.indexOf(2) > -1)">
        <p v-html="$t('games.wr.menus.contentmenu')"></p>
      </div>
    </div>

    <!-- explication des classes -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(3)">{{ $t('games.wr.classes.title') }}:</h3>
      </div>
      <div class="card-body" v-show="!(visible.indexOf(3) > -1)">
        <div>
          <h5 class="sub-title">Swordman:</h5>
          <img src="../../public/userguide/swordman.png" alt="Swordman" class="class-image">
          <p>{{ $t('games.wr.classes.contentSwordman') }}</p>
        </div>
        <div>
          <h5 class="sub-title">Healeuse:</h5>
          <img src="../../public/userguide/healeuse.png" alt="Healer" class="class-image">
          <p>{{ $t('games.wr.classes.contentHealer') }}</p>
        </div>
        <div>
          <h5 class="sub-title">Berserk:</h5>
          <img src="../../public/userguide/Barbare.png" alt="Berserk" class="class-image">
          <p>{{ $t('games.wr.classes.contentBerserk') }}</p>
        </div>
        <div>
          <h5 class="sub-title">Wizard:</h5>
          <!-- <img src="../../public/userguide/wizard.png" alt="Wizard" class="class-image"> -->
          <p>{{ $t('games.wr.classes.contentWizard') }}</p>
        </div>
      </div>
    </div>

    <!-- explications des maps -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(4)">{{ $t('games.wr.maps.title') }}:</h3>
      </div>
<<<<<<< HEAD
      <div class="card-body" v-show="!(visible.indexOf(4) > -1)">
        <!-- <img src="../../public/userguide/map.png" alt="Maps Image" class="section-image"> -->
        <p v-html="$t('games.wr.maps.contentmaps')"></p>
      </div>
    </div>

    <!-- explications des objets -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(5)">{{ $t('games.wr.objects.title') }}:</h3>
      </div>
      <div class="card-body" v-show="!(visible.indexOf(5) > -1)">
        <!-- <img src="../../public/userguide/objects.png" alt="Objects Image" class="section-image"> -->
        <p v-html="$t('games.wr.objects.contentobject')"></p>
      </div>
    </div>

    <!-- explication des systèmes de combats -->
    <div class="card">
      <div class="card-nav">
        <h3 class="link-title" @click="changeState(6)">{{ $t('games.wr.fight.title') }}:</h3>
      </div>
      <div class="card-body" v-show="!(visible.indexOf(6) > -1)">
        <!-- <img src="../../public/userguide/fight.png" alt="Fight Image" class="section-image"> -->
        <p v-html="$t('games.wr.fight.contentfight')"></p>
=======
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

        
>>>>>>> 9d72c4c892ab3243dd4db70af8bfaa22c4f9ce9d
      </div>
    </div>

    <p class="">
      <!-- <button class="" @click="exportToPDF('my-pdf-file.pdf', pdfSection)">Télécharger la version PDF</button> -->
    </p>
  </div>
</template>

<script setup>
const visible = ref([0, 1, 2, 3, 4, 5, 6])

function changeState(index) {
  if (visible.value.indexOf(index) > -1) {
    visible.value.splice(visible.value.indexOf(index), 1)
  } else {
    visible.value.push(index)
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 100px;
  margin-bottom: 20px;
}

.card {
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card-nav {
  cursor: pointer;
}

.link-title {
  color: #333;
}

.section-image {
  display: block;
  margin: 10px auto;
  max-width: 100px;
  margin-bottom: 10px;
}

.class-image {
  display: block;
  margin: 10px auto;
  max-width: 150px; /* Increase the size of the class images */
  margin-bottom: 10px;
}

.inline-image {
  max-width: 50px; /* Set a smaller size for the inline images */
  margin-left: 10px; /* Add some margin to the left */
}

.sub-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: #333;
}

.card-body p {
  color: #555;
}
</style>
