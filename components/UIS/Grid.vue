<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSAlignItems, CSSBorderRadius, CSSColor, CSSGap, CSSGridTemplateColumns, CSSMargin, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  alignItems: { type: String },
  autoFill: { type: [String, Number] },
  bg: { type: String },
  bgHover: { type: String },
  brRadius: { type: [String, Number] },
  columns: { type: String },
  gap: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  padding: { type: [String, Number] },
  paddingBottom: { type: [String, Number] },
  paddingLeft: { type: [String, Number] },
  paddingRight: { type: [String, Number] },
  paddingTop: { type: [String, Number] }
})

const getCSSSGrid = computed(() => {
  return [
    CSSAlignItems[props.alignItems],
    CSSBorderRadius[`_${props.brRadius}`],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`bg_hover_${props.bgHover}`],
    CSSGridTemplateColumns[`auto_fill_${props.autoFill}`],
    CSSGridTemplateColumns[`${props.columns}`],
    CSSGap[`_${props.gap}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSPadding[`_${props.padding}`],
    CSSPadding[`bottom_${props.paddingBottom}`],
    CSSPadding[`left_${props.paddingLeft}`],
    CSSPadding[`right_${props.paddingRight}`],
    CSSPadding[`top_${props.paddingTop}`]
  ].filter($ => $)
})
</script>

<template>
  <div :class="[$style.css_s_grid, getCSSSGrid]">
    <slot/>
  </div>
</template>

<style module>
.css_s_grid {
  display: grid;
  grid-auto-rows: auto;
  position: relative;
}
</style>
