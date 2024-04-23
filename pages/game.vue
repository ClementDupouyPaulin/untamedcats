<template>
  <Header :active="'game'" />
  <div class="content">
    <div class="card">
      <div class="card-nav">
        <h3><NuxtLink class="link-title" to="/games/projectR">Whiskers rebellion</NuxtLink></h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-9">
            <p>Ceci est le premier paragraphe pour le jeux project R ( faut vraiment choisir un nom aled)</p>
          </div>
          <div class="col-md-3 float-end">[image]</div>
        </div>
        <div class="text-center">
          <button class="btn btn-success">{{ $t('games.discover') }}</button>
        </div>
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
</style>