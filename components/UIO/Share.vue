<script setup>
import { useContext, useRoute } from "@nuxtjs/composition-api"
import { CSSArtifactMiselanea, CSSGap, CSSJustifyContent } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  color: { type: String },
  doNotUse: { type: Array },
  withQuery: { type: Boolean },
  urlRoot: { type: String },
  size: { type: [String, Number], default: 24 },
  customParam: { type: String, default: '' }
})

const { $toast } = useContext()
const Route = useRoute()

const _icons = [
  'facebook-f',
  'whatsapp',
  'twitter-alt',
  'reddit-alien-alt',
  'telegram-alt',
  'envelope',
  'link-alt'
]
const icons = []
const argShare = {
  query: {
    facebook: '?o=2',
    whatsapp: '?o=3',
    twitter: '?o=7',
    reddit: '?o=4',
    telegram: '?o=5',
    email: '%3Fo%3D6'
  },
  param: {
    facebook: '/2',
    whatsapp: '/3',
    twitter: '/7',
    reddit: '/4',
    telegram: '/5',
    email: '/6'
  }
}

_icons.forEach(icon => {
  if (!props.doNotUse?.find($ => $ === icon)) {
    icons.push({ name: icon })
  }
})

function share({ name }) {
  let URL = `${props.urlRoot}${Route.value.path}`
  const documentTitle = document.title || ''
  if (name === 'link-alt') {
    if (navigator.share) {
      navigator.share({ text: documentTitle, title: documentTitle, url: URL })
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(URL)
      $toast.info('URL Copiada al portapapeles', { hideProgressBar: true })
    }
    return false
  }
  switch (name) {
    case 'facebook-f':
      URL = `https://www.facebook.com/sharer/sharer.php?u=${URL}${argShare[props.withQuery ? 'query' : 'param'].facebook}${props.customParam}`
      break
    case 'whatsapp':
      URL = `https://api.whatsapp.com/send?text=${documentTitle} | ${URL}${argShare[props.withQuery ? 'query' : 'param'].whatsapp}${props.customParam}`
      break
    case 'twitter-alt':
      URL = `https://twitter.com/intent/tweet?text=${documentTitle}&url=${URL}${argShare[props.withQuery ? 'query' : 'param'].twitter}${props.customParam}`
      break
    case 'reddit-alien-alt':
      URL = `https://www.reddit.com/submit?url=${URL}${argShare[props.withQuery ? 'query' : 'param'].reddit}${props.customParam}`
      break
    case 'telegram-alt':
      URL = `https://t.me/share/url?url=${URL}${argShare[props.withQuery ? 'query' : 'param'].telegram}${props.customParam}`
      break
    case 'envelope':
      URL = `mailto:a?subject=${documentTitle}&body=${URL}${argShare[props.withQuery ? 'query' : 'param'].email}`
      break
  }

  window.open(URL, '_blank')
}
</script>


<template>
<div :class="[CSSArtifactMiselanea.flex, CSSGap._8, CSSJustifyContent[props.align]]">
  <UIAIcon
    @click="share($)"
    v-for="($, i) in icons"
    bg-hover="gray"
    br-radius="8"
    :color="props.color"
    :key="i"
    :name="$.name"
    padding="8"
    :size="props.size"
  />
</div>
</template>
