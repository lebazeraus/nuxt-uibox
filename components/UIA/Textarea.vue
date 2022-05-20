<script setup>
// A 
import { computed } from "@vue/composition-api"
import { CSSArtifactDisabled, CSSColor, CSSMargin, CSSMinHeight, CSSPadding } from "~/composables/useCSS"

const props = defineProps({
  bg: { type: String, default: 'white' },
  brColor: { type: String, default: 'graylight' },
  brFocus: { type: String, default: 'primary' },
  bsHover: { type: String, default: 'graylight' },
  bsFocus: { type: String, default: 'primary' },
  color: { type: String, default: 'black' },
  disabled: { type: Boolean },
  marginTop: { type: [String, Number] },
  mask: { type: [String, Object, Array] },
  minHeight: { type: [String, Number], default: 96 },
  paddingBottom: { type: [String, Number], default: 16 },
  paddingLeft: { type: [String, Number], default: 16 },
  paddingRight: { type: [String, Number], default: 16 },
  paddingTop: { type: [String, Number], default: 16 },
  placeholder: { type: String },
  readonly: { type: Boolean },
  spellcheck: { type: Boolean },
  type: { type: String, default: 'text' },
  valid: { type: Boolean },
  value: { type: [String, Number] }
})

const getCSSATextarea = computed(() => {
  return [
    CSSArtifactDisabled[props.disabled ? 'input' : null],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`br_${props.brColor}`],
    CSSColor[`br-focus-${props.brFocus}`],
    CSSColor[`bs_hover_${props.bsHover}`],
    CSSColor[`bs_focus_${props.bsFocus}`],
    CSSColor[`text_${props.color}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSMinHeight[`_${props.minHeight}`],
    CSSPadding[`bottom_${props.paddingBottom}`],
    CSSPadding[`left_${props.paddingLeft}`],
    CSSPadding[`right_${props.paddingRight}`],
    CSSPadding[`top_${props.paddingTop}`]
  ].filter($ => $)
})
</script>

<script>
import { maska } from 'maska'

export default {
  directives: { maska }
}
</script>

<template>
  <div>
    <textarea
      @input="$emit('input', $event.target.value)"
      v-maska="props.mask"
      :class="[$style.css_a_textarea, getCSSATextarea]"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
      :spellcheck="props.spellcheck"
      :type="props.type"
      :value="props.value"
    />
  </div>
</template>

<style module>
.css_a_textarea {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  resize: vertical;
  transition: border .3s, box-shadow .3s ease-in;
  width: 100%;
} .css_a_textarea:focus {
  cursor: text;
}
</style>
