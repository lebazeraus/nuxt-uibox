<script setup>
// A
import { computed } from "@nuxtjs/composition-api"
import { CSSArtifactDisabled, CSSArtifactMiselanea, CSSColor, CSSHeight, CSSMargin, CSSTextSize, CSSWidth } from "~/composables/useCSS"

const props = defineProps({
  align: { type: String },
  bg: { type: String, default: 'primary' },
  bgHover: { type: String },
  bgFocus: { type: String },
  brColor: { type: String, default: 'primary' },
  brHover: { type: String, default: 'primary' },
  bsHover: { type: String, default: 'primary' },
  bsFocus: { type: String, default: 'primary' },
  category: { type: String },
  color: { type: String, default: 'white' },
  disabled: { type: Boolean },
  isCenter: { type: Boolean },
  isLarge: { type: Boolean },
  isLoading: { type: Boolean },
  isSmall: { type: Boolean },
  marginBottom: { type: [String, Number] },
  marginTop: { type: [String, Number] },
  text: { type: [String, Number] },
  widthPercent: { type: [String, Number] }
})

const getCSSAButton = computed(() => {
  let style = []
  if (props.category) {
    switch (props.category) {
      case 'black':
        style = [CSSColor.bg_black, CSSColor.br_black, CSSColor.br_hover_black, CSSColor.bs_hover_black, CSSColor.bs_focus_black]
        break
      case 'gray':
        style = [CSSColor.bg_graylight, CSSColor.br_graylight, CSSColor.bs_hover_black, CSSColor.bs_focus_black]
        break
    }
  } else {
    style = [
      CSSColor[`bg_${props.bg}`],
      CSSColor[`bg_hover_${props.bgHover}`],
      CSSColor[`bg_focus_${props.bgFocus}`],
      CSSColor[`br_${props.brColor}`],
      CSSColor[`br_hover_${props.brHover}`],
      CSSColor[`bs_hover_${props.bsHover}`],
      CSSColor[`bs_focus_${props.bsFocus}`]
    ]
  }
  return [
    ...style,
    CSSArtifactDisabled[(props.disabled || props.isLoading) ? 'button' : null],
    CSSArtifactMiselanea[props.isCenter ? 'center_with_margins' : null],
    CSSArtifactMiselanea[`${props.align}_with_margins`],
    CSSArtifactMiselanea.user_select_none,
    CSSColor[`text_${props.color}`],
    // isSmall | isLarge | normal
    CSSTextSize[`_${props.isSmall ? 12 : props.isLarge ? 16 : 14}`],
    CSSHeight[`_${props.isSmall ? 32 : props.isLarge ? 48 : 40}`],
    CSSMargin[`bottom_${props.marginBottom}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSWidth[`_${props.widthPercent}_percent`]
  ].filter($ => $)
})
</script>

<template>
  <button
    @click="props.disabled ? () => {} : $emit('click')"
    :class="[$style.css_a_button, getCSSAButton]"
    :disabled="props.isLoading || props.disabled"
  >{{ props.isLoading ? 'Espere...' : props.text }}<slot/></button>
</template>

<style module>
.css_a_button {
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: auto;
  outline: none;
  letter-spacing: .3px;
  padding: 0 16px;
  position: relative;
  transition: box-shadow .3s ease-in, opacity .3s;
}
</style>
