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
import { setTimeout } from 'timers';

export default {
  name: "Balance",
  data () {
    return {
      timer: null
    }
  },
  methods: {
    ...mapActions(["fetchBalance"]),
    async fetch() {
      await this.fetchBalance()
      this.timer = setTimeout(() => this.fetch(), 2000)
    }
  },
  computed: {
    ...mapState(["balance"])
  },
  created(){
    this.fetch()
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>
