<script setup>
  const route = useRoute()
  const apiCall = await useFetch('/getMessagesByCategory/' + route.params.id)
</script>

<template>
  <div class="content">
    <div class="card">
      <div class="card-nav">
        <h3>{{ apiCall.data.value.category[0].name }}</h3>
      </div>

      <div class="card-body">
        <p>{{ apiCall.data.value.category[0].description }}</p>
      </div>

    </div> 
    <div class="row">
      <div v-for="message in apiCall.data.value.messages" class="col-md-4">

        <a :href="'/message/' + message.id">
          <div class="card message">
            <div class="card-nav">
              <h3>{{ message.title }}</h3>
            </div>
            <div class="card-body">
              <p>{{ message.content }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
  p {text-align: center}
  a {text-decoration: none ; color: #212529}
  .message{background-color: rgba(255, 255, 255, 0.8); margin-top: 30px;}
  .message:hover{background-color: grey; transition-property: background-color; transition-duration: 0.3s; transition-delay: 0.05s; cursor: pointer}
  .message:hover h3{color: white;background: none; transition-property: color; transition-duration: 0.3s; transition-delay: 0.05s;}
  .message:hover {color: lightgrey; transition-property: color; transition-duration: 0.3s; transition-delay: 0.0005s;}
</style>