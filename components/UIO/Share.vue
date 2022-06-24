<script setup>
import { useContext, useRoute } from "@nuxtjs/composition-api"
import { CSSAlignItems, CSSColor, CSSBorderRadius, CSSGridTemplateColumns, CSSMaxWidth, CSSArtifactMiselanea, CSSGap, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  color: { type: String },
  doNotUse: { type: Array },
  querys: { type: Object },
  urlRoot: { type: String },
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
      URL = `https://www.facebook.com/sharer/sharer.php?u=${URL}${props.querys?.facebook || ''}`
      break
    case 'whatsapp':
      URL = `https://api.whatsapp.com/send?text=${documentTitle} | ${URL}${props.querys?.whatsapp || ''}`
      break
    case 'twitter-alt':
      URL = `https://twitter.com/intent/tweet?text=${documentTitle}&url=${URL}${props.querys?.twitter || ''}`
      break
    case 'reddit-alien-alt':
      URL = `https://www.reddit.com/submit?url=${URL}${props.querys?.reddit || ''}`
      break
    case 'telegram-alt':
      URL = `https://t.me/share/url?url=${URL}${props.querys?.telegram || ''}`
      break
    case 'envelope':
      URL = `mailto:a?subject=${documentTitle}&body=${URL}${props.querys?.email || ''}`
      break
  }

  window.open(URL, '_blank')
}
</script>


<template>
<div :class="[CSSArtifactMiselanea.flex, CSSGap._8]">
  <UIAIcon
    @click="share($)"
    v-for="($, i) in icons"
    bg-hover="gray"
    br-radius="8"
    :color="props.color"
    :key="i"
    :name="$.name"
    padding="8"
    size="40"
  />
</div>
</template>
