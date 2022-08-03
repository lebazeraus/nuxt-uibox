<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactMiselanea, CSSColor, CSSTextAlign, CSSFontWeight, CSSMargin, CSSTextSize } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  color: { type: String, default: 'black' },
  colorHover: { type: String },
  fontWeight: { type: String, default: '600' },
  isCapital: { type: Boolean },
  isUpper: { type: Boolean },
  lineClamp: { type: [String, Number] },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginLeft: { type: [String, Number] },
  marginRight: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  size: { type: [String, Number], default: 14 },
  text: { type: [String, Number] }
})

const getCSSALabel = computed(() => {
  return [
    CSSArtifactMiselanea[props.lineClamp ? 'line_clamp' : null],
    CSSArtifactMiselanea[`line_clamp_${props.lineClamp}`],
    CSSArtifactMiselanea[props.isCapital ? 'text_capitalize' : null],
    CSSArtifactMiselanea[props.isUpper ? 'text_uppercase' : null],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`text_${props.color}`],
    CSSColor[`text_hover_${props.colorHover}`],
    CSSFontWeight[`_${props.fontWeight}`],
    CSSMargin[`_${props.margin}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSMargin[`left_${props.marginLeft}`],
    CSSMargin[`right_${props.marginRight}`],
    CSSMargin[`top_${props.marginTop}`],
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
