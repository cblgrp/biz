<template>
  <div>
    There are {{ list.length }} voucher{{
      list.length > 1 ? 's' : ''
    }}.
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`/payment/${item.id}`">
          # {{ item.id }} - ${{ item.price }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import payments from '~/static/payments.json'
export default {
  data() {
    return {
      list: payments.data
    }
  },
  head() {
    return {
      title: 'Payments'
    }
  }
}
</script>
