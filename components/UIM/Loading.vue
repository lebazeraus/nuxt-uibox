<script setup>
import { CSSArtifactMiselanea, CSSColor, CSSTextAlign } from "~/composables/useCSS"
const props = defineProps({
  marginTop: { type: [String, Number] }
})
</script>

<template>
<div :class="[CSSArtifactMiselanea.grid]">
  <UIAImg align="center" :bg="null" :class="$style.css_animation" :filter-brightness96="false" :margin-top="props.marginTop" max-width="48" src="/images/loading.png"/>
  <UIALabel align="center"><slot/></UIALabel>
</div>
</template>

<style>
@keyframes bounce {
  from {
    transform: scaleY(.88) translateY(8px);
  }
  to {
    transform: scaleY(1) translateY(0);
  }
}

@keyframes rotateplane {
  0% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-180deg);
  }
}
</style>

<style module>
.css_animation {
  animation: var(--nuxt-uibox-loading-animation);
}
</style>
