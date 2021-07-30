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
    <div class="wrapper">
      <div class="searchMovie">
        <input type="text" class="searchText" v-model="search" placeholder="Film seciniz...">
        <input type="submit" class="searchButton" @click="getMoviesWithSearch" value="GO">
      </div>
    </div>
    <div class="container" v-if="movies">
      <div v-for="movie in movies" :key="movie.imdbId">
        <MovieCard :data="movie"/>
      </div>
    </div>
    <div class="noFind" v-else>
      <h1>Movie is not found</h1>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
 body {
  margin: 0;
}
 .wrapper {
  display: flex;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
}
 .searchMovie {
  font-size: 0;
  width: 500px;
  height: 40px;
}
 input {
  padding: 0px;
  font-size: 18px;
  height: 100%;
  background: white;
  border: none;
}
.container {
  justify-content: center;
}
.noFind {
  padding: 10%
}
</style>
