<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactMiselanea, CSSBorderRadius, CSSColor, CSSTextAlign, CSSFontWeight, CSSMargin, CSSPadding, CSSTextSize } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  brRadius: { type: String },
  color: { type: String, default: 'black' },
  colorHover: { type: String },
  isBold: { type: Boolean },
  isCapital: { type: Boolean },
  isCapital: { type: Boolean },
  isUpper: { type: Boolean },
  lineClamp: { type: [String, Number] },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginLeft: { type: [String, Number] },
  marginRight: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  padding: { type: [String, Number] },
  paddingBottom: { type: [String, Number] },
  paddingLeft: { type: [String, Number] },
  paddingRight: { type: [String, Number] },
  paddingTop: { type: [String, Number] },
  size: { type: [String, Number], default: 14 },
  text: { type: [String, Number] }
})

const getCSSALabel = computed(() => {
  return [
    props.lineClamp ? CSSArtifactMiselanea.line_clamp : null,
    CSSArtifactMiselanea[`line_clamp_${props.lineClamp}`],
    props.isCapital ? CSSArtifactMiselanea.text_capitalize : null,
    props.isUpper ? CSSArtifactMiselanea.text_uppercase : null,
    CSSBorderRadius[`_${props.brRadius}`],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`text_${props.color}`],
    CSSColor[`text_hover_${props.colorHover}`],
    props.isBold ? CSSFontWeight._600 : null,
    CSSMargin[`bottom_${props.marginBottom || props.margin}`],
    CSSMargin[`left_${props.marginLeft || props.margin}`],
    CSSMargin[`right_${props.marginRight || props.margin}`],
    CSSMargin[`top_${props.marginTop || props.margin}`],
    CSSPadding[`bottom_${props.paddingBottom || props.padding}`],
    CSSPadding[`left_${props.paddingLeft || props.padding}`],
    CSSPadding[`right_${props.paddingRight || props.padding}`],
    CSSPadding[`top_${props.paddingTop || props.padding}`],
    CSSTextAlign[props.align],
    CSSTextSize[`_${props.size}`]
  ].filter($ => $)
})
</script>

<template>
  <label :class="[$style.css_a_label, getCSSALabel]">{{ props.text }}<slot/></label>
</template>

<style module>
.css_a_label {
  cursor: inherit;
  display: block;
  letter-spacing: .3px;
  line-height: 1.5;
  transition: background .3s;
  word-break: break-word;
  white-space: break-spaces;
} .css_a_label * {
  display: inline-block;
  font-size: inherit;
}
</style>
