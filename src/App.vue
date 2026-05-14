<script setup lang="ts">
import axios from 'axios';


axios.get('https://db.ygoprodeck.com/api/v7/cardsets.php').then(odg => console.log(odg))

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
