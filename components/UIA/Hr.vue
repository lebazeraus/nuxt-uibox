<script setup>
import { computed } from "@vue/composition-api"
import { CSSColor } from "~/composables/useCSS"

const props = defineProps({
  color: { type: String, default: 'graylight' }
})

const getCSSAHr = computed(() => {
  return [
    CSSColor[`br_${props.color}`]
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
  margin: 24px 0;
  opacity: .72;
}
</style>
