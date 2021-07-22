<script>

import { mapActions, mapState } from 'vuex'

export default {
  name: 'MovieCard',
  data () {
    return {
      selectedMoive: ''
    }
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
  </div>
</template>
