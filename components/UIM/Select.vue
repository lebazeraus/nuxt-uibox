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
      <UIAIcon
        v-if="props.allowToClean && props.model.value.text"
        @click="select({})"
        :bg="props.input.bg || 'white'"
        :color="props.input.color || 'black'"
        bg-hover="graylight"
        br-radius="4"
        :class="$style.css_iconTimes"
        name="times"
        padding="4"
        size="24"
      />
      <UIAIcon
        v-else
        :bg="props.input.bg || 'white'"
        :color="props.input.color || 'black'"
        :class="$style.css_iconAngleDown"
        :name="props.showIconAdd ? 'plus' : 'angle-down'"
      />
    </div>
    <UIOUl @select="select($event)" floating :is-hiden="!isFocus" :items="props.items"/>
  </div>
</template>

<style module>
.css_select, .css_field {
  position: relative;
}

.css_iconAngleDown, .css_iconTimes {
  bottom: 8px;
  position: absolute;
  right: 8px;
}

.css_iconAngleDown {
  pointer-events: none;
}
</style>
