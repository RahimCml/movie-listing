import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.omdbapi.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movie: []
  },
  mutations: {},
  actions: {
    async fetchMovie () {
      const req = await axios.get('?i=tt0337898&apikey=e9e9888e')
      return req.data
    }
  }
})
