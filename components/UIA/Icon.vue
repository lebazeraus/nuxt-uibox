<script setup>
// A
import { computed } from "@vue/composition-api"
import { CSSArtifactDisabled, CSSArtifactMiselanea, CSSBorderRadius, CSSColor, CSSMargin, CSSPadding, CSSWidth } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String },
  bgHover: { type: String },
  brRadius: { type: [String, Number] },
  bsHover: { type: String },
  color: { type: String, default: 'black' },
  colorHover: { type: String },
  disabled: { type: Boolean },
  name: { type: String },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginLeft: { type: [String, Number] },
  marginRight: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  noty: { type: [String, Number] },
  padding: { type: [String, Number] },
  size: { type: [String, Number], default: 24 },
  superindex: { type: [String, Number] },
})

const getCSSABaseIcon = computed(() => {
  return [
    CSSArtifactMiselanea[`${props.align}_with_margins`],
    CSSBorderRadius[`_${props.brRadius}`],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`bg_hover_${props.bgHover}`],
    CSSColor[`bs_hover_${props.bsHover}`],
  ].filter($ => $)
})

const getCSSAIcon = computed(() => {
  return [
    CSSArtifactDisabled[props.disabled ? 'icon' : null],
    CSSColor[`text_${props.color}`],
    CSSColor[`text_hover_${props.colorHover}`],
    CSSMargin[`_${props.margin}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSMargin[`left_${props.marginLeft}`],
    CSSMargin[`right_${props.marginRight}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSPadding[`_${props.padding}`],
    CSSWidth[`_${props.widthPercent}_percent`]
  ].filter($ => $)
})
</script>

<template>
<div @click="props.disabled ? () => {} : $emit('click')" :class="[$style.css_a_icon, getCSSABaseIcon]" :noty="props.noty || null" :superindex="props.superindex || null">
  <Component :class="[getCSSAIcon]" :is="'Icons-uil-' + props.name" :size="String(props.size)"/>
</div>
</template>

<style module>
.css_a_icon {
  display: inline-block;
  font-size: 0;
  position: relative;
} .css_a_icon[noty]:after, .css_a_icon[superindex]:after {
  font-size: 10px;
  height: 16px;
  line-height: 17px;
  position: absolute;
  text-align: center;
} .css_a_icon[noty]:after {
  background-color: rgb(var(--red));
  border-radius: 50%;
  color: rgb(var(--white));
  content: attr(noty);
  right: 0px;
  top: 4px;
  width: 16px;
} .css_a_icon[superindex]:after {
  background-color: rgb(var(--white));
  border-radius: 2px;
  color: rgb(var(--black));
  content: attr(superindex);
  left: 0;
  right: 0;
  top: -16px;
}
</style>
