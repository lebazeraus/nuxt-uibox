import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((ctx, inject) => {
  const storage = {
    get(name) { return JSON.parse(localStorage.getItem(name)) },
    post(name, value) { localStorage.setItem(name, JSON.stringify(value)) }
  }

  inject('storage', storage)
})
