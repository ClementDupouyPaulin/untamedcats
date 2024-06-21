<script setup>
  const route = useRoute()
  const apiCall = await useFetch('/getMessagesById/' + route.params.id)

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
  </div>
</template>

<style scoped>

</style>