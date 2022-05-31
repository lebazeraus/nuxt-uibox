<script setup>
// A 
import { computed } from "@vue/composition-api"
import { CSSArtifactDisabled, CSSColor, CSSMargin, CSSPadding } from "~/composables/useCSS"

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
  paddingBottom: { type: [String, Number], default: 0 },
  paddingLeft: { type: [String, Number], default: 16 },
  paddingRight: { type: [String, Number], default: 16 },
  paddingTop: { type: [String, Number], default: 0 },
  placeholder: { type: String },
  readonly: { type: Boolean },
  type: { type: String, default: 'text' },
  validate: { type: [Function, String], default: () => {} },
  value: { type: [String, Number] }
})
const emit = defineEmits()

const getCSSAInput = computed(() => {
  return [
    CSSArtifactDisabled[props.disabled ? 'input' : null],
    CSSColor[`bg_${props.bg}`],
    CSSColor[`br_${props.brColor}`],
    CSSColor[`br-focus-${props.brFocus}`],
    CSSColor[`bs_hover_${props.bsHover}`],
    CSSColor[`bs_focus_${props.bsFocus}`],
    CSSColor[`text_${props.color}`],
    CSSMargin[`top_${props.marginTop}`],
    CSSPadding[`bottom_${props.paddingBottom}`],
    CSSPadding[`left_${props.paddingLeft}`],
    CSSPadding[`right_${props.paddingRight}`],
    CSSPadding[`top_${props.paddingTop}`]
  ].filter($ => $)
})
const masks = {
  email: { mask: 'C*@a*.a*', tokens: { 'C': { pattern: /[0-9.a-zA-Z]/, lowercase: true }}},
  mobile: '### #######',
  names: 'Aa* Aa*'
}

const validates = {
  email(value) {
    return value.length >= 5 &&
      value.indexOf('@') >= 0 &&
      value.indexOf('.') >= 3
  }
}

function input(value) {
  emit('input', value)
  if (typeof props.validate === 'string') {
    emit('isValid', validates[props.validate](value))
  } else {
    props.validate(value)
  }
}
</script>

<script>
import { maska } from 'maska'

export default {
  directives: { maska }
}
</script>

<template>
  <div>
    <input
      @input="input($event.target.value)"
      v-maska="masks[props.mask] || props.mask"
      :class="[$style.css_a_input, getCSSAInput]"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      :readonly="props.readonly"
      :type="props.type"
      :value="props.value"
    />
  </div>
</template>

<style module>
.css_a_input {
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  font-size: 14px;
  height: 40px;
  outline: none;
  transition: border .3s, box-shadow .3s ease-in;
  width: 100%;
} .css_a_input[type="password"] {
  font-size: 16px;
  letter-spacing: 4px;
} .css_a_input:focus {
  cursor: text;
}
</style>
