<script setup>
import { computed } from '@nuxtjs/composition-api'
import { CSSAlignItems, CSSArtifactDisabled, CSSArtifactMiselanea, CSSGap, CSSGridTemplateColumns } from "~/composables/useCSS"

const props = defineProps({
  active: { type: Boolean },
  bgHover: { type: String, default: 'graylight' },
  color: { type: String, default: 'gray' },
  colorActive: { type: String, default: 'black' },
  colorHover: { type: String, default: 'black' },
  disabled: { type: Boolean },
  isRadio: { type: Boolean }
})

const getCSSACheck = computed(() => {
  return [
    CSSAlignItems.center,
    CSSArtifactMiselanea.grid,
    CSSGap._8,
    CSSGridTemplateColumns.max_1fr
  ].filter($ => $)
})
</script>

<template>
<div :class="[getCSSACheck]">
  <UIAIcon
    @click="$emit('click', !props.active)"
    :bg-hover="props.bgHover"
    :br-radius="props.isRadio ? 50 : 4"
    :class="[CSSArtifactMiselanea.cursor_pointer]"
    :color="props.active ? props.colorActive : props.color"
    :color-hover="props.colorHover"
    :disabled="props.disabled"
    :name="props.isRadio ? props.active ? 'check-circle' : 'circle' : props.active ? 'check-square' : 'square-full'" />
  <div :class="CSSArtifactMiselanea.flex">
    <UIALabel :class="props.disabled ? CSSArtifactDisabled.check : null" is-inline-block line-clamp="1"><slot/></UIALabel>
  </div>
</div>
</template>