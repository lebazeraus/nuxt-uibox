<script setup>
import { computed } from "@vue/composition-api"
import { CSSColor, CSSTextAlign } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  color: { type: String, default: 'secondary' },
  text: { type: [String, Number] },
  to: { type: String }
})

const getCSSAA = computed(() => {
  return [
    CSSColor[`bg_${props.bg}`],
    CSSColor[`text_${props.color}`],
    CSSTextAlign[props.align],
  ].filter($ => $)
})
</script>

<template>
  <component :class="[$style.css_a_a, getCSSAA]" :is="props.to ? 'nuxt-link' : 'a'" v-bind="$attrs">{{ props.text }}<slot/></component>
</template>

<style module>
.css_a_a {
  cursor: pointer;
  display: block;
  font-size: 13px;
  letter-spacing: .3px;
  line-height: 1.5;
  text-decoration: none;
  transition: background .3s;
  word-break: break-word;
  white-space: break-spaces;
} .css_a_a * {
  display: inline-block;
  font-size: inherit;
}
</style>
