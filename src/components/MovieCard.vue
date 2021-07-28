<script>

export default {
  name: 'MovieCard',
  props: {
    data: Object
  }
}
</script>

<template>
  <div class="movieCard">
      <img :src="data.Poster" alt="image">
      <div class="container">
        <p>
          {{data.Title}}
        </p>
    </div>
  </div>
</template>

 <style>
 </style>
