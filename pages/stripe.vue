<template>
  <div>
    <!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
    <button
      id="checkout-button-sku_HJJyl9lPVT5M2b"
      style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
      role="link"
    >
      Checkout
    </button>

    <div id="error-message"></div>
  </div>
</template>
<script>
import { loadStripe } from '@stripe/stripe-js'

const init = async () => {
  const stripe = await loadStripe('pk_live_um2oZwUbuSgX1NmcXid6P9De')
  const checkoutButton = document.getElementById(
    'checkout-button-sku_HJJyl9lPVT5M2b'
  )
  checkoutButton.addEventListener('click', async function() {
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      // sessionId: '{{CHECKOUT_SESSION_ID}}'
      lineItems: [{ price: 'sku_HJJyl9lPVT5M2b', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://biz.cloudybaylighting.com/success',
      cancelUrl: 'https://biz.cloudybaylighting.com/canceled'
    })
    if (error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      const displayError = document.getElementById('error-message')
      displayError.textContent = error.message
    }
  })
}
export default {
  mounted() {
    init()
  }
}
</script>
