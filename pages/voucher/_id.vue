<template>
  <div>
    <button
      id="checkout-button"
      role="link"
      :disabled="current.done"
      @click="checkout"
    >
      Checkout
    </button>

    <div id="error-message" />
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

const getList = () =>
  import('~/static/vouchers.json').then(
    m => m.data || m
  )

export default {
  async validate({ params }) {
    const list = await getList()
    return list.find(
      item => item.id === params.id
    )
  },
  async asyncData({ req }) {
    const list = await getList()
    return { list }
  },
  data() {
    return {
      strip: null
    }
  },
  computed: {
    current() {
      return this.list.find(
        item => item.id === this.$route.params.id
      )
    }
  },
  async mounted() {
    this.stripe = await loadStripe(
      'pk_live_um2oZwUbuSgX1NmcXid6P9De'
    )
  },
  methods: {
    async checkout() {
      const {
        error
      } = await this.stripe.redirectToCheckout({
        lineItems: [
          {
            price: this.current.price,
            quantity: 1
          }
        ],
        mode: 'payment',
        successUrl:
          'https://biz.cloudybaylighting.com/success',
        cancelUrl:
          'https://biz.cloudybaylighting.com/canceled'
      })
      if (error) {
        const displayError = document.getElementById(
          'error-message'
        )
        displayError.textContent = error.message
      }
    }
  }
}
</script>
