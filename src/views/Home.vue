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
    <div class="container" v-if="movies.Search">
      <div v-for="movie in movies.Search" :key="movie.imdbId">
        <MovieCard :data="movie"/>
      </div>
    </div>
    <div class="noFind" v-else>
      <h1>Movie is not found</h1>
    </div>
  </div>
</template>

<style scoped>
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
 .searchText {
  text-indent: 5px;
  border-radius: 5px 0 0 5px;
  border: 2px solid #1ac8ed;
  border-right: none;
  width: 420px;
  height: 100%;
}
 .searchButton {
  color: white;
  background-color: #1ac8ed;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  width: 80px;
}
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 25% 25% 25%;
  justify-content: center;
}
</style>
