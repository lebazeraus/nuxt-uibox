<script setup>
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactDisabled, CSSArtifactMiselanea, CSSBorderRadius, CSSColor, CSSMargin, CSSWidth } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String },
  bgHover: { type: String },
  brRadius: { type: [String, Number] },
  bsHover: { type: String },
  color: { type: String, default: 'black' },
  colorHover: { type: String },
  disabled: { type: Boolean },
  isCenter: { type: Boolean },
  name: { type: String },
  margin: { type: [String, Number] },
  marginBottom: { type: [String, Number] },
  marginLeft: { type: [String, Number] },
  marginRight: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  noty: { type: [String, Number] },
  size: { type: [String, Number], default: 24 },
  superindex: { type: [String, Number] }
})

const getCSSABaseIcon = computed(() => {
  return [
    props.isCenter ? CSSArtifactMiselanea.center_with_margins : null,
    CSSWidth[props.isCenter ? `_${Number(props.size) + 16}` : null],
    CSSBorderRadius[`_${props.brRadius}`],
    CSSColor[`bg_${props.bg}`],
    props.disabled ? null : CSSColor[`bg_hover_${props.bgHover}`],
    props.disabled ? null : CSSColor[`bs_hover_${props.bsHover}`],
    CSSMargin[`bottom_${props.marginBottom || props.margin}`],
    props.isCenter ? null : CSSMargin[`left_${props.marginLeft || props.margin}`],
    props.isCenter ? null : CSSMargin[`right_${props.marginRight || props.margin}`],
    CSSMargin[`top_${props.marginTop || props.margin}`]
  ].filter($ => $)
})

const getCSSAIcon = computed(() => {
  return [
    props.disabled ? CSSArtifactDisabled.icon : null,
    CSSColor[`text_${props.color}`],
    props.disabled ? null : CSSColor[`text_hover_${props.colorHover}`]
  ].filter($ => $)
})
</script>

<template>
<div @click="props.disabled ? () => {} : $emit('click')" :class="[$style.css_a_icon, getCSSABaseIcon]" :noty="props.noty || null" :superindex="props.superindex || null">
  <li :class="[`con con-${props.name}`, getCSSAIcon]" :style="`font-size: ${props.size}px`"/>
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
