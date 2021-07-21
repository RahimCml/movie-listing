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
  actions: {
    async fetchMovie ({ commit }) {
      const res = await axios.get('?s=marvel&apikey=e9e9888e')
      commit(Mutations.SET_MOVIES, res.data.Search)
    }
  }
})
