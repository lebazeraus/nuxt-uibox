<script setup>
import { computed } from "@vue/composition-api"
import { CSSColor, CSSMargin, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  all: { type: [String, Number], default: 24 },
  bg: { type: String },
  marginBottom: { type: [String, Number] },
  marginTop: { type: [String, Number] },
})

const getCSSSPadding = computed(() => {
  return [
    CSSColor[`bg_${props.bg}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSPadding[`_${props.all}`]
  ].filter($ => $)
})
</script>

<template>
  <div :class="[getCSSSPadding]">
    <slot/>
  </div>
</template>
