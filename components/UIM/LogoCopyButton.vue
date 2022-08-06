<script setup>
import { CSSArtifactMiselanea, CSSColor, CSSGap } from "~/composables/useCSS"

const props = defineProps({
  logo: { type: Object },
  copy: { type: Object },
  button: { type: Object }
})
</script>

<template>
  <div :class="[CSSArtifactMiselanea.grid, CSSGap._24]">
    <component :class="CSSColor['text_' + (props.logo.color || 'black')]" :is="props.logo.name" :size="props.logo.size"/>
    <UIAHx :color="props.copy.h1.color">{{ props.copy.h1.text }}</UIAHx>
    <UIAP :size="props.copy.p.size" :color="props.copy.p.color">{{ props.copy.p.text }}</UIAP>
    <div>
      <UIAButton is-large>{{ props.button.text }}</UIAButton>
    </div>
  </div>
</template>
