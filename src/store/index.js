import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.omdbapi.com'

Vue.use(Vuex)

const Mutations = {
  SET_MOVIES: 'SET_MOVIES',
  SET_SEARCH: 'SET_SEARCH'
}

export default new Vuex.Store({
  state: {
    movies: '',
    searches: []
  },
  mutations: {
    [Mutations.SET_MOVIES] (state, movies) {
      state.movies = movies
    },
    [Mutations.SET_SEARCH] (state, searches) {
      state.searches = searches
    }
  },
  actions: {}
})
