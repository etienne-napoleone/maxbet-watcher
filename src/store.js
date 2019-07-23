import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { web3, contract } from '../contracts/provider.js'

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
    setBalance: (state, balance) => (state.balance = balance)
  },
  actions: {
    async fetchBalance({ commit }) {
      const total = await contract.methods.totalBetOfGame().call()
      const won = await contract.methods.totalWinAmountOfGame().call()
      const balanceWei = (total - won).toLocaleString('fullwide', {useGrouping:false})
      const balanceEthereum = Math.floor(await web3.utils.fromWei(balanceWei))
      
      commit('setBalance', balanceEthereum)
    }
  }
})
