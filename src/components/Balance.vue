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
      timer: undefined
    }
  },
  methods: {
    ...mapActions(["fetchBalance"]),
    loop: function () {
      this.timer = setTimeout(() => {
        this.fetchBalance()
        this.loop()
      }, 2000)
    }
  },
  computed: {
    ...mapState(["balance"])
  },
  created(){
    this.fetchBalance()
    this.loop()
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>
