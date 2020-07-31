<template>
  <div>
    There are {{ list.length }} voucher{{
      list.length > 1 ? 's' : ''
    }}.
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`/vocher/${item.id}`">
          # {{ item.id }} - ${{ item.price }}
        </nuxt-link>
      </li>
    </ul>
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
