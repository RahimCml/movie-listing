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
    await this.fetchMovieByTitle(this.$route.params.Title)
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchMovieByTitle'])
  },
  computed: {
    ...mapState(['movie'])
  }
}
</script>

<template>
   <div class="home">
     <p v-if="isLoading"> Please wait...
      </p>
     <div v-else class="container">
        <div class="image">
        <img :src="movie.Poster" alt="">
      </div>
      <div class="about">
          <p> <span> Name: {{movie.Title}} </span> </p>
          <p> <span> Year: {{movie.Year}} </span> </p>
          <p> <span> Time: {{movie.Runtime}} </span> </p>
          <p> <span> Genre: {{movie.Genre}} </span> </p>
          <p> <span> Director: {{movie.Director}} </span> </p>
          <p> <span> Writer: {{movie.Writer}} </span> </p>
          <p> <span> Actors: {{movie.Actors}} </span> </p>
          <p> <span> Storyline: {{movie.Plot}} </span> </p>
          <p> <span> Language: {{movie.Language}} </span> </p>
          <p> <span> Country: {{movie.Country}} </span> </p>
      </div>
      <div class="anotherAbout">
        <p> Metascore: {{movie.Metascore}}, IMDb Rating: {{movie.imdbRating}} IMDb Votes : {{movie.Metascore}}, Metascore: {{movie.imdbVotes}}, IMDbID: {{movie.imdbID}}, Type: {{movie.Type}}</p>
      </div>
     </div>
   </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 25%;
}
img {
  width: 290px;
  margin-top: 47px;
}
.about {
  margin-top: 90px;
  margin-right: 50px;
  text-align: left;
  width: 300%;
}
span {
  /* border: 0px solid black; */
  background: rgb(34, 33, 33);
  color:rgba(215, 216, 221, 0.816);
}
.anotherAbout {
  width: 300%;
  margin-left: 25px;
  text-align: left;
}
</style>
