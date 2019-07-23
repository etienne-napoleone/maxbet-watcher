<template>
  <div class="pt-12 text-center text-gray-700">
    <p class="pb-4">balance</p>
    <p v-bind:class="{'text-green-500':balance > 0, 'text-red-500':balance < 0}" class="text-3xl">
      ${{balance}}
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Balance",
  data () {
    return {
      timer: undefined
    }
  },
  methods: {
    ...mapActions(["fetchBalance"])
  },
  computed: {
    ...mapState(["balance"])
  },
  created(){
    this.timer = setInterval(() => this.fetchBalance(), 2000)
    this.fetchBalance()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
*{
  font-family: 'Rubik Mono One', sans-serif;
}
</style>
