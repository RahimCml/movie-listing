<script>

import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      title: []
    }
  },
  async created () {
    this.title = await this.fetchMovie
  },
  methods: {
    ...mapActions(['fetchMovie'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Movie {{title.length}}
    ol
      li name: {{title || 'No detail'}}
</template>
