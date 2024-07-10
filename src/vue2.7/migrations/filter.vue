<template>
  <div>
    <h5>Bank Account Balance | filter</h5>
    <p>{{ accountBalance | currencyUSD }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        required: true
      }
    },
    filters: {
      currencyUSD(value) {
        return '$' + value
      }
    }
  }
</script>
