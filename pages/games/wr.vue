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
      <!-- explication des parametres -->
      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.settings.title') }}:</h3>
        </div>

          
      </div>
      <!-- explications des menus -->
      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.menus.title') }}:</h3>
        </div>

        
      </div>
      <!-- explication des classes -->
      <div class="card">
        <div class="card-nav">
          <h3 class="title">{{ $t('games.wr.classes.title') }}:</h3>
        </div>

        <div class="card-body">
          <h5 class="sub-title">Swordman:</h5>
          <p>{{ $t('games.wr.classes.contentSwordman') }}</p>
        </div>

        <div class="card-body">
          <h5 class="sub-title">Healer:</h5>
          <p>{{ $t('games.wr.classes.contentHealer') }}</p>
        </div>

        <div class="card-body">
          <h5 class="sub-title">Berserk:</h5>
          <p>{{ $t('games.wr.classes.contentBerserk') }}</p>
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

<style scoped>

</style>