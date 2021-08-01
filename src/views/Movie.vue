<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'MovieAbout',
  methods: {
    ...mapActions(['fetchMovieByImdbID'])
  },
  computed: {
    ...mapState(['movie'])
  }
}
</script>

<template>
   <div class="home">
   </div>
</template>

<style scoped>
</style>
