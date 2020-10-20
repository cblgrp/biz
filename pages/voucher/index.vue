<template>
  <div>
    There are {{ list.length }} voucher{{
      list.length > 1 ? 's' : ''
    }}.
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`/voucher/${item.id}`">
          # {{ item.id }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import vouchers from '~/static/vouchers.json'
export default {
  data() {
    return {
      list: vouchers.data
    }
  },
  head() {
    return {
      title: 'Vouchers'
    }
  }
}
</script>
