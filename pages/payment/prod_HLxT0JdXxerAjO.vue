<template>
  <div class="container">
    <div style="text-align: center">
      <img
        :src="`/images/${id}.jpg`"
        style="width: 200px"
      />
      <h2 style="color: #555555">
        {{ title }}
      </h2>
      <h3>
        <VPrice :value="price" />
      </h3>
      <button
        id="checkout-button"
        role="link"
        style="
          cursor: pointer;
          background-color: #6772e5;
          color: #fff;
          padding: 16px 24px;
          border: 0;
          border-radius: 4px;
          font-size: 1em;
        "
        @click="checkout"
      >
        Checkout
      </button>
      <br />
      <br />
      <br />
      <div>
        <small class="text-muted">
          © Cloudy Bay Lighting
        </small>
      </div>
    </div>

    <div id="error-message" />
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'
import VPrice from '~/components/VPrice'

export default {
  components: {
    VPrice
  },
  data() {
    return {
      id: 'prod_HLxT0JdXxerAjO',
      sku: 'price_HLxTkGNLBtVM87',
      price: 2250,
      title: 'deposit for 300pcs CBOWL153CORB',
      stripe: null
    }
  },
  head() {
    return {
      title: this.title
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
            price: this.sku,
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
