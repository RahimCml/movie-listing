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
    ...mapActions(['fetchMoviesSearch']),
    getMoviesWithSearch () {
      this.fetchMoviesSearch(this.search)
    }
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
      <button @click="getMoviesWithSearch">Search</button>
    </div>
    <div class="container">
      <div v-for="movie in movies" :key="movie.imdbId">
        <MovieCard :data="movie"/>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  justify-content: center;
}
</style>
