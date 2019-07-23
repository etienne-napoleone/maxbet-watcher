<template>
  <div class="pt-6 text-center text-gray-700">
    <p class="pb-4">history</p>
    <p v-for="bet in bets" :key="bet.index" v-bind:class="{'text-green-500':bet.result > 0, 'text-red-500':bet.result < 0}">
      {{bet.result}}
    </p>
  </div>
</template>

<script>
// emit DrawBet(bet.player, bet.round, bet.gameType, bet.index, bet.number, bet.isOver, bet.amount, bet.isFinished, bet.luckyNumber);
export default {
  name: 'History',
  data () {
    return {
      bets: [
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
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Rubik Mono One', sans-serif;
}
</style>
