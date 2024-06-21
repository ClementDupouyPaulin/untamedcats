<script setup>
  const route = useRoute()
  const messages = ref()
  useFetch('/getMessagesById/' + route.params.id).then((response) => {
    
    messages.value = response.data.value.messages
  })

</script>

<template>
  <div class="content">
    <div v-for="message in messages">
      <div class="card">
        <div class="card-nav">
          <h3>{{ message.title }}</h3> 
        </div>

        <div class="card-body">
          <p>{{ message.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {text-align: center; font-size: 1.5rem;}
</style>  