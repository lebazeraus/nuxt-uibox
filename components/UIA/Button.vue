<script setup>
// A
import { computed } from "@vue/composition-api"
import { CSSArtifactDisabled, CSSArtifactMiselanea, CSSColor, CSSHeight, CSSMargin, CSSTextSize, CSSWidth } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String, default: 'primary' },
  brColor: { type: String, default: 'primary' },
  brHover: { type: String, default: 'primary' },
  bsHover: { type: String, default: 'primary' },
  bsFocus: { type: String, default: 'primary' },
  color: { type: String, default: 'white' },
  disabled: { type: Boolean },
  isLarge: { type: Boolean },
  isSmall: { type: Boolean },
  marginTop: { type: [String, Number] },
  text: { type: [String, Number] },
  widthPercent: { type: [String, Number] }
})

const getCSSAButton = computed(() => {
  return [
    CSSArtifactDisabled[props.disabled ? 'button' : null],
    CSSArtifactMiselanea.user_select_none,
    CSSColor[`bg_${props.bg}`],
    CSSColor[`br_${props.brColor}`],
    CSSColor[`br_hover_${props.brHover}`],
    CSSColor[`bs_hover_${props.bsHover}`],
    CSSColor[`bs_focus_${props.bsFocus}`],
    CSSColor[`text_${props.color}`],
    // normal | isLarge
    CSSTextSize[`_${props.isLarge ? 16 : 14}`],
    CSSHeight[`_${props.isLarge ? 48 : 40}`],
    // normal | isSmall
    CSSTextSize[`_${props.isSmall ? 12 : 14}`],
    CSSHeight[`_${props.isSmall ? 32 : 40}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSWidth[`_${props.widthPercent}_percent`]
  ].filter($ => $)
})
</script>

<template>
  <button
    @click="props.disabled ? () => {} : $emit('click')"
    :class="[$style.css_a_button, getCSSAButton]"
    :disabled="props.disabled"
  >{{ props.text }}<slot/></button>
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
  transition: box-shadow .3s ease-in, opacity .3s;
}
</style>
