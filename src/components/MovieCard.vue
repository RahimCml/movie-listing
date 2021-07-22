<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'MovieCard',
  data () {
    return {
      selectedMoive: ''
    }
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
  <div class="movieCard">
    <div class="searchMovie">
      <input type="text" placeholder="Film secimi...">
      <button>Search</button>
    </div>
    <ul>
      <li v-for="movie in movies" :key="movie.Title">
        {{ movie.Title }}
      </li>
    </ul>
  </div>
</template>
