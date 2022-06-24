<script setup>
import { computed } from "@vue/composition-api"
import { CSSColor, CSSMargin } from "~/composables/useCSS"

const props = defineProps({
  color: { type: String, default: 'graylight' },
  margin: { type: [String, Number], default: 16 }
})

const getCSSAHr = computed(() => {
  return [
    CSSColor[`br_${props.color}`],
    CSSMargin[`bottom_${props.margin}`],
    CSSMargin[`top_${props.margin}`]
  ].filter($ => $)
})
</script>

<template>
  <hr :class="[$style.css_a_hr, getCSSAHr]"/>
</template>

<style module>
.css_a_hr {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: 1px;
  height: 1px;
  opacity: .72;
}
</style>
