import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    balance: 0,
    history: [
      {
          index: 1,
          result: 12
      },
      {
          index: 2,
          result: -154
      },
      {
          index: 3,
          result: 65
      }
    ]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
