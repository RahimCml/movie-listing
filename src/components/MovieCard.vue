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
      <div v-if="data">
        <h3>
          <router-link :to="`/movie/${data.Title}`">{{data.Title}}</router-link>
        </h3>
      </div>
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
