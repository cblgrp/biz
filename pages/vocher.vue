<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="`/vocher/${item.id}`">
          # {{ item.id }} - ${{ item.price }}
        </nuxt-link>
      </li>
    </ul>
    <NuxtChild :key="$route.name" />
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
