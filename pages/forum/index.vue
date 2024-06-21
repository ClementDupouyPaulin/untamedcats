<script setup lang="ts">
const route = useRoute()
const apiCall = await useFetch('/getCategories')
const apiCallMessages = await useFetch('/getLatestMessages')

</script>
<template>
  <div class="content">
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
          <ul>
            <li v-for="category in apiCall.data.value.categories">
              <NuxtLink class="link" :to="'forum/' + category.id">{{ category.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-nav">
             <h3>{{ $t('forum.latest.title') }}</h3> 
          </div>
    
          <div class="card-body">
            <p>{{ $t('forum.latest.body') }}</p>
            <div v-for="message in apiCallMessages.data.value.messages">
              <div class="card message">
                <div class="card-nav">
                  <h3>{{ message.title }}</h3>
                </div>
    
                <div class="card-body">
                  <p>{{ message.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {text-align: center;}
ul {text-align: center;}
li {list-style-type: none; text-decoration: none;}
.link {text-decoration: none; color: #212529}
.link:hover {text-decoration: none; color: #FFFFFF}
.message{background-color: rgba(255, 255, 255, 0.8); margin-top: 30px;}
.message:hover{background-color: grey; transition-property: background-color; transition-duration: 0.3s; transition-delay: 0.05s; cursor: pointer}
.message:hover h3{color: white;background: none; transition-property: color; transition-duration: 0.3s; transition-delay: 0.05s;}
.message:hover {color: lightgrey; transition-property: color; transition-duration: 0.3s; transition-delay: 0.0005s;}
</style>