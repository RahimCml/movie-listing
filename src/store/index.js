import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.omdbapi.com'

Vue.use(Vuex)

const Mutations = {
  SET_MOVIES: 'SET_MOVIES'
}

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    [Mutations.SET_MOVIES] (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    async fetchMoviesSearch ({ commit }, search) {
      const res = await axios.get(`?s=${search}&apikey=e9e9888e`)
      commit(Mutations.SET_MOVIES, res.data.Search)
    }
  }
})
