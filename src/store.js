import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { web3, contract } from '../contracts/provider.js'

export default new Vuex.Store({
  state: {
    balance: 0,
    firstBalance: 0,
    isFirstSync: true,
    history: 0
  },
  getters: {

  },
  mutations: {
    setBalance: (state, balance) => {
      if (state.isFirstSync){
        state.isFirstSync = false,
        state.firstBalance = balance
      }
      state.balance = balance
    },
    setHistory: (state, balance) => state.history = balance - state.firstBalance
  },
  actions: {
    async fetchBalance({ commit }) {
      const total = await contract.methods.totalBetOfGame().call()
      const won = await contract.methods.totalWinAmountOfGame().call()
      const balanceWei = (total - won).toLocaleString('fullwide', {useGrouping:false})
      const balanceEthereum = Math.floor(await web3.utils.fromWei(balanceWei))
      if (this.state.balance !== balanceEthereum && !this.state.isFirstSync) {        
        commit('setHistory', balanceEthereum)
      } 
      commit('setBalance', balanceEthereum)
    }
  }
})
