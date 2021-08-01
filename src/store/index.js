import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.omdbapi.com'

Vue.use(Vuex)

const Mutations = {
  SET_MOVIES: 'SET_MOVIES',
  SET_MOVIE: 'SET_MOVIE'
}

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {}
  },
  mutations: {
    [Mutations.SET_MOVIES] (state, movies) {
      state.movies = movies
    },
    [Mutations.SET_MOVIE] (state, movie) {
      state.movie = movie
    }
  },
  actions: {
    async fetchMoviesSearch ({ commit }, search) {
      const res = await axios.get(`?s=${search}&apikey=e9e9888e`)
      commit(Mutations.SET_MOVIES, res.data)
    },
    async fetchMovieByTitle ({ commit }, Title) {
      const res = await axios.get(`?t=${Title}&apikey=e9e9888e`)
      commit(Mutations.SET_MOVIE, res.data)
    }
  }
})
