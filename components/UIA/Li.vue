<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactDisabled, CSSColor } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String },
  bgHover: { type: String, default: 'graylight' },
  color: { type: String, default: 'black' },
  disabled: { type: Boolean },
  text: { type: [String, Number] },
  to: { type: String }
})

const getCSSALi = computed(() => {
  return [
    CSSArtifactDisabled[props.disabled ? 'li' : null],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`bg_hover_${props.bgHover}`],
    CSSColor[`text_${props.color}`]
  ].filter($ => $)
})
</script>

<template>
  <component @click="props.disabled ? () => {} : $emit('click')" :class="[$style.css_a_li, getCSSALi]" :is="props.disabled ? 'li' : props.to ? 'nuxt-link' : 'li'" :to="props.to">{{ props.text }}<slot/></component>
</template>

<style module>
.css_a_li {
  cursor: pointer;
  display: block;
  font-size: 13px;
  letter-spacing: .3px;
  line-height: 1.5;
  min-height: 16px;
  padding: 8px 16px;
  text-decoration: none;
  transition: background .3s;
} .css_a_li * {
  display: inline-block;
  font-size: inherit;
} .css_a_li small {
  font-size: 11px;
}
</style>
