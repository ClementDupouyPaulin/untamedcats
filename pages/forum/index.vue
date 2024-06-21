<script setup lang="ts">
const route = useRoute()
const apiCall = await useFetch('/getCategories')

</script>
<template>
  <div class="content">
    {{ apiCall }}
    <div class="card">
      <div class="card-nav">
         <h3>{{ $t('forum.welcome.title') }}</h3> 
      </div>

      <div class="card-body">
        <p>{{ $t('forum.welcome.body') }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-nav">
             <h3>{{ $t('forum.categories.title') }}</h3> 
          </div>
    
          <div class="card-body">
            <p>{{ $t('forum.categories.body') }}</p>
          </div>
          <!-- <ul>
            <li v-for="category in categories.categories">
s                <NuxtLink :to="'forum/' + category.id">{{ category.name }}</NuxtLink>
            </li>
          </ul> -->
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-nav">
             <h3>{{ $t('forum.latest.title') }}</h3> 
          </div>
    
          <div class="card-body">
            <p>{{ $t('forum.latest.body') }}</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {text-align: center;}
</style>