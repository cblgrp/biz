<template>
  <div>
    <button
      id="checkout-button"
      role="link"
      @click="checkout"
    >
      Checkout {{ current.tip }}
    </button>

    <div id="error-message" />
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

export default {
  data() {
    return {
      strip: null,
      current: {
        price: 'price_1HeAr5CnHoJFRoKtlWQTubs3',
        quantity: 1,
        tip: '1016-3069209-$541.69',
        title: 'October1016-54169'
      }
    }
  },
  head() {
    return {
      title: this.current.title
    }
  },
  async created() {
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
