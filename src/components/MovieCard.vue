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
    <ul>
      <li v-for="movie in movies" :key="movie.Title">
        {{ movie.Title }}
      </li>
    </ul>
  </div>
</template>
