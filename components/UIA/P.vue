<script setup>
import { computed } from "@vue/composition-api"
import { CSSArtifactMiselanea, CSSColor, CSSTextAlign, CSSFontWeight, CSSMargin, CSSTextSize } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  color: { type: String, default: 'black' },
  fontWeight: { type: String },
  lineClamp: { type: [String, Number] },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginLeft: { type: [String, Number] },
  marginRight: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  size: { type: [String, Number], default: 16 },
  text: { type: [String, Number] },
  userSelectNone: { type: Boolean }
})

const getCSSAP = computed(() => {
  return [
    CSSArtifactMiselanea[props.userSelectNone ? 'user_select_none' : null],
    CSSArtifactMiselanea[props.lineClamp ? 'line_clamp' : null],
    CSSArtifactMiselanea[`line_clamp_${props.lineClamp}`],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`text_${props.color}`],
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
  <p :class="[$style.css_a_p, getCSSAP]">{{ props.text }}<slot/></p>
</template>

<style module>
.css_a_p {
  /* display: block; */
  letter-spacing: .3px;
  line-height: 1.5;
  transition: background .3s;
  word-break: break-word;
  white-space: break-spaces;
} .css_a_p * {
  display: inline-block;
  font-size: inherit;
}
</style>
