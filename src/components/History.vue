<template>
  <div class="pt-6 text-center text-gray-700">
    <p class="pb-4">live results</p>
    <p v-for="bet in history" :key="bet.index" v-bind:class="{'text-green-500':bet.result > 0, 'text-red-500':bet.result < 0}">
      {{bet.result}}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex"

// emit DrawBet(bet.player, bet.round, bet.gameType, bet.index, bet.number, bet.isOver, bet.amount, bet.isFinished, bet.luckyNumber);
export default {
  name: 'History',
  computed: {
      ...mapState(["history"])
  }
}
</script>

<style scoped>
*{
  font-family: 'Rubik Mono One', sans-serif;
}
</style>
