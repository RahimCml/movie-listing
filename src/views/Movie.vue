<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'MovieAbout',
  data () {
    return {
      isLoading: true
    }
  },
  async created () {
    await this.fetchMovieByImdbID(this.$route.params.Title)
    this.isLoading = false
  },
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
