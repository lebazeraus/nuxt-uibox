<script setup>
import { useContext, useRoute } from "@nuxtjs/composition-api"
import { CSSAlignItems, CSSColor, CSSBorderRadius, CSSGridTemplateColumns, CSSMaxWidth, CSSArtifactMiselanea, CSSGap, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  querys: { type: Object },
  urlRoot: { type: String },
})

const { $toast } = useContext()
const Route = useRoute()

const icons = [
  { name: 'facebook-f' },
  { name: 'whatsapp' },
  { name: 'reddit-alien-alt' },
  { name: 'telegram-alt' },
  { name: 'envelope' },
  { name: 'link-alt' }
]

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
      URL = `https://www.facebook.com/sharer/sharer.php?u=${URL}${props.querys.facebook || ''}`
      break
    case 'whatsapp':
      URL = `https://api.whatsapp.com/send?text=${documentTitle} | ${URL}${props.querys.whatsapp || ''}`
      break
    case 'reddit-alien-alt':
      URL = `https://www.reddit.com/submit?url=${URL}${props.querys.reddit || ''}`
      break
    case 'telegram-alt':
      URL = `https://t.me/share/url?url=${URL}${props.querys.telegram || ''}`
      break
    case 'envelope':
      URL = `mailto:a?subject=${documentTitle}&body=${URL}${props.querys.email || ''}`
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
    :key="i"
    :name="$.name"
    padding="8"
    size="40"
  />
</div>
</template>
