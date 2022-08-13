<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactMiselanea, CSSColor, CSSMargin, CSSPadding, CSSTextAlign, CSSTextSize } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  color: { type: String, default: 'black' },
  isCapital: { type: Boolean },
  isSmall: { type: Boolean },
  isUpper: { type: Boolean },
  level: { type: [String, Number], default: 1 },
  lineClamp: { type: [String, Number] },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginLeft: { type: [String, Number] },
  marginRight: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  padding: { type: [String, Number] },
  text: { type: [String, Number] },
  userSelectNone: { type: Boolean }
})

const sizes = [48, 40, 32, 24, 16, 14]
const sizes_small = [40, 32, 24, 16, 14, 12]

const getCSSAHx = computed(() => {
  return [
    CSSArtifactMiselanea[props.lineClamp ? 'line_clamp' : null],
    CSSArtifactMiselanea[`line_clamp_${props.lineClamp}`],
    CSSArtifactMiselanea[props.userSelectNone ? 'user_select_none' : null],
    CSSArtifactMiselanea[props.isCapital ? 'text_capitalize' : null],
    CSSArtifactMiselanea[props.isUpper ? 'text_uppercase' : null],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`text_${props.color}`],
    CSSMargin[`_${props.margin}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSMargin[`left_${props.marginLeft}`],
    CSSMargin[`right_${props.marginRight}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSPadding[`_${props.padding}`],
    CSSTextAlign[props.align],
    CSSTextSize[`_${props.isSmall ? sizes_small[Number(props.level)-1] : sizes[Number(props.level)-1]}`]
  ].filter($ => $)
})

</script>

<template>
  <component :class="[$style.css_a_hx, getCSSAHx]" :is="`h${props.level}`">{{  props.text }}<slot/></component>
</template>

<style module>
.css_a_hx {
  display: block;
  letter-spacing: .3px;
  line-height: 1.25;
  transition: background .3s;
  word-break: break-word;
  white-space: break-spaces;
} .css_a_hx * {
  display: inline-block;
  font-size: inherit;
}
</style>
