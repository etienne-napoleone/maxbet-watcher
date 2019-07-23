<template>
  <div class="pt-12 text-center text-gray-700">
    <p class="pb-4">balance</p>
    <p v-bind:class="{'text-green-500':balance > 0, 'text-red-500':balance < 0}" class="text-3xl">
      $ {{balance}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Balance',
  data () {
    return {
      balance: -3645128
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Rubik Mono One', sans-serif;
}
</style>
