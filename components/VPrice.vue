<template>
  <span>
    {{
      value
        | currency({
          symbol,
          thousandsSeparator: ',',
          fractionCount: 2,
          fractionSeparator: '.',
          symbolPosition: 'front',
          symbolSpacing: true
        })
    }}
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    symbol: {
      type: String,
      default: '$'
    },
    currency: {
      type: Number,
      default: 2
    }
  },
  computed: {}
}
</script>
