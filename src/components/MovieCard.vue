<script>

export default {
  name: 'MovieCard',
  props: {
    data: Object
  }
}
</script>
<template>
  <section>
    <div class="card">
      <div>
        <img class="card-image" :src="data.Poster" alt="image">
      </div>
      <h3>
        {{data.Title}}
      </h3>
      <p>Year: {{data.Year}} Type: {{data.Type}} </p>
    </div>
  </section>
</template>

 <style scoped>
.card {
  width: 270px;
  margin: 10px;
}
.card-image {
  height: 250px;
}
 </style>
