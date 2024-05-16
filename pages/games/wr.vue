<script setup>
  // const html2pdf = useState('html2pdf')

  // function downloadPDF() {
  //   html2Pdf.value.generatePdf()
  // }

</script>

<template>
  <div class="content">
    <!-- <vue3-html2pdf  :show-layout="true"
                    :float-layout="false"
                    :enable-download="true"
                    :preview-modal="false"
                    filename="CopiePatient"
                    :pdf-quality="2"
                    pdf-format="a4"
                    pdf-orientation="portrait"
                    pdf-content-width="800px"
                    :manual-pagination="true"
                    ref="html2Pdf"
    > -->

      <!-- <div class="html2pdf__page-break"/> -->
    
      <h1 class="page-title">User Guide</h1>
      <!-- inserez le logo du jeu -->

      <!-- explication des touches -->
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

      <!-- <div class="html2pdf__page-break"/> J'imagine--> 

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
    <!-- </vue3-html2pdf> -->

    <!-- <p class="">
      <button class="" @click="downloadPDF()">Télécharger la version PDF</button>
    </p> -->
  </div>
</template>

<style scoped>

</style>