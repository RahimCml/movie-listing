<script>

import { mapActions, mapState } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'
import { debounce } from 'debounce'

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
    debounceInput: debounce(function (e) {
      this.fetchMoviesSearch(this.search = e.target.value)
    })
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
        <input type="text" v-on:input="debounceInput" class="searchText" v-model="search" placeholder="Film seciniz...">
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
  width: 110%;
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
  width: 30%;
  height: 100%;
}
.container {
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
}
</style>
