import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((ctx, inject) => {
  const currencyFormat = (value) => {
    return '$' + value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  inject('currencyFormat', currencyFormat)
})
