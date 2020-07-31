<template>
  <div>
    <button
      id="checkout-button"
      role="link"
      :disabled="current.done"
      @click="checkout"
    >
      Checkout ${{ current.price }}
    </button>

    <div id="error-message" />
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'
import vochers from '~/static/vochers.json'

export default {
  validate({ params }) {
    return vochers.data.find(
      item => item.id === params.id
    )
  },
  data() {
    return {
      strip: null
    }
  },
  computed: {
    current() {
      return vochers.data.find(
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
          { price: this.current.sku, quantity: 1 }
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
