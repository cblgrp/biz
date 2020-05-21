<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`/vocher/${item.id}`">
          # {{ item.id }} - ${{ item.price }}
        </nuxt-link>
      </li>
    </ul>
    There are {{ list.length }} voucher{{ list.length > 1 ? 's' : '' }}.
    <NuxtChild :key="$route.params.id" />
  </div>
</template>

<script>
import vochers from '~/static/vochers.json'
export default {
  data() {
    return {
      list: vochers.data
    }
  }
}
</script>
