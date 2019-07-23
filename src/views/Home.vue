<template>
  <div class="container mx-auto">
    <Balance/>
    <History/>
  </div>
</template>

<script>
import Balance from '@/components/Balance.vue'
import History from '@/components/History.vue'

export default {
  name: 'home',
  components: {
    Balance,
    History
  }
}
</script>
