<template>
  <div class="container">
    <div style="text-align: center;">
      <img
        :src="`/images/${current.prod}.jpg`"
        style="width: 200px;"
      />
      <h2 style="color: #555555;">
        {{ current.title }}
      </h2>
      <h3>
        <VPrice :value="current.price" />
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

const getList = () =>
  import('~/static/payments.json').then(m => {
    console.log(m)
    return m.data || m
  })
export default {
  components: {
    VPrice
  },
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
      list: [],
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
  },
  head() {
    return {
      title: this.current.title
    }
  }
}
</script>
