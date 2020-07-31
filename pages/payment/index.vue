<template>
  <div class="container">
    Payment ID# is required.
  </div>
</template>

<script>
import vochers from '~/static/vochers.json'
export default {
  data() {
    return {
      list: vochers.data
    }
  },
  head() {
    return {
      title: 'Vouchers'
    }
  }
}
</script>
