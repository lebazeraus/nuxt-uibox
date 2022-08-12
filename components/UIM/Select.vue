<script setup>
// M
import { computed, ref, watch } from "@nuxtjs/composition-api"
import { useFocusWithin } from '@vueuse/core'
import { CSSArtifactDisabled, CSSBorderRadius, CSSColor } from "~/composables/useCSS"

const props = defineProps({
  allowToClean: { type: Boolean },
  showIconAdd: { type: Boolean },
  label: { type: Object },
  input: { type: Object, default: () => ({}) },
  items: { type: Array },
  model: { type: Object },
})

const emit = defineEmits()

const target = ref()
const { focused } = useFocusWithin(target)
const isFocus = ref(false)

watch(focused, focused => {
  if (!props.input.disabled) {
    isFocus.value = focused
  }
})

function select($) {
  props.model.value = {...$}
  isFocus.value = false
  emit('change', $)
}

const getCSSMSelect = computed(() => {
  return [
    CSSArtifactDisabled[props.input.disabled ? 'input' : null]
  ].filter($ => $)
})

</script>

<template>
  <div :class="[$style.css_select, getCSSMSelect]" ref="target">
    <UIALabel v-if="props.label" v-bind="props.label" margin-bottom="4"/>
    <div :class="$style.css_field">
      <div @click.stop tabindex="0" :class="[CSSBorderRadius._4, CSSColor.bs_focus_graylight]" :style="{cursor: props.input.disabled ? 'not-allowed' : 'pointer'}">
        <UIAInput v-bind="props.input" v-model="props.model.value.text" readonly/>
      </div>
      <div v-if="props.allowToClean && props.model.value.text" :class="$style.css_iconTimes">
        <UIAIcon
          @click="select({})"
          :bg="props.input.bg || 'white'"
          :color="props.input.color || 'black'"
          bg-hover="graylight"
          br-radius="4"
          name="times"
          size="16"
        />
      </div>
      <div v-else :class="$style.css_iconAngleDown">
        <UIAIcon
          :bg="props.input.bg || 'white'"
          :color="props.input.color || 'black'"
          :name="props.showIconAdd ? 'plus' : 'angle-down'"
          size="16"
        />
      </div>
    </div>
    <UIOUl @select="select($event)" floating :is-hiden="!isFocus" :items="props.items"/>
  </div>
</template>

<style module>
.css_select, .css_field {
  position: relative;
}

.css_iconAngleDown, .css_iconTimes {
  bottom: 4px;
  position: absolute;
  right: 4px;
}

.css_iconAngleDown {
  pointer-events: none;
}
</style>
