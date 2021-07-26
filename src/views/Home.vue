<script>

import { mapActions, mapState } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  data () {
    return {
      search: ''
    }
  },
  async create () {
    await this.fetchMoviesSearch()
  },
  methods: {
    ...mapActions(['fetchMoviesSearch'])
  },
  computed: {
    ...mapState(['movies'])
  }
}
</script>

<template>
  <div class="home">
    <div class="searchMovie">
      <input type="text" v-model="search" placeholder="Film seciniz...">
      <button @click="fetchMoviesSearch">Search</button>
    </div>
      <div v-for="movie in movies" :key="movie.imdbId">
        <MovieCard :data="movie"/>
      </div>
  </div>
</template>
