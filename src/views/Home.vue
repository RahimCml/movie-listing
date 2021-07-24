<script>

import { mapActions, mapState } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  async mounted () {
    console.log(this.data)
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
    <ul>
      <li v-for="movie in movies" :key="movie.Title">
        <MovieCard data="movie"/>
        <p>{{ movie.Title }} year {{movie.Year}}</p>
      </li>
    </ul>
  </div>
</template>
