<script>

import { mapActions, mapState } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  async mounted () {
    await this.fetchMovie()
  },
  methods: {
    ...mapActions(['fetchMovie'])
  },
  computed: {
    ...mapState(['movies'])
  }
}
</script>

<template>
  <div class="home">
    <div class="searchMovie">
      <input type="text" placeholder="Film secimi...">
      <button>Search</button>
    </div>
      <div v-for="movie in movies" :key="movie.imdbId">
        <MovieCard :data="movie"/>
      </div>
  </div>
</template>
